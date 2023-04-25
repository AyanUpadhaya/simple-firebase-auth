import React, { useContext } from 'react';
import { AuthContext } from '../Authproviders/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {signIn,setUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const from = location.state?.from?.pathname || "/";
    const handleLogin = (event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        signIn(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from,{replace:true})

        })
        .catch(error=>console.log(error))

    }
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="text" name="email" placeholder='email' /> <br />
                <input type="password" name="password" placeholder='password'/><br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;