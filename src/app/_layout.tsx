import { Stack } from "expo-router";
import { AuthProvider } from "../context/AuthContext";

export default function Layout() {
    return(
        <AuthProvider>
            <Stack screenOptions={{headerShown: false}}>
                <Stack.Screen 
                    name="index" 
                    options={{title: "Entrar", headerShown: false}}
                />

                <Stack.Screen name="sign-up" 
                    options={{title: "Criar Conta", headerShown: true}}
                />
            </Stack>
        </AuthProvider>
    )
}