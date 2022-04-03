import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { FocusedStatusBar } from '../conponent';
import { COLORS, NFTData } from "../constants";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}> 
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList 
            data={NFTData} 
            renderItem={({ item }) => <Text>{item.name}</Text>} 
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home