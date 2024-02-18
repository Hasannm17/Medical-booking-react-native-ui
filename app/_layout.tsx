import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { Stack } from 'expo-router'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const _layout = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Pop': require('../assets/fonts/Poppins-Medium.ttf'),
    'Pop-bold' :require("../assets/fonts/Poppins-Bold.ttf")
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View onLayout={onLayoutRootView} className='flex flex-1'>    
  <Stack initialRouteName='(tabs)' screenOptions={{headerShown:false}} >
    <Stack.Screen name='index' options={{title:"Mainpage"}} />
    <Stack.Screen name='(tabs)' />
  </Stack>
  </View>
  )
}

export default _layout

const styles = StyleSheet.create({})