import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import { registerUser } from "../(services)/api/api";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateInfo = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm Password is required.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const onSignUp = async () => {
    if (validateInfo()) {
      setLoading(true);
      try {
        const response = await registerUser({
          email: formData.email,
          password: formData.password,
        });

        console.log("Registration successful:", response);
        router.push("/sign-in"); // Redirect to sign in on success
      } catch (error) {
        console.error("Registration failed:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const inputStyle = (error) =>
    `border ${error ? "border-red-500" : "border-gray-300"} p-5 rounded-lg text-lg font-Jakarta`;

  return (
    <KeyboardAvoidingView className="flex-1" behavior="padding">
      <ScrollView>
        <View className="p-5 flex-1">
          <Text className="font-JakartaBold text-4xl">Let's Get Started</Text>
          <Text className="mt-5 text-gray text-lg font-Jakarta">
            Enter your Email Address and Password to create an account.
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
                secureTextEntry
              />
              {errors.password && (
                <Text className="text-red-500 p-1 font-Jakarta text-xs">
                  {errors.password}
                </Text>
              )}
            </View>
            <View className="mb-4">
              <Text className="text-lg font-JakartaSemiBold mb-2">
                Confirm Password<Text className="text-red-500">*</Text>
              </Text>
              <TextInput
                className={inputStyle(errors.confirmPassword)}
                value={formData.confirmPassword}
                onChangeText={(text) =>
                  handleInputChange("confirmPassword", text)
                }
                placeholder="Enter your Confirm Password"
                secureTextEntry
              />
              {errors.confirmPassword && (
                <Text className="text-red-500 p-1 font-Jakarta text-xs">
                  {errors.confirmPassword}
                </Text>
              )}
            </View>
          </View>

          <View className="flex flex-row justify-center mt-4">
            <Text className="font-JakartaLight text-base mr-1">
              Already have an account?
            </Text>
            <CustomButton
              title="Login"
              handlePress={() => router.push("/sign-in")}
              textStyles="font-JakartaLight text-base text-blue-500"
            />
          </View>

          <CustomButton
            title={loading ? <ActivityIndicator color="#fff" /> : "Sign Up"}
            handlePress={onSignUp}
            containerStyles={`m-5 p-5 rounded-xl items-center bg-blue-500`}
            textStyles="font-JakartaBold text-lg uppercase text-white"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
