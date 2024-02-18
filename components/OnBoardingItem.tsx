import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { OnBoardingitemProps } from "../types/OnBoardingTypes";

const OnBoardingItem = ({ item }: OnBoardingitemProps) => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ width: width }} className="flex flex-1 justify-center items-center ">
      <Image source={item.image} className="h-[300px] w-[300px] rounded-full" />
  
      <Text className="text-center mt-10 text-lg px-4 " style={{fontFamily:"Pop-bold"}}>{item.text}</Text>
    
    </View>
  );
};

export default OnBoardingItem;

const styles = StyleSheet.create({});
