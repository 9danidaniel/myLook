import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    StatusBar,
    ScrollView,
    FlatList
} from 'react-native';
import ClothingCard from "../../../components/ClothingCard/ClothingCard";
import SavedSetsList from "../../../data/SavedSetsList";
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';


const URL = "https://run.mocky.io/v3/2d06d2c1-5a77-4ecd-843a-53247bcb0b94"

const ShoesListScreen = ({ route, navigation }) => {
    const { index, shirtId, pantsId, setname, date } = route.params;

    const [data, setShoesData] = useState([])
    useEffect(() => {
        const fetchShoes = async () => {

            try {
                const response = await fetch(URL, {
                    method: 'GET',
                    withCredentials: true,
                    crossorigin: true,
                    mode: 'no-cors',
                });
                const data = await response.json();


                setShoesData(data)
            } catch (e) {
                console.log(e);
            }

        }
        fetchShoes();

    }, [])

    const storeSetList = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('set_list', jsonValue)
          } catch (e) {
            // saving error
          }
      }
    
    const onNavigate = (id, color, size, brand) => {
        if (index == 0) {
            navigation.navigate('ShirtList', { index: 1, shoes: true, shoesId: id, pantsId: pantsId, setname: setname, date })
        } else if (index == 1) {
            navigation.navigate('PantsList', { index: 2, shoesId: id , pantsId: pantsId, setname: setname, date })
        } else if (index == 2) {
            const newItem = {
                "name": setname,
                "date": date,
                "clothes": [
                     {
                         "id": shirtId,
                         "type": "shirt",
                         "color": data[shirtId-1].color,
                         "size": data[shirtId-1].size,
                         "brand": data[shirtId-1].brand
                       },
                     {
                         "id": pantsId,
                         "type": "pants",
                         "color": data[pantsId-1].color,
                         "size": data[pantsId-1].size,
                         "brand": data[pantsId-1].brand
                     },
                     {  
                        "id": id,
                        "type": "shoes",
                        "color": color,
                        "size": size,
                        "brand": brand
                       },
                    ]
               }
               SavedSetsList.push(newItem)
               storeSetList(SavedSetsList)
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
                data={data.filter(item => item.type === "shoes")}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <ClothingCard
                            onCardPress={() => {
                                onNavigate(item.id,item.color,item.size,item.brand)
                            }}
                            brand={item.brand}
                            size={item.size}
                            color={item.color}
                            imgSrc={require('../../../../assets/images/generic-shoes.jpeg')}
                        />
                    )

                }}
            />
        </View>
    )
}




export default ShoesListScreen