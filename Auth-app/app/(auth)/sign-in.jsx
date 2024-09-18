import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateInfo = () => {
    const errors = {};

    if (!formData.password.trim()) errors.password = "Password is required.";
    if (!formData.email.trim()) errors.email = "Email Address is required.";

    setErrors(errors);
    return !hasErrors(); // Return true if no errors
  };

  const hasErrors = () => {
    return Object.keys(errors).length > 0; // Return true if there are errors
  };

  const onSignIn = async () => {
    try {
      validateInfo();
      router.push("/(tabs)/home");
    } catch (error) {
      console.log(error);
    }
  };

  const inputStyle = (error) =>
    `border ${error ? "border-red-500" : "border-gray-300"} p-5 rounded-lg text-lg font-Jakarta`;

  return (
    <KeyboardAvoidingView className="flex-1" behavior="padding">
      <ScrollView>
        <View className="p-5 flex-1">
          <Text className="font-JakartaBold text-4xl">Welcome back</Text>
          <Text className="mt-5 text-gray text-lg font-Jakarta">
            Log in to your account.
          </Text>

          <View className="flex flex-col mt-10">
            <View className="mb-4">
              <Text className="text-lg font-JakartaSemiBold mb-2">
                Email Address<Text className="text-red-500">*</Text>
              </Text>
              <TextInput
                className={inputStyle(errors.email)}
                value={formData.email}
                onChangeText={(text) => handleInputChange("email", text)}
                placeholder="Enter your Email Address"
              />
              {errors.email && (
                <Text className="text-red-500 p-1 font-Jakarta text-xs">
                  {errors.email}
                </Text>
              )}
            </View>
            <View className="mb-4">
              <Text className="text-lg font-JakartaSemiBold mb-2">
                Password<Text className="text-red-500">*</Text>
              </Text>
              <TextInput
                className={inputStyle(errors.password)}
                value={formData.password}
                onChangeText={(text) => handleInputChange("password", text)}
                placeholder="Enter your Password"
              />
              {errors.password && (
                <Text className="text-red-500 p-1 font-Jakarta text-xs">
                  {errors.password}
                </Text>
              )}
            </View>
          </View>

          <View className="flex flex-row justify-center mt-4">
            <Text className="font-JakartaLight text-base mr-1">
              Don't have an account?
            </Text>
            <CustomButton
              title="Login"
              handlePress={() => router.push("/sign-up")}
              textStyles="font-JakartaLight text-base text-blue-500"
            />
          </View>

          <CustomButton
            title="Login"
            handlePress={onSignIn}
            containerStyles={`m-5 p-5 rounded-xl items-center bg-blue-500`}
            textStyles="font-JakartaBold text-lg uppercase text-white"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
