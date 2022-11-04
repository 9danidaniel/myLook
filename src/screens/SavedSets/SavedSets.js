import React, { useState, useEffect, Component } from "react";
import {
    Text,
    View,
    StatusBar,
    ScrollView,
    FlatList,
    Alert
} from 'react-native';
import SetCard from "../../components/SetCard/SetCard";
import SavedSetsList from "../../data/SavedSetsList";
import styles from './styles'
import AsyncStorage from "@react-native-async-storage/async-storage";



const SavedSets = ({ navigation }) => {

    const [isReceivedData, setIsReceivedData] = useState(null)
    const [isDeleteEnabled, setIsDeleteEnabled] = useState(null)
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        if (SavedSetsList == []) {
            setIsReceivedData(false)
        } else {
            setIsReceivedData(true)
        }
    }, [])

    const storeSetList = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            console.log('saved ', jsonValue)
            await AsyncStorage.setItem('set_list', jsonValue);
        } catch (e) {
            console.log(e);
        }
    }

    const deleteSet = (index) => {
        Alert.alert(
            "Delete",
            "Are you sure you want to remove set?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => {
                        SavedSetsList.splice(index, 1)
                        storeSetList(SavedSetsList)
                        setRerender(!rerender);
                    }
                }
            ]
        );
    }

    const navigateToDetails = ( name, date, clothes, time ) => {
        navigation.navigate('SetDetail', {
            nameSet: name,
            date: date,
            clothes,
            time: time,
        })
    }



    return (
        <View style={styles.mainContainer}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'#C7B98B'}
            />
            {isReceivedData &&
                <FlatList
                    data={SavedSetsList}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item, index }) => {
                        return (
                            <SetCard
                                onCardLongPress={() => deleteSet(index)}
                                onCardPress={() => navigateToDetails(
                                    item.name,
                                    item.date,
                                    item.clothes,
                                    "01:35"
                                )}
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