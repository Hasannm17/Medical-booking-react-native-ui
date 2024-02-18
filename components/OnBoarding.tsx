import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import slides from "../constants/slides";
import OnBoardingItem from "./OnBoardingItem";
import { MaterialIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
const OnBoarding = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const slideRef = useRef(null);

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const goToNextIndex = () => {
    if (slideRef.current && currentIndex < slides.length - 1) {
      const nextIndex = currentIndex + 1;
      //@ts-ignore
      slideRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }
    if (slideRef.current && currentIndex == slides.length - 1) {
      router.push("/(tabs)");
    }
  };

  return (
    <View className="h-screen">
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnBoardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
        onMomentumScrollEnd={(event) => {
          const index = Math.floor(
            Math.floor(event.nativeEvent.contentOffset.x) /
              Math.floor(event.nativeEvent.layoutMeasurement.width)
          );
          setCurrentIndex(index);
        }}
        ref={slideRef}
      />

      <TouchableOpacity
        className="flex flex-row justify-center items-center bg-primary p-4 rounded-full mx-6  "
        onPress={goToNextIndex}
      >
        <MaterialIcons name="navigate-next" size={40} color="white" />

        <Text className="font-bold text-white text-[17px]">
          {currentIndex != slideRef.current && currentIndex < slides.length - 1
            ? currentIndex
            : "Get Started!"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({});
