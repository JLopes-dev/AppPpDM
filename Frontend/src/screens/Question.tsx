import { Text, View, StyleSheet } from "react-native"
import { useState } from "react"
import Input from "../components/Input"
import Button from "../components/Button"

export default function Question() {
    const [question, setQuestion] = useState("");

    function submit() {
        console.warn("Funcionando");
        
    }
    return(
        <View style={style.container}>
            <Text style={style.titulo}>Questioner</Text>
            <Text style={style.subtitulo}>Escreva sua pergunta:</Text>
            <Input
            legenda=""
            valor={question}
            onChange={(e) => setQuestion(e)}
            style={style.input}
            senha={false}/>
            <Button
            legenda="Enviar"
            onclick={() => submit()}
            styleText={style.textButton}
            style={style.botao}/>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#37023A"
    },
    titulo: {
        color: 'white',
        fontSize: 30,
        marginTop: 110,
        marginBottom: 50
    },
    subtitulo: {
        color: 'white',
        fontSize: 25,
    },
    input: {
        width: '70%',
        height: '50%',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 50
    },
    botao: {
        width: '50%',
        height: 45,
        backgroundColor: '#FFFF00',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: -100
    },
    textButton: {
        fontSize: 25
    },
})