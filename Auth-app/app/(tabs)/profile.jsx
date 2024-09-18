import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";

const Profile = () => {
  const user = {};

  const handleLogout = async () => {};
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 p-5 bg-background/40">
        <Text className="mt-8 mb-5 font-JakartaBold text-center text-4xl text-[#333]">
          User Profile
        </Text>

        {user ? (
          <View className="px-6">
            <Text className="text-lg font-Jakarta mb-2">
              Email: {user.email}
            </Text>
            <CustomButton
              title="Logout"
              handlePress={handleLogout}
              containerStyles="bg-[#6200ea] mt-10 px-5 py-4 justify-center items-center rounded-lg"
              textStyles="font-Jakarta text-lg text-white"
            />
          </View>
        ) : (
          <Text className="text-lg font-Jakarta">No user logged in</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Profile;
