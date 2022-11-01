import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native';
import styles from './styles'
import SavedSetsList from "../../../data/SavedSetsList";
import { Stopwatch } from 'react-native-stopwatch-timer';
import { useFocusEffect } from '@react-navigation/native';

const ChooseType = ({ navigation }) => {
    
    //const { } = route.params;
    const [nameValue, setNameValue] = useState('')
    const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [resetStopwatch, setResetStopwatch] = useState(false);

    onChangeName = (value) => {
        setNameValue(value)

    }
    onSubmitName = () => {
        
    }
    

    return (
        <View style={styles.mainContainer}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'#C7B98B'}
            />
            {/* Name of set */}
            <TextInput
                autoFocus
                focusable
                onSubmitEditing={onSubmitName}
                placeholderTextColor={'lightgrey'}
                placeholder="enter name of set"
                style={styles.nameInput}
                onChangeText={(value)=>onChangeName(value)}
                value={nameValue} />


            {/* Buttons */}
            <View>
                <TouchableOpacity style={styles.btn} onPress={() => {
                    onSubmitName()
                    navigation.navigate('ShirtList', {
                        date: new Date().toLocaleDateString(),
                        setname: nameValue,
                        index: 0
                    })
                }}>
                    <Image
                        style={styles.btnIcon}
                        source={require('../../../../assets/images/shirt.png')}
                    />
                    <Text style={styles.btnText}>add a new shirt</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => {
                    onSubmitName()
                    navigation.navigate('PantsList', {
                        date: new Date().toLocaleDateString(),
                        setname: nameValue,
                        index: 0
                    })
                }}>
                    <Image
                        style={styles.btnIcon}
                        source={require('../../../../assets/images/pants.png')}
                    />
                    <Text style={styles.btnText}>add new pants</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => {
                    onSubmitName()
                    navigation.navigate('ShoesList', {
                        date: new Date().toLocaleDateString(),
                        setname: nameValue,
                        index: 0
                    })
                }}>
                    <Image
                        style={styles.btnIcon}
                        source={require('../../../../assets/images/shoes.png')}
                    />
                    <Text style={styles.btnText}>add new shoes</Text>
                </TouchableOpacity>
                <Text style={styles.txt}>choose your clothing item to create a new set</Text>
            </View>

        </View>
    )
}




export default ChooseType