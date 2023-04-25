import React, { useContext } from 'react';
import { AuthContext } from '../Authproviders/AuthProviders';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Private = ({children}) => {
    const {user,loader} = useContext(AuthContext)
    const location = useLocation()
    if(loader){
        return <div>Loading....</div>
    }

    if(user){

        return children
    }

    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default Private;