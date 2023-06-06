import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet} from 'react-native'
import React ,{useContext}from 'react';
import { MadeContex } from '../../context';
import YoutubeIframe from 'react-native-youtube-iframe';




const Details = ({navigation, route}) => {
    const id = route.params.id;
    const data = useContext(MadeContex);
    const {getSingle} = data;
    let fileddata = getSingle(id);
    console.log(fileddata.trailer.youtube_id);
    
  return (
    <View style={{
        flex:1,
        alignItems: 'center',
    }}>
      <ScrollView 
	    showsHorizontalScrollIndicator={false}
	    contentContainerStyle={{
		flexGrow: 1,
		justifyContent: 'center',
		width: '100%',
	}}
      >
      <View style={{
        paddingVertical:20,
        height:500,
        marginBottom:10,
        height:'100%'
      }}>
     
           {fileddata.trailer.youtube_id ? (
                <YoutubeIframe
                style={{
                    margin:10,
                }}
                height={250}
                width={400}
                play={true}
                videoId={fileddata.trailer.youtube_id}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                />
            ): (
                <Image source = {{uri:fileddata.images.jpg.large_image_url}}
                style = {{ 
                width: 300, 
                height: 300,
                borderRadius:10,
                alignSelf:'center',
                }}/>
            )}
        <View style={{
            borderWidth:1,
            padding:20,
            borderTopRadius:10,
            margin:15,
            borderRadius:10,
            borderColor: 'rgba(0,0,0,0.2)',
            
        }}>
         
            <Text style={{
                textAlign: 'center',
                fontSize:30,
                marginBottom:10,
                fontWeight: 'bold',

            }}>/ {fileddata.title} </Text>

            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems: 'center',
                marginTop:10,
            }}>

                <View>

                <Text style={{
                fontSize:16,
            }}>Genre: {fileddata.genres[0].name}</Text>
            <Text style={{
                marginBottom:10,
                fontSize:16,
            }}>Type: {fileddata.type}</Text>
                </View>


                {fileddata.trailer.youtube_id && (
                <Image source = {{uri:fileddata.images.jpg.large_image_url}}
                style = {{ 
                width: 100, 
                height: 100,
                borderRadius:10,
                alignSelf:'center',
                }}/>
            )}

            </View>
            <Text style={{
                marginBottom:5,
                fontSize:16,
            }}>Description:</Text>
            <Text style={{
                fontStyle:'italic',
                fontSize:15,
            }}>{fileddata.synopsis}</Text>
            <TouchableOpacity style={{
                width:200,
                marginTop:20,
                padding:10,
                alignSelf:'center',
                borderRadius:15,
                backgroundColor: "coral",

            }} onPress={()=> navigation.navigate('Home')}>
                <Text style={{
                    textAlign:'center',
                    color:'white',
                    fontSize:20
                }}>Go back</Text>
            </TouchableOpacity>

         
        

         
           
        </View>
      </View>

      </ScrollView>
      
    </View>
  )
}

export default Details

const style = StyleSheet.create({

})