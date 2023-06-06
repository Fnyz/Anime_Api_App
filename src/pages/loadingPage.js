import { View, Text} from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const LoadingPage = () => {
  return (
    <View style={{
        justifyContent: 'center',
        alignItems:'center',
        flex:1,
    }}>
     <LottieView style={{
        width:500,
     }} source={require('../../assets/9844-loading-40-paperplane (1).json')} autoPlay loop/>
    </View>
  )
}

export default LoadingPage