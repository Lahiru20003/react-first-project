import React from 'react';
import "../global.css";
import { View, Text, TouchableOpacity } from 'react-native';
import { Link, Slot, useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Footer from '@/layouts/footer';

const RootLayout = () => {
    const router = useRouter();
    return (
        <View className="relative w-full flex-1">
              <Slot />
              <Footer/>
              </View>
    );
};
export default RootLayout;