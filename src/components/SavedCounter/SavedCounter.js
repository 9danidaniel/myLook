import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'


const SavedCounter = ({ onCounterPressed, count, title, imgSrc }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onCounterPressed}>
      <View style={styles.counterContainer}>
        <Image
          style={styles.imgLogo}
          source={imgSrc}
        />
        <Text style={styles.savedCountText}>{count}</Text>
      </View>
      <Text style={styles.savedNumText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default SavedCounter