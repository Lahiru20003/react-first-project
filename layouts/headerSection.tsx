import { View, Text } from 'react-native'
import React from 'react'

interface IHeader{
  Left?:React.ReactNode;
  centerText?:string;
  Center?:React.ReactNode;
  Right?:React.ReactNode;
}

const HeaderSection = ({ Left,centerText,Center,Right}:IHeader) => {
  return (
    <View
    style={{ elevation:5}}
    className="w-full h-[70px] flex-row bg-black items-end justify-between pb-5 px-5">
      {Left ? Left : <View />}
      {Center ? Center :centerText?<Text className='text-2xl font-semibold color-white'>{centerText}</Text>: <View />}
      {Right ? Right : <View />}
    </View>
  )
}

export default HeaderSection;
