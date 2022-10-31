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

    onCounterClick = () => {
        navigation.navigate('SavedSets')
    }
   
    return (
        <View style={styles.mainContainer}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'#C7B98B'}
            />
        <ScrollView>
        <SavedCounter 
          count={12} 
          onCounterPressed={onCounterClick}
          title={'sets'}
          />
           <SavedCounter 
          count={22} 
          onCounterPressed={onCounterClick}
          title={'shirts'}
          />
           <SavedCounter 
          count={11} 
          onCounterPressed={onCounterClick}
          title={'pants'}
          />
           <SavedCounter 
          count={32} 
          onCounterPressed={onCounterClick}
          title={'shoes'}
          />
        </ScrollView>
         
        </View>
    )
}




export default Home