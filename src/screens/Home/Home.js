import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    StatusBar,
    ScrollView,
} from 'react-native';
import SavedCounter from "../../components/SavedCounter/SavedCounter";
import styles from './styles'

const Home = ({ navigation }) => {
    //const { } = route.params;

    const onCounterClick = (screenName, marker) => {
        navigation.navigate(screenName, marker)
    }

    return (
        <View style={styles.mainContainer}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'#C7B98B'}
            />
            <ScrollView>
                <SavedCounter
                    imgSrc={require('../../../assets/images/hanger.png')}
                    count={12}
                    onCounterPressed={() => navigation.navigate('SavedSets', 'none')}
                    title={'sets saved'}
                />
                <SavedCounter
                    imgSrc={require('../../../assets/images/shirts.png')}
                    count={22}
                    onCounterPressed={() => navigation.navigate('CreateSet', {type:'shirts'})}
                    title={'shirts in stock'}
                />
                <SavedCounter
                    imgSrc={require('../../../assets/images/pants.png')}
                    count={11}
                    onCounterPressed={() => navigation.navigate('CreateSet', {type:'pants'})}
                    title={'pants in stock'}
                />
                <SavedCounter
                    imgSrc={require('../../../assets/images/shoes.png')}
                    count={32}
                    onCounterPressed={() => navigation.navigate('CreateSet', {type:'shoes'})}
                    title={'shoes in stock'}
                />
            </ScrollView>

        </View>
    )
}




export default Home