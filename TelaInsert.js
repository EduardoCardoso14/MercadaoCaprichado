import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput, Alert, TouchableOpacity, Image } from 'react-native';
import css from './estilo/estilo';
import axios from 'axios';

function TelaInsert({ navigation }) {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [imagem, setImagem] = useState('');
  const [quantidade, setQuantidade] = useState('');

  cadastrar = () => {
    let token = 'Q!W@ee344%%R';
    if (nome.trim() !== '' && valor.trim() !== '' && quantidade.trim() !== '') {
      alert(nome + '\n cadastrado com sucesso!');
      axios.post('http://172.16.42.89/apiMercadao/insert/', { token, nome, valor, imagem, quantidade })
        //axios.post('https://api.semlimite.app.br/insert/', { token, nome, valor, imagem, quantidade })
        .then(response => {
          const data = response.data;
          aviso = 0;
        })
        .catch(error => {
          console.log('Erro ao enviar dados:', error);
        });
      navigation.navigate('TelaRetorno2');
    } else {
      alert('Preencher Campos!!!');
    }
  }
  limpar = () => {
    setImagem('');
    setNome('');
    setValor('');
    setQuantidade('');
  }
  return (
    <View style={css.container}>
      <Text> </Text>
      <Text> </Text>
      <TouchableOpacity onPress={() => navigation.navigate('TelaInicial')}>
        <Image source={require('./assets/logo2.png')} style={css.logox}></Image>
      </TouchableOpacity>

      <Text>NovoCadastro</Text>
      <View>
        <Text>Produto</Text>
        <TextInput placeholder="Produto" style={css.campo} onChangeText={(text) => setNome(text)} value={nome}></TextInput>
        <Text>Valor</Text>
        <TextInput placeholder="0.00" style={css.campo} onChangeText={(text) => setValor(text)} value={valor}></TextInput>
        <Text>Produto</Text>
        <TextInput placeholder="URL da imagem" style={css.campo} onChangeText={(text) => setImagem(text)} value={imagem}></TextInput>
        <Text>Quantidade</Text>
        <TextInput placeholder="" style={css.campo} onChangeText={(text) => setQuantidade(text)} value={quantidade}></TextInput>
        <View style={css.viewbotoes}>
          <View><Button title="Limpar" color='#154360' onPress={limpar} /></View>
          <View><Button title="Adicionar Produto" color='#154360' onPress={cadastrar} /></View>
        </View>
      </View>
      <Text> </Text>
    </View>
  );
}
export default TelaInsert;

