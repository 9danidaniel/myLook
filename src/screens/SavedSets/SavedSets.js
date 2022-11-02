import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    StatusBar,
    ScrollView,
    FlatList
} from 'react-native';
import SetCard from "../../components/SetCard/SetCard";
import SavedSetsList from "../../data/SavedSetsList";
import styles from './styles'


const SavedSets = ({ navigation }) => {
    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('set_list')
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
         
        }
      }

      useEffect(() => {
        if(SavedSetsList == []){
            SavedSetsList.push(getData)
        }
      }, [])
      

      const isDataSaved = () => {
        if(SavedSetsList = []){
            SavedSetsList.push(getData)
            return SavedSetsList
        }else{
            return SavedSetsList
        }
      }
   
    return (
        <View style={styles.mainContainer}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'#C7B98B'}
            />

            <FlatList
                data={SavedSetsList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <SetCard
                        nameOfSet={item.name}
                        shirt={item.clothes[0]}
                        pants={item.clothes[1]}
                        shoes={item.clothes[2]}
                        />
                    )

                }}
            />
        </View>
    )
}




export default SavedSets