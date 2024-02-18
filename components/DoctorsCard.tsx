import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { DoctorCardProps } from "../types/DoctorCardTypes";
import { AntDesign } from "@expo/vector-icons";

const DoctorsCard = ({
  name,
  image,
  available,
  major,
  starts,
}: DoctorCardProps) => {
  return (
    <TouchableOpacity  className="h-[200px] w-[190px] bg-[#f3fffd] rounded-3xl flex flex-col justify-between p-3 items-center m-2">
      <Image source={{uri:image}} className="h-20 w-20 rounded-full " />
      <View className="w-full px-2">
        <Text className=" " style={{fontFamily:"Pop-bold"}}>{name}</Text>
        <Text className="text-[12px] text-primary" style={{fontFamily:"Pop"}}>{major}</Text>
      </View>
      <View className="w-full flex flex-row px-2 justify-between items-center  ">
        <View className="bg-[#cefff9] w-fit flex flex-row p-1 rounded-xl gap-x-1  px-3">
          <AntDesign name="star" size={19} color={"#1A998E"} />
          <Text className="text-primary " style={{fontFamily:"Pop-bold"}}>{starts}</Text>
        </View>
        <Text className="text-gray-500 " style={{fontFamily:"Pop"}}>{available ? "Available" : null}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DoctorsCard;

const styles = StyleSheet.create({});
