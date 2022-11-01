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


const DemiSet = 
    { 
       "name": "Sunday Vibe",
       "date": "22/02/2020",
       "minutes": 10,
       "secondes": 5,
       "clothes": [
            {
                "id": 22,
                "type": "shirt",
                "color": "white",
                "size": "XL",
                "brand": "Calvin Klein"
              },
            {
                "id": 34,
                "type": "pants",
                "color": "green",
                "size": 34,
                "brand": "Lacoste"
            },
            {
                "id": 1,
                "type": "shoes",
                "color": "black",
                "size": 37,
                "brand": "Tommy Hilfiger"
              },
        ]
    }

const SavedSets = ({ navigation }) => {
    //const { } = route.params;
   
    return (
        <View style={styles.mainContainer}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'#C7B98B'}
            />

            {/* <SetCard
                shirt={DemiSet.clothes[0]}
                pants={DemiSet.clothes[1]}
                shoes={DemiSet.clothes[2]}
                nameOfSet={'Sunday School'}
            />
 */}

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