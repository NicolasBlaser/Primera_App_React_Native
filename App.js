import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [Valor, setValor] = useState(0);

  const cambiarValor = () =>
  {
    setValor(valor + 1);
  };
  
  return (
    <View style={styles.container}>
       <Text style={styles.texto}>Valor: {valor}</Text>
       <Button onPress={cambiarValor} />
        <StatusBar style="auto" />
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
