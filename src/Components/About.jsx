import React, { useContext } from 'react';
import { AuthContext } from '../Authproviders/AuthProviders';
//https://simple-firebase-auth-ccbaf.web.app/

const About = () => {
    const {user} = useContext(AuthContext)
    
    return (
        <div>
            <h2>About us</h2>
            <p style={{width:"50%"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eum eligendi delectus excepturi quidem voluptates quod? Qui perspiciatis explicabo itaque vel. Sunt pariatur ad explicabo omnis sit temporibus veritatis molestiae!
            </p>
        </div>
    );
};

export default About;