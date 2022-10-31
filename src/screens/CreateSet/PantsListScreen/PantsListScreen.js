import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    StatusBar,
    ScrollView,
} from 'react-native';
import styles from './styles'

const PantsListScreen = ({ navigation }) => {
    //const { } = route.params;
   
    return (
        <View style={styles.mainContainer}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'#C7B98B'}
            />
            <Text>this is my pants screen</Text>
        </View>
    )
}




export default PantsListScreen