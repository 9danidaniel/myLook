import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    StatusBar,
    ScrollView,
} from 'react-native';
import SetCard from "../../components/SetCard/SetCard";
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

            <SetCard
                shirt={DemiSet.clothes[0]}
                pants={DemiSet.clothes[1]}
                shoes={DemiSet.clothes[2]}
                nameOfSet={'Sunday School'}
            />


            {/* <FlatList
                data={shirtData.filter(item => item.type === "shirt")}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <ClothingCard
                            onCardPress={() => onNavigate()}
                            brand={item.brand}
                            size={item.size}
                            color={item.color}
                            imgSrc={require('../../../../assets/images/generic-shirt.jpeg')}
                        />
                    )

                }}
            /> */}
        </View>
    )
}




export default SavedSets