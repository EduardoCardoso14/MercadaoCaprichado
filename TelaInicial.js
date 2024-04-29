import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import css from './estilo/estilo';


function TelaInicial({ navigation }) {
  return (
    <View style={css.container}>
      <Text> </Text>
      <Button title='<- sair' color='#154360' onPress={() => navigation.navigate('TelaLogin')}></Button>
      <Image source={require('./assets/logo1.jpg')} style={css.logo}></Image>
      <Text> </Text>
      <Text>Bem Vindo =)</Text>
      <Text> </Text>
      <Text> </Text>
      <View style={css.principal}>
        <View>
          <Button title='Select' color='#154360' onPress={() => navigation.navigate('TelaSelect')}></Button>
        </View>
        <View>
          <Button title='Insert' color='#154360' onPress={() => navigation.navigate('TelaInsert')}></Button>
        </View>
        <View>
          <Button title='Delete' color='#154360' onPress={() => navigation.navigate('TelaDelete')}></Button>
        </View>
        <View>
          <Button title='Busca' color='#154360' onPress={() => navigation.navigate('TelaBusca')}></Button>
        </View> 
      </View>







    </View>
  );
}
export default TelaInicial;
