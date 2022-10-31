import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    StatusBar,
    ScrollView,
} from 'react-native';
import ClothingCard from "../../../components/ClothingCard/ClothingCard";
import styles from './styles'

const ShirtListScreen = ({ navigation }) => {
    //const { } = route.params;
   
    return (
        <View style={styles.mainContainer}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'#C7B98B'}
            />
           <ClothingCard 
           onCardPress={()=> navigation.navigate('PantsList')}
           brand='Lacoste'
           size='XXL'
           color='yellow'
           imgSrc={require('../../../../assets/images/generic-shirt.jpeg')}
           />
           
        </View>
    )
}




export default ShirtListScreen