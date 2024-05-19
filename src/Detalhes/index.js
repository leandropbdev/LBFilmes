import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Detalhes(props) {
  return (
    <View style={styles.container}>

      <View style={styles.modalContainer}>



        <TouchableOpacity onPress={props.voltar} style={styles.btnVoltar} >
          <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center' }}>
            Fechar
          </Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>{props.filme.nome}</Text>

        <View style={{alignItems:'center', padding:5, borderBottomWidth:1, borderColor:'white', borderBottomRightRadius:20, borderBottomLeftRadius:20, marginBottom:10 }}>
          <Image
            source={{ uri: props.filme.foto }}
            style={{ width: 360, height: 150, marginBottom:10, borderRadius:5,  }}
          />
        </View>

        <Text style={styles.sinopse}>Sinopse ...</Text>
        <Text style={styles.descricao}>{props.filme.sinopse}</Text>

      </View>
    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    marginLeft: 5,
    marginRight: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',

  },
  modalContainer: {
    height: '90%',

    backgroundColor: '#121212',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10

  },
  btnVoltar: {
    backgroundColor: 'red',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10


  },
  titulo: {
    textAlign: 'center',
    color: '#fff',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  sinopse: {
    color: 'white',
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 10
  },
  descricao: {
    color: 'white',
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'justify'
  }
})