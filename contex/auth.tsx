import { createContext,ReactNode, useState } from "react";


interface AuthContextType {
    token: string | null;
    setToken: (token: string | null) => void;
  }
  
export const AuthenticationContext = createContext<AuthContextType>({
    token: null,
    setToken: () => {},
  })

interface prop{
    children:ReactNode;
}

export function AuthContext({children}:prop){
    const [authToken,setAuthToken] = useState<string|null>(null);

    const setToken = (token:string|null)=>{
        setAuthToken(token);

    }
    const value={
        token:authToken,
        setToken:setToken
    }



    return <AuthenticationContext.Provider value={value}>{children}</AuthenticationContext.Provider>

}