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
                <View style={{flex: 1}}>
                    <Text style={styles.brandStyle}>{brand}</Text>
                    <Text style={styles.propertyStyle}>Size: {size}</Text>
                    <Text style={styles.propertyStyle}>{color}</Text>
                </View>
                <Image style={styles.imgLogo} source={imgSrc} resizeMode='stretch' />
            </View>
        </TouchableOpacity>
    )
}

export default ClothingCard