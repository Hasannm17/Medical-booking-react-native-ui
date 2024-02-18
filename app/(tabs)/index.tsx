import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Card from "../../components/Card";
import DoctorsCard from "../../components/DoctorsCard";
import TopDoctors from "../../constants/TopDoctors";
import Categories from "../../constants/Categories";
import Categorie from "../../components/Categorie";
import Search from "../../components/Search";
import { FontAwesome } from "@expo/vector-icons";
const index = () => {
  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView className="relative">
      <TouchableOpacity className="absolute bottom-6 z-10 right-6">
        <FontAwesome name="whatsapp" size={50} color="green" className="" />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          className="flex flex-row justify-between items-center h-32 mx-5 "
          style={{ height: height / 5 }}
        >
          <Text
            className="text-[18px] "
            style={{ width: width / 2, fontFamily: "Pop-bold" }}
          >
            Find Your desire health solution
          </Text>

          <Ionicons name="notifications-outline" size={24} color="black" />
        </View>

        <Search />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mx-2 px-2"
        >
          {Categories.map((item, index) => {
            return <Categorie icon={item.icon} key={index} name={item.name} />;
          })}
        </ScrollView>

        <Card />

        <View className="flex flex-row justify-between items-center mx-7 my-2">
          <Text
            className="text-[18px] p-2 m-2"
            style={{ fontFamily: "Pop-bold" }}
          >
            Top Doctors
          </Text>
          <Text className="text-primary" style={{ fontFamily: "Pop-bold" }}>
            See all
          </Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mx-2"
        >
          {TopDoctors.map((item, index) => {
            return (
              <DoctorsCard
                key={index}
                available={item.available}
                image={item.image}
                major={item.major}
                name={item.name}
                starts={item.stars}
              />
            );
          })}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
