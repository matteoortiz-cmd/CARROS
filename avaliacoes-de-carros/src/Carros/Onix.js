import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const fotosOnix = [
  { id: 1, source: require('../../assets/Fotos/Onix.jpg'), rotulo: 'Chevrolet Onix' },
  { id: 2, source: require('../../assets/Fotos/Onix2.jpg'), rotulo: 'Tecnologia e conforto' },
  { id: 3, source: require('../../assets/Fotos/onix3.jpg'), rotulo: 'Economia no dia a dia' },
];

export default function Onix() {
  return (
    <ScrollView style={estilo.scrollWrapper}>
      <View style={estilo.container}>

        <Text style={estilo.titulo}>Chevrolet Onix</Text>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={estilo.scrollContent}
        >
          {fotosOnix.map((item) => (
            <View key={item.id} style={estilo.itemContainer}>
              <Image
                resizeMode="cover"
                style={estilo.img}
                source={item.source}
              />

              <Text style={estilo.rotulo}>
                {item.rotulo}
              </Text>
            </View>
          ))}
        </ScrollView>

        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}>
            O Chevrolet Onix é um hatch compacto conhecido por sua economia,
            tecnologia e conforto. É um veículo bastante utilizado tanto em
            trajetos urbanos quanto em viagens.
          </Text>
        </View>

      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  scrollWrapper: {
    flex: 1,
    backgroundColor: '#8C8C8C',
  },

  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 30,
    backgroundColor: '#8C8C8C',
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 20,
    color: '#ffffff',
    textAlign: 'center',
  },

  scrollContent: {
    paddingHorizontal: 8,
  },

  itemContainer: {
    marginHorizontal: 8,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    overflow: 'hidden',
    paddingBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },

  img: {
    width: 260,
    height: 330,
  },

  rotulo: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },

  resumo: {
    marginTop: 25,
    marginHorizontal: 16,
    backgroundColor: '#ffffff70',
    borderRadius: 10,
    padding: 12,
  },

  textoResumo: {
    fontSize: 16,
    color: '#222',
    lineHeight: 22,
  },
});