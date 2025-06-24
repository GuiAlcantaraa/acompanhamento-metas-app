import React, { useContext } from 'react';
import { Text, View, Image } from 'react-native'
import { styles } from './styles';

export function User() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.Image}
        source={{ uri: "https://github.com/joaoDias-L.png" }}
      />

      <Text  style={styles.textName}>Joao Vitor Dias</Text>
      <Text  style={styles.textEmail}>dias@gmail.com</Text>
    </View>
  );
}
