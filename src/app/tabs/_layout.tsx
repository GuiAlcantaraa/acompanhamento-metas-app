import { AuthProvider } from "@/src/context/AuthContext";
import { GoalsProvider } from "@/src/context/GoalsContext";
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
return(
<AuthProvider>
    <GoalsProvider>
        <Tabs screenOptions={{
                            tabBarActiveTintColor: '#00bcd4',
                            tabBarInactiveTintColor: 'black',
                            headerShown: false,
                        }}>
            <Tabs.Screen 
            name="goals" 
            options={{
                title: "Metas",
                tabBarIcon: ({}) =>(
                    <MaterialIcons
                        name="checklist-rtl"
                        olor={'black'}
                        size={30}
                    />
                )
            
            }}
            />
            <Tabs.Screen 
            name="profile" 
            options={{
                title: "Perfil",
                tabBarIcon: ({}) =>(
                    <MaterialIcons
                        name="person"
                        olor={'black'}
                        size={30}
                    />
                )
            
            }}
        />

        </Tabs>
    </GoalsProvider>
</AuthProvider>
)
}
