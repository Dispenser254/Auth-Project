import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { icons } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 p-5 bg-background">
        <Text className="mt-8 mb-5 font-JakartaBold text-center text-4xl text-[#333]">
          Settings
        </Text>
        <View className="my-2">
          <TouchableOpacity className="flex flex-row items-center px-3 py-5 mb-5 bg-white rounded-lg">
            <Image
              source={icons.User}
              resizeMode="contain"
              tintColor="#4caf50"
              className="h-6 w-6"
            />
            <Text className="text-[#333] ml-5 flex-1 text-lg font-Jakarta">
              Account
            </Text>
            <Image
              source={icons.RightArrow}
              resizeMode="contain"
              tintColor="#999"
              className="h-6 w-6 ml-auto"
            />
          </TouchableOpacity>
          <TouchableOpacity className="flex flex-row items-center px-3 py-5 mb-5 bg-white rounded-lg">
            <Image
              source={icons.NotificationBell}
              resizeMode="contain"
              tintColor="#ff9800"
              className="h-6 w-6"
            />
            <Text className="text-[#333] ml-5 flex-1 text-lg font-Jakarta">
              Notification
            </Text>
            <Image
              source={icons.RightArrow}
              resizeMode="contain"
              tintColor="#999"
              className="h-6 w-6 ml-auto"
            />
          </TouchableOpacity>
          <TouchableOpacity className="flex flex-row items-center px-3 py-5 mb-5 bg-white rounded-lg">
            <Image
              source={icons.Lock}
              resizeMode="contain"
              tintColor="#f44336"
              className="h-6 w-6"
            />
            <Text className="text-[#333] ml-5 flex-1 text-lg font-Jakarta">
              Privacy
            </Text>
            <Image
              source={icons.RightArrow}
              resizeMode="contain"
              tintColor="#999"
              className="h-6 w-6 ml-auto"
            />
          </TouchableOpacity>
          <TouchableOpacity className="flex flex-row items-center px-3 py-5 mb-5 bg-white rounded-lg">
            <Image
              source={icons.InfoCircle}
              resizeMode="contain"
              tintColor="#3f51b5"
              className="h-6 w-6"
            />
            <Text className="text-[#333] ml-5 flex-1 text-lg font-Jakarta">
              About
            </Text>
            <Image
              source={icons.RightArrow}
              resizeMode="contain"
              tintColor="#999"
              className="h-6 w-6 ml-auto"
            />
          </TouchableOpacity>
          <TouchableOpacity className="flex flex-row items-center px-3 py-5 mb-5 bg-white rounded-lg">
            <Image
              source={icons.Logout}
              resizeMode="contain"
              tintColor="#e91e63"
              className="h-6 w-6"
            />
            <Text className="text-[#333] ml-5 flex-1 text-lg font-Jakarta">
              Logout
            </Text>
            <Image
              source={icons.RightArrow}
              resizeMode="contain"
              tintColor="#999"
              className="h-6 w-6 ml-auto"
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
