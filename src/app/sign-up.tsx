import { Link } from "expo-router";
import { View, StyleSheet, Text } from "react-native";

export default function SingUp() {
    return(
        <View style={styles.container}>
            <Text>
                Criar conta
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f7fa',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    back: {
        fontSize: 16,
        fontWeight: 'bold'
    }

})