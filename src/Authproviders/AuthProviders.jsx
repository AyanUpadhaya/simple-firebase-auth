import React, { createContext, useState } from 'react';


export const AuthContext = createContext(null)

import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'

import {app} from './../firebase/firebase.config'
import { useEffect } from 'react';
const auth = getAuth(app)
const AuthProviders = ({children}) => {
    
    const [user,setUser] =useState(null)
    const [loader,setLoader] = useState(true); 

    const createUser = (email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    //observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoader(false)
        })
        return ()=>unsubscribe()
    },[])

    const authInfo ={
        user,
        createUser,
        signIn,
        setUser,
        logOut,
        loader,
    }

    
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProviders;