import React from 'react';
import "../global.css";
import { View, Text, TouchableOpacity,} from 'react-native';
import HeaderSection from '@/layouts/headerSection';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';

const CourseDetailsScreen = () => {
    return (
        <View className='w-full flex-1'>
    <HeaderSection  
    Left={
        <Link href={'/'}asChild>
    <TouchableOpacity><Ionicons name="arrow-back-outline" size={27} color="white" /></TouchableOpacity></Link>
    }
    centerText='Courses'
    />
            <Text>Course Details Screen</Text>
           
        </View>
    );
};

export default CourseDetailsScreen;