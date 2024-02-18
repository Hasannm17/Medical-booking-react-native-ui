import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { doctor } from "../assets";

const Card = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View
      className="bg-[#d3fbf8]  mx-6 rounded-3xl flex flex-col justify-center items-center relative "
      style={{ height: height / 4.5 }}
    >
      <View className="space-y-2">
        <Text
          className=" text-[21px]   capitalize mr-10  z-10 "
          style={{ width: width / 1.6, fontFamily: "Pop-bold" }}
        >
          Early Protection For your family health
        </Text>
        <TouchableOpacity className="bg-primary h-8 flex justify-center w-24 items-center rounded-3xl">
          <Text className="text-white " style={{ fontFamily: "Pop" }}>
            Learn More
          </Text>
        </TouchableOpacity>
      </View>

      <Image source={doctor} className="absolute bottom-0 h-40 w-40 -right-8" />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
