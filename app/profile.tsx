import React from 'react';
import "../global.css";
import { View, Text, TouchableOpacity } from 'react-native';
import HeaderSection from '@/layouts/headerSection';
import { Link } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

const Profile = () => {
    return (
        <View className='w-full flex-1'>
            <HeaderSection  
    Left={
        <Link href={'/'}asChild>
    <TouchableOpacity><Ionicons name="arrow-back-outline" size={27} color="white" /></TouchableOpacity></Link>
    }
    centerText='Profile'
    />
            <Text>Profile Page</Text>
        </View>
    );
};

export default Profile;