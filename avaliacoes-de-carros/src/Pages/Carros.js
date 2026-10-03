import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const carros = [
  {
    uid: 1,
    nome: 'HB20',
    like: 234,
    donos: 2345,
    button: 'Hb20'
  },
  {
    uid: 2,
    nome: 'Onix',
    like: 900,
    donos: 3345,
    button: 'Onix'
  },
  {
    uid: 3,
    nome: 'Renegade',
    like: 850,
    donos: 4345,
    button: 'Renegade'
  },
  {
    uid: 4,
    nome: 'T-Cross',
    like: 250,
    donos: 345,
    button: 'Tcross'
  },
];

export default function Carros({ navigation }) {
  return (
    <View style={estilo.container}>

      <Text style={estilo.titulo}>
        Os melhores Carros
      </Text>

      <FlatList
        data={carros}
        keyExtractor={(item) => String(item.uid)}
        renderItem={({ item }) => (
          <View style={estilo.carro}>

            <TouchableOpacity
              onPress={() => navigation.navigate(item.button)}
            >
              <Text style={estilo.txtCarro}>
                {item.nome}
              </Text>
            </TouchableOpacity>

            <View style={estilo.rede}>

              <View style={estilo.itemRede}>
                <MaterialCommunityIcons
                  name="thumb-up"
                  size={18}
                  color="#F00"
                />

                <Text style={estilo.textoRede}>
                  {' '}{item.like} Curtidas
                </Text>
              </View>

              <View style={estilo.itemRede}>
                <MaterialCommunityIcons
                  name="account-heart"
                  size={18}
                  color="blue"
                />

                <Text style={estilo.textoRede}>
                  {' '}{item.donos} donos
                </Text>
              </View>

            </View>

          </View>
        )}
      />

    </View>
  );
}

const estilo = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#8C8C8C',
  },

  carro: {
    backgroundColor: '#ffffff',
    marginHorizontal: 15,
    marginVertical: 8,
    padding: 15,
    borderRadius: 10,
  },

  titulo: {
    fontSize: 28,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    marginVertical: 20,
  },

  rede: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },

  itemRede: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  txtCarro: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },

  textoRede: {
    fontSize: 14,
    color: '#444',
  },

});