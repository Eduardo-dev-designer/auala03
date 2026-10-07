import { StyleSheet, Text, View } from "react-native";
import Cachorro from "./componentes/Cachorro";
import Gato from "./componentes/Gato";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Quase me mijei levando choque</Text>
      <Gato/>
      <Cachorro nome={"caramelo"} raça={"feladaputa"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
