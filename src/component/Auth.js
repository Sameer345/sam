import React from 'react';
import { Redirect } from 'react-router-dom';
const Auth = ({authorized}) =>{
    if (!authorized){
        return<Redirect to="/sinup"/>;
    }
    return(
        <div>
        <h1> cauth</h1>
        </div>
    );
};
export default Auth;