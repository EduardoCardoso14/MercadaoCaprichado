import React, { useState, useEffect } from 'react';
import { Text, FlatList, TouchableOpacity, View, Button, TextInput, Alert, Image } from 'react-native';
import css from './estilo/estilo';
import axios, { toFormData } from 'axios';


function TelaCadastro({ navigation, route }) {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    cadastrar = () => {
        let token = 'Q!W@ee344%%R';
        if (usuario.trim() !== '' && senha.trim() !== '') {
            axios.post('http://172.16.42.89/apiMercadao/cadastrar/', { token, usuario, email, telefone, senha })
                .then(response => {
                    const data = response.data;
                    console.log("oioi");
                    navigation.navigate('TelaLogin');
                })
                .catch(error => {
                    console.log('Erro ao enviar dados:', error);
                    navigation.navigate('TelaLogin');
                });
        } else {
            alert('Preencher Campos!!!');
        }
    }
    return (
        <View style={css.container}>
            <Text> </Text>
            <Text> </Text>
            <TouchableOpacity>
                <Image source={require('./assets/logo2.png')} style={css.logox}></Image>
            </TouchableOpacity>
            <Text></Text>
            <Text>Fazer Cadastro</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text>Já tem uma conta? Clique</Text>
                <TouchableOpacity onPress={() => navigation.navigate('TelaLogin')}>
                    <Text style={{ color: 'blue' }}> aqui.</Text>
                </TouchableOpacity>
            </View>
            <Text></Text>
            <View>
                <Text>Usuário</Text>
                <TextInput placeholder="Usuário" style={css.campo} onChangeText={(text) => setUsuario(text)} value={usuario} ></TextInput>
                <Text>E-mail</Text>
                <TextInput placeholder="E-mail" style={css.campo} onChangeText={(text) => setEmail(text)} value={email}></TextInput>
                <Text>Telefone</Text>
                <TextInput placeholder="Telefone" style={css.campo} onChangeText={(text) => setTelefone(text)} value={telefone}></TextInput>
                <Text>Senha</Text>
                <TextInput placeholder="Senha" style={css.campo} onChangeText={(text) => setSenha(text)} value={senha}></TextInput>
                <View style={css.principal}>
                    <View style={css.viewletra2}>
                        <View><Button title="Cadastrar" color='#154360' onPress={cadastrar} /></View>
                    </View>

                </View>

            </View>
            <Text> </Text>
        </View>
    );
}
export default TelaCadastro;