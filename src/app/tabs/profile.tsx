import { User } from "@/src/components/user";
import { AuthContext } from "@/src/context/AuthContext";
import { useContext } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";

export default function Profile () {
   const { handleSignOut } = useContext(AuthContext)


    return (
        <SafeAreaView style={styles.container}>
           <User />

           <TouchableOpacity style={styles.signOut} onPress={handleSignOut}>
                <Text style={styles.text}>Sair</Text>
           </TouchableOpacity>
        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f7fa', 
    flex: 1, 
    alignItems: 'center' },

  signOut: {
    width:'25%', 
    padding: 9, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ce2d3a',
    borderRadius: 3,
    marginTop: 20
  },
  
  text: {
    fontSize: 15,
    color: '#ffff',
    marginLeft: 7
  }
 
});