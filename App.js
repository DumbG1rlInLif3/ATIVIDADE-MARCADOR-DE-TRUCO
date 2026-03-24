import { Text, View, Button } from "react-native";
import { useState } from "react";
import { FlatList, TextInput } from "react-native-web";

export default function App() {
  const [nome, setNome] = useState('');
  const [minhaLista, setMinhaLista] = useState([]);

  function adicionarContato() {
    const novoContato = {
      id: Math.random().toString(), 
      // Gera um ID único usando um número aleatório convertido para string
      nome: nome,
      //objeto que tem o nome do contato, que é o valor do estado 'nome'
      cpf: " " 
    };
    setMinhaLista([novoContato, ...minhaLista]);
    setNome('');
    // Screth -> Cria uma nova array que contém o novo contato seguido dos contatos existentes na minhaLista. Isso é feito para manter os contatos anteriores e adicionar o novo contato no início da lista.
  }

return (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

    <TextInput
      placeholder="Digite seu nome: "
      value={nome}
      onChangeText={setNome}
      />

      <Button
        title="Adicionar Contato"
        onPress={adicionarContato}
      />
      <Text>Meus Contatos</Text>

      <FlatList
        data={minhaLista}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.nome}</Text>
        )}
      />
    
  </View>
)}