import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    StatusBar,
    ScrollView,
    Modal,
    TouchableOpacity
} from 'react-native';
import SavedCounter from "../../components/SavedCounter/SavedCounter";
import SavedSetsList from "../../data/SavedSetsList";
import styles from './styles'


const URL = "https://run.mocky.io/v3/2d06d2c1-5a77-4ecd-843a-53247bcb0b94"

const Home = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [dataShirts, setSData] = useState([]);
    const [dataPants, setPData] = useState([]);
    const [dataShoes, setShData] = useState([]);

    const [isReceivedData, setIsReceivedData] = useState(null)
    const [modalVisible, setModalVisible] = useState(false);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('set_list');
            if (value !== null) {
                setIsReceivedData(true)
                // We have data!!
                const saved = JSON.parse(value);
                SavedSetsList.push(...saved);
                console.log('Get ', JSON.stringify(saved))
                //console.log(JSON.stringify(value));
            }
        } catch (e) {
            setIsReceivedData(false)
            console.log(e)
        }
    }

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(URL, {
                    method: 'GET',
                    withCredentials: true,
                    crossorigin: true,
                    mode: 'no-cors',
                });
                const data = await response.json();


                setData(data)
                setPData(data.filter(item => item.type === "pants"))
                setSData(data.filter(item => item.type === "shirt"))
                setShData(data.filter(item => item.type === "shoes"))
            } catch (e) {
                console.log(e);
            }

        }
        if (SavedSetsList.length === 0) {
            getData();
        } else {
            setModalVisible(true)
        }
        fetchItems();
    }, []);

    return (
        <View style={styles.mainContainer}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'#C7B98B'}
            />
            <ScrollView>
                {modalVisible &&
                    <TouchableOpacity style={styles.popupStyle} onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.popupText}>New Set Added!</Text>
                    </TouchableOpacity>
                }
                <SavedCounter
                    imgSrc={require('../../../assets/images/hanger.png')}
                    count={SavedSetsList.length}
                    onCounterPressed={() => navigation.navigate('SavedSets', 'none')}
                    title={'sets saved'}
                />
                <SavedCounter
                    imgSrc={require('../../../assets/images/shirts.png')}
                    count={dataShirts.length}
                    onCounterPressed={() => navigation.navigate('CreateSet', { type: 'shirts' })}
                    title={'shirts in stock'}
                />
                <SavedCounter
                    imgSrc={require('../../../assets/images/pants.png')}
                    count={dataPants.length}
                    onCounterPressed={() => navigation.navigate('CreateSet', { type: 'pants' })}
                    title={'pants in stock'}
                />
                <SavedCounter
                    imgSrc={require('../../../assets/images/shoes.png')}
                    count={dataShoes.length}
                    onCounterPressed={() => navigation.navigate('CreateSet', { type: 'shoes' })}
                    title={'shoes in stock'}
                />
            </ScrollView>

        </View>
    )
}




export default Home