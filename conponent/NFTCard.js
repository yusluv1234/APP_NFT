import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Image, View } from 'react-native'
import { assets, COLORS, SHADOWS, SIZES } from '../constants'
import { CircleButton } from './BUtton'
import { SubInfo } from './SubInfo'

const NFTCard = ({ data }) => {
const navigation = useNavigation();

  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton
          imgUrl={assets.heart} right={10} top={10}
        />
      </View>

      <SubInfo />
    </View>
  )
}

export default NFTCard