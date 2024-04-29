import React, { useState, useEffect } from 'react';
import { Text, FlatList, TouchableOpacity, View, Button, TextInput, Alert, Image } from 'react-native';
import css from './estilo/estilo';
import axios, { toFormData } from 'axios';

function TelaLogin({ navigation, route }) {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    autenticar = () => {
        let token = 'Q!W@ee344%%R';
        if (usuario.trim() !== '' && senha.trim() !== '') {
            axios.post('http://172.16.42.89/apiMercadao/autenticar/', { token, usuario, senha })
                .then(response => {
                    const data = response.data;
                    //console.log(data);
                    if (data == "Nenhum usuário encontrado.null") {
                        alert('Nenhum usuário encontrado! \nFaça o cadastro primeiro')
                    } else {
                        navigation.navigate('TelaRetorno');
                    };
                })
                .catch(error => {
                    console.log('Erro ao enviar dados:', error);
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
            <Text>Login</Text>
            <View style={{flexDirection: 'row'}}>
            <Text>Ainda não tem um login? Clique</Text>
            <TouchableOpacity onPress={() => navigation.navigate('TelaCadastro')}>
                <Text style={{color: 'blue'}}> aqui.</Text>
            </TouchableOpacity>
            </View>

            <Text></Text>
            <View>
                <Text>Usuário</Text>
                <TextInput placeholder="Usuário" style={css.campo} onChangeText={(text) => setUsuario(text)} value={usuario}></TextInput>
                <Text>Senha</Text>
                <TextInput placeholder="Senha" style={css.campo} onChangeText={(text) => setSenha(text)} value={senha}></TextInput>

                <View style={css.principal}>
                    <View style={css.viewletra2}>
                        <View><Button title="Login" color='#154360' onPress={autenticar} /></View>
                    </View>

                </View>

            </View>
            <Text> </Text>
        </View>
    );
}
export default TelaLogin;