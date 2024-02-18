import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const profile = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View className="flex flex-col justify-between items-center relative">
      <View
        className="bg-primary        absolute rounded-b-[70px] top-0 left-0 right-0 "
        style={{ width: width, height: height / 2 }}
      />

      <View className="mt-40" />
      <View
        className="z-10 bg-secondary rounded-3xl flex flex-col justify-center items-center py-6 relative px-10 gapy5"
        style={{ height: height / 1.2, width: width / 1.2 }}
      >
        <Image
          source={{
            uri: "https://i.pinimg.com/564x/ae/9b/ae/ae9bae263ed27be66a775eff13e603c5.jpg",
          }}
          className="rounded-full p-10 h-20 w-20 my-10"
        />

        <View className="w-full">
          <View className="w-full ">
            <Text className="mx-2 text-primary" style={{ fontFamily: "Pop" }}>
              username:{" "}
              <Text style={{ fontFamily: "Pop-bold" }} className="text-black ">
                user_name
              </Text>{" "}
            </Text>
          </View>
          <View className="w-full ">
            <Text className="mx-2 text-primary" style={{ fontFamily: "Pop" }}>
              email:{" "}
              <Text style={{ fontFamily: "Pop-bold" }} className="text-black ">
                email@.com
              </Text>{" "}
            </Text>
          </View>

          <View className="w-full ">
            <Text className="mx-2 text-primary" style={{ fontFamily: "Pop" }}>
              Date of birth:{" "}
              <Text style={{ fontFamily: "Pop-bold" }} className="text-black ">
                1/1/2000
              </Text>{" "}
            </Text>
          </View>
        </View>

        <TouchableOpacity className="flex flex-row justify-center items-center gap-x-2 bg-primary h-10 w-40 rounded-3xl my-8">
          <AntDesign name="edit" size={24} color="white" />
          <Text className="text-white" style={{ fontFamily: "Pop-bold" }} >Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({});
