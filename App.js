import { StatusBar } from "expo-status-bar";
import { Image, Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export default function App() {
  // Contadores independentes para os marcadores
  const [contadorA, setContadorA] = useState(0);
  const [contadorB, setContadorB] = useState(0);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          
        }}
      >
        {/* Imagem da View via uri da web*/}
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShmiCv0ECn4qebaySlKUFQiiFG2MZOkWEzzirv1ZUwIQ&s",
          }}
          style={{
            width: 250,
            // Largura da imagem
            height: 150,
            // Altura da imagem
            marginTop: 100,
            // Margem superior para afastar a imagem do topo da tela
          }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          // Organiza os elementos em linha
          justifyContent: "space-between",
          // Distribui os elementos com espaço entre eles
          padding: 10,
          // Adiciona um pouco de preenchimento ao redor dos elementos
          gap: 25,
        }}
      >
        <View>
          {/* Começo Bloco 1 - Marcador */}

          {/* Título do 1 container com Style*/}
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              marginVertical: 1,
              // Adiciona um pouco de margem vertical para separar o título do contador, melhorando a legibilidade
              padding: 50,
            }}
          >
            NÓS
          </Text>
          
          {/* Total do Contador do 1 container */}
          <Text
            style={{
              fontSize: 60,
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
            }}
          >
            {contadorA}
          </Text>

          {/* Estilo do Botão contador 1 */}
          <View
            style={{
              flex: 1,
              gap: 50, 
              // espaçamento entre os botões, para evitar que fiquem colados
              justifyContent: "center",
              marginVertical: 55,
              // espaçamento vertical para afastar os botões do contador, deixando o layout mais limpo
              gap: 30,
            }}
          >
            <Button
              onPress={() => setContadorA(contadorA + 1)}
              title=" + "
              color="green"
            />

            {/* Se o contadorA for maior que 0, subtrair 1. Senão, não fazer nada */}
            <Button
              onPress={() =>
                contadorA > 0 ? setContadorA(contadorA - 1) : null
              }
              title=" - "
              color="#970707"
            />

            <Button
              onPress={() => setContadorA(contadorA + 3)}
              title=" TRUCO "
              color="#008080"
            />

            <Button
              onPress={() => setContadorA(contadorA + 6)}
              title="SEIS"
              color="#000080"
            />

            <Button
              onPress={() => setContadorA(contadorA + 9)}
              title="NOVE"
              color="#4B0082"
            />

            <Button
              onPress={() => setContadorA(contadorA + 9)}
              title="DOZE"
              color="#570a0a"
            />
          </View>
        </View>

        <View>
          {/* Fim Bloco 1 - Marcador */}

          {/* Bloco 2 - Marcador */}
          
          {/* Título do 2 container com Style*/}
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "black",
                textAlign: "center",
                marginVertical: 1,
                padding: 50,
              }}
            >
              ELES
            </Text>

            {/* Total do Contador do 2 container */}
            <Text
              style={{
                fontSize: 60,
                fontWeight: "bold",
                color: "black",
                textAlign: "center",
              }}
            >
              {contadorB}
            </Text>

            <View
              style={{
                flex: 1,
                // Permite que a View ocupe o espaço disponível, garantindo que os botões sejam centralizados verticalmente
                gap: 50,
                justifyContent: "center",
                gap: 30,
              }}
            >
              {/* Estilo do Botão contador 2 */}
              <Button
                onPress={() => setContadorB(contadorB + 1)}
                title=" + "
                color="green"
              />

              {/* Se o contadorB for maior que 0, subtrair 1. Senão, não fazer nada */}
              <Button
                onPress={() =>
                  contadorB > 0 ? setContadorB(contadorB - 1) : null
                }
                title=" - "
                color="#970707"
              />

              <Button
                onPress={() => setContadorB(contadorB + 3)}
                title=" TRUCO "
                color="#008080"
              />

              <Button
                onPress={() => setContadorB(contadorB + 6)}
                title="SEIS"
                color="#000080"
              />

              <Button
                onPress={() => setContadorB(contadorB + 9)}
                title="NOVE"
                color="#4B0082"
              />

              <Button
                onPress={() => setContadorB(contadorB + 9)}
                title="DOZE"
                color="#570a0a"
              />
              {/* Fim Bloco 2 - Marcador */}
            
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
