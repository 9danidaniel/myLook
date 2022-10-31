import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    StatusBar,
    ScrollView,
} from 'react-native';
import styles from './styles'

const Home = ({ navigation }) => {
    //const { } = route.params;
   
    return (
        <View style={styles.mainContainer}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'#C7B98B'}
            />
            <Text>this is my look home</Text>
        </View>
    )
}




export default Home