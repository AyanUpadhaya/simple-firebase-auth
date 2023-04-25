import React, { useContext } from 'react';
import { AuthContext } from '../Authproviders/AuthProviders';

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignUp = event=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)

        createUser(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <input type="text" name="name" placeholder='Name' /> <br />
                <input type="text" name="email" placeholder='email' /> <br />
                <input type="password" name="password" placeholder='password'/><br />
                <button type="submit">Sign Up</button>
            </form>
            
        </div>
    );
};

export default SignUp;