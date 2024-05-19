import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';


import styles from './assets/style';

import api from './src/services/api';
import Filmes from './src/filmes';



export default function App(){

const [filmes, setFilmes] = useState([]);

useEffect(()=>{
    async function loadFilmes(){
        const response = await api.get('r-api/?api=filmes') 

        setFilmes(response.data)
    }

    loadFilmes();
},[])

    return(
        <View style={styles.container}>
            <FlatList 
            data={filmes}
            keyExtractor={item => String(item.id)}
            renderItem={({item})=> <Filmes data={item} />}
            
            />
        </View>
    )
}


