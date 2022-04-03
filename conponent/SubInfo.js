import React from 'react'
import { Text, View } from 'react-native'
import { SIZES } from '../constants'

export const NTFTitle = () => {
  return (
    <View>
      <Text>NFTTitle</Text>
    </View>
  )
}

export const EthPrice = () => {
  return (
    <View>
      <Text>EthPrice</Text>
    </View>
  )
}

export const ImageCmp = () => {
  return (
    <View>
      <Text>Image Cmp</Text>
    </View>
  )
}

export const People = () => {
  return (
    <View>
      <Text>People</Text>
    </View>
  )
}

export const EndDate = () => {
  return (
    <View>
      <Text>End Date</Text>
    </View>
  )
}

export const SubInfo = () => {
  return (
    <View style={{
      width: '100%',
      paddingHorizontal: SIZES.font,
      marginTop: -SIZES.extraLarge,
      flexDirection: 'row',
      justifyContent: 'space-between',
    }} >
      <Text>SubInfo</Text>
    </View>
  )
}