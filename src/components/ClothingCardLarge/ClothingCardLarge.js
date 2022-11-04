import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'


const ClothingCardLarge = ({
    imgSrc,
    brand,
    size,
    color,
}) => {
    return (
        <View style={styles.container}>
           <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                    <Text style={styles.brandStyle}>{brand}</Text>
                    <Text style={styles.propertyStyle}>size : {size}</Text>
                    <Text style={styles.propertyStyle}>{color}</Text>
                </View>
                <Image style={styles.imgLogo} source={imgSrc} resizeMode='stretch' />
            </View>
        </View>
    )
}

export default ClothingCardLarge