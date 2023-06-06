import { View, Text} from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const Nodatas = () => {
  return (
    <View style={{
        justifyContent: 'center',
        alignItems:'center',
        flex:1,
        gap:5,
    }}>
     <LottieView style={{
       width: 400,
     }} source={require('../../assets/116072-socialv-no-data.json')} autoPlay loop/>
     <Text style={{
        fontSize:40,
        color:'gray',
        marginBottom:150,
     }}>No data's found!</Text> 
    </View>

  )
}

export default Nodatas;