import { ReactNode, createContext, useState } from "react";
import api from "../services/api";
import { router } from "expo-router";

interface IUserCredentials {
    email: string,
    password: string,
}

interface IUserResponse {
    id: string,
    name: string,
    email: string,
}

interface IAuthContextData {
    user: IUserResponse | null;
    signed: boolean;
    handleSignIn(credentials: IUserCredentials): Promise<void>;
    handleSignOut(): void;
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as IAuthContextData);

export const AuthProvider = ({children}: AuthProviderProps) =>{

    const [user, setUser] = useState<IUserResponse | null>(null)
    const [signed, setSigned] = useState<boolean>(true)

    async function handleSignIn({email, password}: IUserCredentials){
        
        const { data } = await api.get('/user',{
            params:{
                email,
                password
            }
        })
        const user = data[0];
        
        if(!user){
            alert("Usuario invalido");
            setUser(null)
            setSigned(false)
            return;
        }

        setUser(user)
        setSigned(true)

        router.navigate('/tabs/goals')

    }

    function handleSignOut() {
        setSigned(false)
        setUser(null);

        router.navigate('/')
    }

    return (
        <AuthContext.Provider
            value={{ handleSignIn, signed, user, handleSignOut }}
        >
            {children}
        </AuthContext.Provider>
    )
}