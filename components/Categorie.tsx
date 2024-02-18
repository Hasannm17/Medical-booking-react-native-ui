import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

type CategorieProps = {
  name: string;
  id?: number;
  icon: React.ReactElement;
};

const Categorie = ({icon, name}:CategorieProps) => {
  return (
    <View className="mx-2 my-7 flex flex-col justify-center items-center  ">
      <TouchableOpacity className="bg-secondary p-4 rounded-full h-16 w-16 flex flex-row justify-center items-center ">{icon}</TouchableOpacity>
      <Text className="text-primary w-[80%] text-center my-2  text-[12px] "  style={{fontFamily:"Pop-bold"}}>{name}</Text>
    </View>
  );
};

export default Categorie;

const styles = StyleSheet.create({});
