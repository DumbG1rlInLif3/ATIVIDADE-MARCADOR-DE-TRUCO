import { StatusBar } from 'expo-status-bar';
import { Image, Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';


export default function App() {

  // Contadores para os marcadores
  const [contadorA, setContadorA] = useState(0);
  const [contadorB, setContadorB] = useState(0);

  return (
    
    <View style={styles.container}>

    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
    <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShmiCv0ECn4qebaySlKUFQiiFG2MZOkWEzzirv1ZUwIQ&s'}} 
      style={{width: 200, height: 200, alignSelf: 'center', marginVertical: 5}}/>
    </View>
    
      {/* Começo Bloco 1 - Marcador */}
      <View style={{ flex: 1, justifyContent: 'space-between', padding: 10}}/>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color:'black', textAlign: 'center', marginVertical: 15}}
      >NÓS</Text>

      <Text style={{ fontSize: 60, fontWeight: 'bold', color:'black', textAlign: 'center', marginTop: 8}}
      >{contadorA}</Text>

      {/* Estilo do Botão contador 1 */}
      <View style= {{flexDirection: 'row', gap: 20, justifyContent: 'center', marginVertical:75}}>
      <Button onPress={ () => setContadorA(contadorA + 1)} 
      title=' + ' 
      color="green"/>

      {/* Se o contadorA for maior que 0, subtrair 1. Senão, não fazer nada */}
      <Button onPress={ () => contadorA > 0 ? setContadorA(contadorA - 1) : null} 
      title=' - '
      color="red"/>
      </View>
      {/* Fim Bloco 1 - Marcador */}

      {/* Bloco 2 - Marcador */}
      <View style={{ flex: 1, justifyContent: 'space-between', padding: 10}}/>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color:'black', textAlign: 'center', marginVertical: 15}}
      >ELES</Text>

      <Text style={{ fontSize: 60, fontWeight: 'bold', color:'black', textAlign: 'center', marginTop: 8}}
      >{contadorB}</Text>

      {/* Estilo do Botão contador 2 */}
      <View style= {{flexDirection: 'row', gap: 20, justifyContent: 'center', marginVertical:75}}>
      <Button onPress={ () => setContadorB(contadorB + 1)} 
      title=' + '
      color="green"/>

      {/* Se o contadorB for maior que 0, subtrair 1. Senão, não fazer nada */}
      <Button onPress={ () => contadorB > 0 ? setContadorB(contadorB - 1) : null} 
      title=' - '
      color="red"/>
      </View>
      {/* Fim Bloco 2 - Marcador */}
      
      <StatusBar style="auto" />
    </View>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

