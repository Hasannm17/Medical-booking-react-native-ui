import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import TopDoctors from "../constants/TopDoctors";

const doctor = () => {
  const { doctor } = useLocalSearchParams();
  const detail = TopDoctors.find((item) => item.name === doctor);

  return (
    <View className="flex flex-1">
      <View className=" flex flex-row justify-center items-center gap-x-4 py-6 flex-1 ">
        <Image
          source={{ uri: detail?.image }}
          className="h-40 w-40 rounded-2xl"
        />
        <View>
          <Text className=" " style={{ fontFamily: "Pop-bold" }}>
            {detail?.name}
          </Text>
          <Text
            className="text-[12px] text-primary"
            style={{ fontFamily: "Pop" }}
          >
            {detail?.major}
          </Text>
        </View>
      </View>
      <View className="w-full ">
        <TouchableOpacity className="bg-primary rounded-full h-10 justify-center items-center mx-10 my-8">
          <Text className="text-white" style={{ fontFamily: "Pop-bold" }}>
            Book now!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default doctor;

const styles = StyleSheet.create({});
