import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    StatusBar,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import styles from './styles'

const ChooseType = ({ navigation }) => {
    //const { } = route.params;
   
    return (
        <View style={styles.mainContainer}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'#C7B98B'}
            />
            <View>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ShirtList')}>
                    <Text style={styles.btnText}>shirts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('PantsList')}>
                    <Text style={styles.btnText}>pants</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ShoesList')}>
                    <Text style={styles.btnText}>shoes</Text>
                </TouchableOpacity>
                <Text style={styles.txt}>choose your type to create a new set</Text>
            </View>
            
        </View>
    )
}




export default ChooseType