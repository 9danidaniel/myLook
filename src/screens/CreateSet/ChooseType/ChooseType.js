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

const ChooseType = ({ navigation }) => {
    //const { } = route.params;
    const [nameValue, setNameValue] = useState('')

    onChangeName = (value) => {
        setNameValue(value)
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
                placeholderTextColor={'lightgrey'}
                placeholder="enter name of set"
                style={styles.nameInput}
                onChangeText={onChangeName}
                value={nameValue} />


            {/* Buttons */}
            <View>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ShirtList', {
                    nameSet: nameValue,
                    index: 0
                })}>
                    <Image
                        style={styles.btnIcon}
                        source={require('../../../../assets/images/shirt.png')}
                    />
                    <Text style={styles.btnText}>add a new shirt</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('PantsList', {
                    nameSet: nameValue,
                    index: 0
                })}>
                    <Image
                        style={styles.btnIcon}
                        source={require('../../../../assets/images/pants.png')}
                    />
                    <Text style={styles.btnText}>add new pants</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ShoesList', {
                    nameSet: nameValue,
                    index: 0
                })}>
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