import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authproviders/AuthProviders';

const ulStyle ={
    listStyleType:"none",
    display:"flex",
    gap:"10px",
}


const Header = () => {
    const {user,logOut,setUser} = useContext(AuthContext)
    const handleSignOut = ()=>{
        console.log('Signout clicked');
        logOut()
        .then(()=>{})
        .catch(error=>console.log(error.message))
    }
    return (
        <div>
            <ul style={ulStyle}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/checkout">Checkout</Link></li>
                {user && <li><button onClick={handleSignOut}>Logout</button></li>}
            </ul>
        </div>
    );
};

export default Header;