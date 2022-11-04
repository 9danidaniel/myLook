import React, { useEffect, useRef } from 'react'
import { View, Text, StatusBar, ScrollView, FlatList } from 'react-native'
import ClothingCard from '../../components/ClothingCard/ClothingCard'
import ClothingCardLarge from '../../components/ClothingCardLarge/ClothingCardLarge'
import styles from './styles'



const SetDetail = ({ route, navigation }) => {
  const { nameSet, date, clothes, time } = route.params;
  const setListRef = useRef(null);

  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: nameSet
    });
  }, [navigation]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainInfo}>
        <Text style={styles.dateText}>{date}</Text>
        <Text style={styles.timeText}>{`It took ${time} to create this set`}</Text>
      </View>

      <FlatList
        ref={setListRef}
        //style={{ padding: 10 }}
        data={clothes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => {
          if (index == 0) {
            return (
              <ClothingCardLarge
                onCardPress={() => { onNavigate(item.id, item.color, item.size, item.brand) }}
                brand={item.brand}
                size={item.size}
                color={item.color}
                imgSrc={require('../../../assets/images/generic-shirt.jpeg')}
              />
            )
          }
          if (index == 1) {
            return (
              <ClothingCardLarge
                onCardPress={() => { onNavigate(item.id, item.color, item.size, item.brand) }}
                brand={item.brand}
                size={item.size}
                color={item.color}
                imgSrc={require('../../../assets/images/pants-generic.jpeg')}
              />
            )
          }
          if (index == 2) {
            return (
              <ClothingCardLarge
                onCardPress={() => { onNavigate(item.id, item.color, item.size, item.brand) }}
                brand={item.brand}
                size={item.size}
                color={item.color}
                imgSrc={require('../../../assets/images/generic-shoes.jpeg')}
              />
            )
          }

        }}
      />
    </View>
  )
}


export default SetDetail