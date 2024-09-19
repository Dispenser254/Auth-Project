import { View, Text, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from "../../components/CustomButton";
import { getUserById, signOutUser } from "../(services)/api/api";
import { useSelector } from "react-redux";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { currentUser } = useSelector((state) => state.user);

  console.log(currentUser)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        if (userId) {
          const userData = await getUserById(userId);
          setUser(userData);
        } else {
          setError("User ID not found");
        }
      } catch (err) {
        setError("Error fetching user details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await signOutUser();
      await AsyncStorage.removeItem("userId");
      // Optionally, navigate to login screen or perform other actions after logout
    } catch (err) {
      console.error("Error during sign out:", err);
    }
  };

  if (loading) {
    return (
      <SafeAreaView className="flex-1">
        <View className="flex-1 p-5 bg-background/40 justify-center items-center">
          <ActivityIndicator size="large" color="#6200ea" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 p-5 bg-background/40">
        <Text className="mt-8 mb-5 font-JakartaBold text-center text-4xl text-[#333]">
          User Profile
        </Text>

        {error ? (
          <Text className="text-lg font-Jakarta text-red-500 text-center">
            {error}
          </Text>
        ) : user ? (
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
          <Text className="text-lg font-Jakarta text-center">
            No user logged in
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Profile;
