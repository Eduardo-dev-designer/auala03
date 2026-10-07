import { Text, View } from "react-native";

type FuncionarioProps = {
    nome: string;
    idade: string;
    setor: string;


};




export default function Funcionario(props: FuncionarioProps) {

    return (
        <View>
            <Text> Funcionario: {props.nome}</Text>
            <Text> idade: {props.idade}</Text>
            <Text> setor: {props.setor}</Text>
        </View>




    );

}