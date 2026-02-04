import axios from "axios"

import { FIREBASE_API_KEY } from '@env';

const endpoint_login = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`;
const endpoint_signin = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`;

export async function login(username,password){
    
    const response = await axios.post(endpoint_login,{
        email:username,
        password:password,
        returnSecureToken: true

    })
    return response.data;
}



export async function signin(username,password){
    
    const response = await axios.post(endpoint_signin,{
        email:username,
        password:password,
        returnSecureToken: true

    })
    return response.data;
}