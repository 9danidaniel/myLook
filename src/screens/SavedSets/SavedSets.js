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
import AsyncStorage from "@react-native-async-storage/async-storage";


const SavedSets = ({ navigation }) => {

    const [isReceivedData, setIsReceivedData] = useState(null)

    // const getData = async () => {
    //     try {
    //         const value = await AsyncStorage.getItem('set_list');
    //         if (value !== null) {
    //             setIsReceivedData(true)
    //           // We have data!!
    //           const saved = JSON.parse(value)
    //           SavedSetsList.push({...saved})

    //           console.log(...SavedSetsList);
    //         }
    //     } catch(e) {
    //         setIsReceivedData(false)
    //      console.log(e)
    //     }
    //   }

      useEffect(() => {
        if (SavedSetsList == []){
            setIsReceivedData(false)
        }else{
            setIsReceivedData(true)
        }
      },[])
      
    return (
        <View style={styles.mainContainer}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'#C7B98B'}
            />
        { isReceivedData &&
            <FlatList
                data={SavedSetsList}
                keyExtractor={(item, index) => item.id}
                renderItem={({ item, index }) => {
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
            } 
        </View>
    )
}




export default SavedSets