import {View, SafeAreaView, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native'
import React, { Component } from 'react'
import { MadeContex } from '../../context';
import { MaterialIcons } from '@expo/vector-icons';
import MotherList from './MotherList';





export class Home extends Component {

  static contextType = MadeContex;
  render() {
    
    const value = this.context;
    const {searchData, search, listData ,changedata, isloading} = value;

 
    return(
    <>
    <SafeAreaView style={{

    }}>
    <TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
      <View style={{
        flexDirection:'row',
        backgroundColor: "white",
        marginVertical:20,
        width:300,
        alignSelf:"center",
        gap:10,
        borderRadius:10,
        height:50,
        borderColor:'gray',
        overflow:'hidden',
        

      }}>
    

       <TextInput
        placeholder='Search anime here:'
        value={search}
        onChangeText={(val)=> searchData(val)} 
    
        style={{
            width:200,
            padding:10,
            fontSize:20,
            color:'gray',
        }}
        />
        <TouchableOpacity onPress={changedata} style={{
            paddingLeft:20,
            borderColor:'gray',
            backgroundColor: "coral",
            width:100,
        }}>
       <MaterialIcons name="search" size={45} color="white"/>
        </TouchableOpacity>
       
    
        
      </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
    <MotherList listData={listData} navigation={this.props.navigation} isloading={isloading}/>
    </>
    )


   
 
    
}}

export default Home;