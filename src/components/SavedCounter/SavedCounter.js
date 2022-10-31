import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const SavedCounter = ({ onCounterPressed, count, title }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onCounterPressed}>
          <Text style={styles.savedNumText}>{title}</Text>
          <Text style={styles.savedCountText}>{count}</Text>
    </TouchableOpacity>
  )
}

export default SavedCounter