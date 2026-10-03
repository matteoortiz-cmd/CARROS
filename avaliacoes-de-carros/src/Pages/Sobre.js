import * as React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

export default function Home(){
  return(
    <View style={estilo.container}>
      <ImageBackground style={estilo.fundoimg} resizeMode="stretch" source={require('../../assets/Fotos/FundoV.jpg')}>
    <Text style={estilo.titulo}> Sobre Nos </Text>
      </ImageBackground>
      <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}>
     Nós somos dois desenvolvedores no início da profissão, e este é o nosso projeto inicial: um site de carros que reúne alguns modelos.

As tecnologias utilizadas foram imagens, textos, View, Stylesheet e imagens de fundo (backgrounds), que proporcionaram um projeto limpo e organizado.
          </Text>
        </View>
    </View>
  );
}

const estilo= StyleSheet.create({
  container:{
    flex:1,
  },
  fundoimg:{
    flex:1,
    justifyContent:'center'
  },
  titulo: {
    fontSize: 28,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  resumo: {
    marginTop: 25,
    marginHorizontal: 16,
    backgroundColor: '#ffffff70',
    borderRadius: 10,
    padding: 12,
  }
})
