import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
const Search = () => {
  return (
    <View className=' mx-4  border-2  h-12 rounded-full border-[#8a8a8a] flex flex-row  items-center '>
      <Feather name="search" size={25} color="#8a8a8a" style={{marginHorizontal:10}}/>
      <TextInput  style={{fontFamily:'Pop'}} placeholder='Search doctor , service , etc...  '  placeholderTextColor={"#8a8a8a"} className='text-sm w-full'/>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})