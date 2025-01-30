import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import "../global.css";
import HeaderSection from '@/layouts/headerSection';
import Ionicons from '@expo/vector-icons/Ionicons';


const App = () => {
  return (
    <View className='w-full flex-1'>
      <HeaderSection  Left={<TouchableOpacity><Ionicons name="menu" size={27} color="white" /></TouchableOpacity>}
      centerText='Home'
      />
      
  </View>
  );
};

export default App;

