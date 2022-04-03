 import { Text, TouchableOpacity, View } from 'react-native'
import { COLORS, SHADOWS, SIZES } from '../constants'
 
 export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
   return (
    <TouchableOpacity style={{
      width: 40,
      height: 40,
      backgroundColor: COLORS.white,
      position: 'absolute',
      borderRadius: SIZES.extraLarge,
      alignItems: 'center',
      justifyContent: 'center',
      ...SHADOWS.light,
      ...props,
    }}
    onPress={handlePress}
    >

    </TouchableOpacity>
   )
 }

 export const RectButton = () => {
   return (
     <View>
       <Text>RectButton</Text>
     </View>
   )
 }
 