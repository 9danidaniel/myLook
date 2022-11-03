import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    StatusBar,
    ScrollView,
    FlatList,
} from 'react-native';
import ClothingCard from "../../../components/ClothingCard/ClothingCard";
import SavedSetsList from "../../../data/SavedSetsList";
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

const URL = "https://run.mocky.io/v3/2d06d2c1-5a77-4ecd-843a-53247bcb0b94"

const ShirtListScreen = ({ route, navigation }) => {
    const { index, shoes, shirtId, pantsId, shoesId, setname, date } = route.params;
    const [data, setShirtData] = useState([])
    

    useEffect(() => {
        const fetchShirts = async () => {

            try {
                const response = await fetch(URL, {
                    method: 'GET',
                    withCredentials: true,
                    crossorigin: true,
                    mode: 'no-cors',
                });
                const data = await response.json();


                setShirtData(data)
            } catch (e) {
                console.log(e);
            }

        }
        fetchShirts();

    }, [])

    const storeSetList = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('set_list', jsonValue)
          } catch (e) {
            console.log(e)
          }
      }


    const onNavigate = async (id, color, size, brand) => {
        if (index == 0) {
            navigation.navigate('PantsList', { index: 1, shirtId: id, setname: setname, date })
        } else if (index == 1 && shoes == null) {
            navigation.navigate('ShoesList', { index: 2, shirtId: id, pantsId: pantsId, setname: setname, date })
        } else if (index == 1 && shoes) {
            navigation.navigate('PantsList', { index: 2, shirtId: id, shoesId: shoesId, setname: setname, date })
        }
        else if (index == 2) {
            const newSet = {
                "id": uuid.v4().toString(),
                "name": setname,
                "date": date,
                "clothes": [
                    {  
                        "id": id,
                        "type": "shirt",
                        "color": color,
                        "size": size,
                        "brand": brand
                       },
                     {
                         "id": pantsId,
                         "type": "pants",
                         "color": data[pantsId-1].color,
                         "size": data[pantsId-1].size,
                         "brand": data[pantsId-1].brand
                     },
                     {
                        "id": shoesId,
                        "type": "shoes",
                        "color": data[shoesId-1].color,
                        "size": data[shoesId-1].size,
                        "brand": data[shoesId-1].brand
                    },
                    ]
               }
               SavedSetsList.push(newSet)
               await storeSetList(SavedSetsList)
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
            });
        }
    }

    return (
        <View style={styles.mainContainer}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'#C7B98B'}
            />
            <FlatList
                data={data.filter(item => item.type === "shirt")}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <ClothingCard
                            onCardPress={() => {onNavigate(item.id,item.color,item.size,item.brand)}}
                            brand={item.brand}
                            size={item.size}
                            color={item.color}
                            imgSrc={require('../../../../assets/images/generic-shirt.jpeg')}
                        />
                    )

                }}
            />


        </View>
    )
}




export default ShirtListScreen