import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    StatusBar,
    ScrollView,
    FlatList
} from 'react-native';
import ClothingCard from "../../../components/ClothingCard/ClothingCard";
import styles from './styles'

const URL = "https://run.mocky.io/v3/2d06d2c1-5a77-4ecd-843a-53247bcb0b94"

const ShoesListScreen = ({ route, navigation }) => {
    const { index } = route.params;

    const [shoesData, setShoesData] = useState([])


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


    const onNavigate = () => {
        if (index == 0) {
            navigation.navigate('ShirtList', { index: 1, shoes: true })
        } else if (index == 1) {
            navigation.navigate('PantsList', { index: 2 })
        } else if (index == 2) {
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
                data={shoesData.filter(item => item.type === "shoes")}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <ClothingCard
                            onCardPress={() => onNavigate()}
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