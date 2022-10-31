import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'


const ClothingCard = ({
    onCardPress,
    imgSrc,
    brand,
    size,
    color,
    isChecked,
}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onCardPress}>
           <View style={{flexDirection: 'row'}}>
                <View>
                    <Text style={styles.brandStyle}>{brand}</Text>
                    <Text style={styles.propertyStyle}>{size}</Text>
                    <Text style={styles.propertyStyle}>{color}</Text>
                </View>
                <Image style={styles.imgLogo} source={imgSrc} resizeMode='contain' />
            </View>
        </TouchableOpacity>
    )
}

export default ClothingCard