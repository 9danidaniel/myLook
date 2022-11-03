import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'


const SetCard = ({
    onCardPress,
    onCardLongPress,
    nameOfSet,
    shirt,
    pants,
    shoes
}) => {
    return (
        <TouchableOpacity onLongPress={onCardLongPress} style={styles.container} onPress={onCardPress}>
            <Text style={styles.title}>{nameOfSet}</Text>

            {/* shirt */}
            <View style={styles.shirtContainer}>
                <Text style={styles.item}>{shirt.type}</Text>
                <Text style={styles.item}>{shirt.size}</Text>
                <Text style={styles.item}>{shirt.brand}</Text>
            </View>
            {/* pants */}
            <View style={styles.pantsContainer}>
                <Text style={styles.item}>{pants.type}</Text>
                <Text style={styles.item}>{pants.size}</Text>
                <Text style={styles.item}>{pants.brand}</Text>
            </View>
            {/* shoes */}
            <View style={styles.shoesContainer}>
                <Text style={styles.item}>{shoes.type}</Text>
                <Text style={styles.item}>{shoes.size}</Text>
                <Text style={styles.item}>{shoes.brand}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SetCard


