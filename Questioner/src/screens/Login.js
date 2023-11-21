import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Button from "../components/Button";
import { useNavigation } from '@react-navigation/native'
import Input from "../components/Input";
import axios from "axios";

export default props => {
    const navigation = useNavigation()
    const cadastrar = () => {
        navigation.navigate('Register')
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const pegandoEmail = (e) => {
        setEmail(e)
    }
    const pegandoSenha = (e) => {
        setPassword(e)
    }
    const home = async () => {
        await axios.post(`http://192.168.0.103:3001/user/register/${email}/${password}`)
        navigation.navigate('Home')
    }
    return (
        <View style={styled.container}>
            <Text style={styled.titulo}>Questioner</Text>
            <Image source={require('../assets/Logo.png')} />
            <View style={styled.subtituloContainer}>
                <Text style={styled.subtitulo}>Login</Text>
            </View>
            <Input
                valor={email}
                onChange={(e) => pegandoEmail(e)}
                senha={false}
                legenda='Email'
                style={styled.inputs}
            />
            <Input
                valor={password}
                onChange={(e) => pegandoSenha(e)}
                senha={true}
                legenda='Senha'
                style={styled.inputs}
            />
            <Button
                onclick={() => home()}
                legenda='Entrar'
                style={styled.botao}
                styleText={styled.textButton} />
            <Button
                onclick={() => cadastrar()}
                legenda='cadastre-se'
                styleText={styled.link} />
        </View>
    )
}
const styled = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        alignItems: 'center',
        backgroundColor: '#37023A'
    },
    titulo: {
        color: 'white',
        fontSize: 30,
        marginTop: 110,
        marginBottom: 25
    },
    subtituloContainer: {
        width: '100%',
    },
    subtitulo: {
        color: 'white',
        fontSize: 25,
        textAlign: 'left',
        marginLeft: 55,
    },
    inputs: {
        backgroundColor: 'white',
        width: '70%',
        height: 50,
        fontSize: 20,
        padding: 10,
        marginTop: 15
    },
    botao: {
        width: '50%',
        height: 45,
        backgroundColor: '#FFFF00',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20
    },
    textButton: {
        fontSize: 25
    },
    link: {
        color: 'white',
        marginLeft: 100,
        fontSize: 15,
        marginTop: -10
    }
})