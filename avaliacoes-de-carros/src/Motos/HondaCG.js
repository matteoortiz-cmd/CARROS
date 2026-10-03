
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const fotosHondaCG = [
  { id: 1, source: require('../../assets/Fotos/HondaCG.jpg'), rotulo: 'Honda CG' },
  { id: 2, source: require('../../assets/Fotos/HondaCG2.jpg'), rotulo: 'Econômica e prática' },
  { id: 3, source: require('../../assets/Fotos/HondaCG3.jpg'), rotulo: 'Ideal para o dia a dia' },
];

export default function HondaCG() {
  return (
    <ScrollView style={estilo.scrollWrapper}>
      <View style={estilo.container}>

        <Text style={estilo.titulo}>Honda CG</Text>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={estilo.scrollContent}
        >
          {fotosHondaCG.map((item) => (
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
            A Honda CG é uma motocicleta bastante utilizada no Brasil.
            Ela se destaca pela economia de combustível, facilidade de
            manutenção e praticidade para deslocamentos urbanos.
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