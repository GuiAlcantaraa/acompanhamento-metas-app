import { Link } from 'expo-router';
import { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { AuthContext } from '../context/AuthContext';

export default function Index(){
    const { handleSignIn } = useContext(AuthContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    async function handleSign() {
    
    if(email === "" || password === ""){
      alert("Informe os dados para prosseguir.")
      return;
    }

    await handleSignIn({
      email,
      password
    })
  }

    return(
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.subtitle}>Faça seu login para continuar</Text>

      <TextInput
        textContentType= 'emailAddress'
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholderTextColor="#aaa"
      />
      
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        placeholderTextColor="#aaa"
        secureTextEntry={true}
      />  

      <TouchableOpacity style={[styles.button]} onPress={handleSign}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>


      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Não tem uma conta?{' '}
          <Link href="/sign-up" style={styles.linkText}>
            Criar conta
          </Link>
        </Text>
      </View>

    </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#f5f7fa',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#333',
    marginBottom: 25,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5, // para Android shadow
  },
  button: {
    backgroundColor: '#5bd1d7',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#00bcd4',
    shadowOpacity: 0.7,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 8,
  },
  buttonDisabled: {
    backgroundColor: '#a0d6db',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  footerText: {
    fontSize: 15,
    color: '#000',
  },
  linkText: {
    color: '#5bd1d7', // azul padrão para links, ou use o que combina com sua paleta
    fontWeight: '600',
  },
});