import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 p-5 bg-background/40">
        <Text className="mt-8 mb-5 font-JakartaBold text-center text-4xl text-[#333]">
          Dashboard
        </Text>

        <View className="mb-2">
          <Text className="text-lg font-JakartaSemiBold mb-2">
            Technologies Used:
          </Text>
        </View>
        <View className="px-6 mb-4">
          <Text className="text-lg font-Jakarta mb-2">React Native</Text>
        </View>
        <View className="px-6 mb-4">
          <Text className="text-lg font-Jakarta mb-2">Redux</Text>
        </View>
        <View className="px-6 mb-4">
          <Text className="text-lg font-Jakarta mb-2">Tanstack Query</Text>
        </View>
        <View className="px-6 mb-4">
          <Text className="text-lg font-Jakarta mb-2">NodeJS API</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
