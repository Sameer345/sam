import React from 'react';
import { useParams } from 'react-router-dom';
// useParams

const Contact = () =>{
    let { slug } = useParams();
    return(
        <div>
            
            <h1>my name{slug}</h1>
        <h1> contact</h1>
        </div>
    );
};
export default Contact;