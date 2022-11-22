import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';

const Protected = ({children}) => {

    // let auth = true;
    // if(!auth ){
    //     return <Navigate to='/signup'/>
    // }
    let {user} = UserAuth();
    if(!user ){
        return <Navigate to='/signup'/>
    }


    return (
        children
    );
}

export default Protected;
