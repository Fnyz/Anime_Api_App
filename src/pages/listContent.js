import { View, Text,Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'


const ListContent = ({item, navigation}) => {



  return (
    <SafeAreaView>
        <TouchableOpacity onPress={()=>navigation.navigate('Details', {
            id: item.mal_id,
        })}>

        <View style={{
        flexDirection: 'row',
        marginHorizontal:10,
        marginVertical:5,
        padding:20,
        gap:10,
        alignItems:'center',
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.3)',
        borderRadius:15,

      }}>
        <Image source = {{uri:item.images.jpg.image_url}}
        style = {{ 
        width: 100, 
        height: 100,
        borderRadius:50,
        }}/>
        <View>
        <Text>Title: {item.title.substring(0,30)}</Text>
        {item.genres[0] ? (
          <Text>Genre: {item.genres[0].name} </Text>
        ):(
          <Text>Genre: Undefined</Text>
        )}
        <Text>Type: {item.type}</Text>
        </View>
       <View>
      
       </View>
     </View>

        </TouchableOpacity>
      
    </SafeAreaView>
   
  )
}

export default ListContent