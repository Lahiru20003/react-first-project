import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import { router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons'
import AntDesign from '@expo/vector-icons/AntDesign'
import Feather from '@expo/vector-icons/Feather'


const Footer = () => {
  return (
  
        <View className="w-full px-6 absolute h-16 bottom-0 left-0 z-50 bg-black flex-row items-center justify-between">
          <TouchableOpacity onPress={()=>router.navigate('/')} className="items-center">
            <Ionicons name="home-outline" size={24} color="white" />
            <Text className="text-white font-bold">Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>router.navigate('/CourseDetailsScreen')} className="items-center">
            <Ionicons name="book" size={24} color="white" />
            <Text className="text-white font-bold">Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>router.navigate('/DiscussionForum')} className="items-center">
            <AntDesign name="wechat" size={24} color="white" />
            <Text className="text-white font-bold">Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>router.navigate('/profile')} className="items-center">
            <Feather name="user" size={24} color="white" />
            <Text className="text-white font-bold">Profile</Text>
          </TouchableOpacity>
        </View>
      
  )
}

export default Footer