import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [contador, setContador] = useState(0);

  const sumarPropiedad = () => {
    setContador(contador + 1);
  };

  const restarPropiedad = () => {
    setContador(contador - 1);
  };

  const reiniciarPropiedad = () => {
    setContador(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador</Text>
      <Text style={styles.contador}>Valor: {contador}</Text>

      <View style={styles.botonesContainer}>
        <TouchableOpacity style={[styles.boton, styles.botonSumar]} onPress={sumarPropiedad}>
          <Text style={styles.textoBoton}>Sumar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.boton, styles.botonRestar]} onPress={restarPropiedad}>
          <Text style={styles.textoBoton}>Restar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.boton, styles.botonReiniciar]} onPress={reiniciarPropiedad}>
          <Text style={styles.textoBoton}>Reiniciar</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  contador: {
    fontSize: 28,
    marginBottom: 30,
    color: '#444',
  },
  botonesContainer: {
    width: '100%',
    alignItems: 'center',
  },
  boton: {
    width: '60%',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  botonSumar: {
    backgroundColor: '#4CAF50',
  },
  botonRestar: {
    backgroundColor: '#F44336',
  },
  botonReiniciar: {
    backgroundColor: '#2196F3',
  },
  textoBoton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
