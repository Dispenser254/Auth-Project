import { View, Text } from "react-native";
import React from "react";
import { ResizeMode, Video } from "expo-av";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const GetStarted = () => {
  return (
    <View className="flex-1 justify-between">
      <Video
        source={{
          uri: "https://videos.pexels.com/video-files/5377700/5377700-sd_540_960_25fps.mp4",
        }}
        className="w-full h-full absolute"
        resizeMode={ResizeMode.COVER}
        shouldPlay
        isMuted
        isLooping
      />

      <View className="mt-20 p-6">
        <Text className="text-4xl text-white uppercase font-JakartaExtraBold">
          Ready to change the way you money?
        </Text>
      </View>

      <View className="flex flex-row justify-center px-4 mb-14">
        <CustomButton
          title="Login"
          handlePress={() => router.push("/sign-in")}
          textStyles="text-black text-lg uppercase font-JakartaBold"
          containerStyles="bg-neutral-200 rounded-xl px-8 py-4 border border-orange-500 mr-6"
        />
        <CustomButton
          title="Sign Up"
          handlePress={() => router.push("/sign-up")}
          textStyles="text-white text-lg uppercase font-JakartaBold"
          containerStyles="bg-blue-500 rounded-xl px-8 py-4 ml-6"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default GetStarted;
