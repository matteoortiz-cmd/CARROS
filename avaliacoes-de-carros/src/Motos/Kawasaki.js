import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const fotosKawasaki = [
  { id: 1, source: require('../../assets/Fotos/Kawasaki.jpg'), rotulo: 'Kawasaki' },
  { id: 2, source: require('../../assets/Fotos/Kawasaki2.jpg'), rotulo: 'Design esportivo' },
  { id: 3, source: require('../../assets/Fotos/Kawasaki3.jpg'), rotulo: 'Desempenho e potência' },
];

export default function Kawasaki() {
  return (
    <ScrollView style={estilo.scrollWrapper}>
      <View style={estilo.container}>

        <Text style={estilo.titulo}>Kawasaki</Text>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={estilo.scrollContent}
        >
          {fotosKawasaki.map((item) => (
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
            A Kawasaki é conhecida por produzir motocicletas esportivas
            com forte desempenho, tecnologia e design marcante. Muitos de
            seus modelos são voltados para quem procura velocidade e
            esportividade.
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