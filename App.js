import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';


export default function App() {
 const [contador, setContador] = useState(0)


  sumarPropiedad = () =>
  {
    setContador(contador + 1)
  }
  restarPropiedad = () =>
  {
    setContador(contador - 1)
  }
  reiniciarPropiedad = () =>
  {
    setContador(contador == 0)
  }
  return (
    <View style={styles.container}>
       <Text style={styles.texto}>Valor: {contador} </Text>
        <StatusBar style="auto" />
        <Button onPress={sumarPropiedad} title="Sumar" color="#008000"/>
        <Button onPress={restarPropiedad} title="Restar" color="#ff0000"/>
        <Button onPress={reiniciarPropiedad} title="Reiniciar" color="#ff0000"/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
