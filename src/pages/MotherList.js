import { FlatList} from 'react-native'
import React from 'react'
import ListContent from './listContent';
import LoadingPage from './loadingPage';
import Nodatas from './Nodata';

const MotherList = ({listData, navigation, isloading}) => {

  if(isloading){
    return (
        <LoadingPage/>
    )
  }
  if(listData.length === 0){
    return (
       <Nodatas/>
    )
  }
  return (
    <FlatList
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
    data={listData}
    renderItem={({item}) =>
   <ListContent item ={item} navigation = {navigation}/>}
    keyExtractor={item => item.mal_id}/> 
  )
}

export default MotherList