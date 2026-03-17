import { StatusBar } from 'expo-status-bar';
import { Image, Button, StyleSheet, Text, View, ViewComponent } from 'react-native';
import { useState } from 'react';


export default function App() {

  const [contador, setContador] = useState(0)

  function diminuirContador() {
    if (contador > 0) {
      setContador(contador - 1)
    }
  }

  function aumentarContador() {
      setContador(contador + 1)
    
  }

  return (
    <View style={styles.container}>

      <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShmiCv0ECn4qebaySlKUFQiiFG2MZOkWEzzirv1ZUwIQ&s'}} 
      style={{width: 200, height: 200, alignSelf: 'center', marginVertical: 5}}/>
    
      <Text style={{ fontSize: 20, fontWeight: 'bold', color:'black', textAlign: 'center', marginVertical: 15}}
      >Marcador</Text>

      <Text style={{ fontSize: 60, fontWeight: 'bold', color:'black', textAlign: 'center', marginTop: 8}}
      >{contador}</Text>

      <View style= {{flexDirection: 'row', gap: 20, justifyContent: 'center', marginVertical:75}}>
      <Button onPress={aumentarContador} 
      title=' + '
      color="green"/>

      <Button onPress={diminuirContador} 
      title=' - '
      color="red"/>
      </View>
      
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

