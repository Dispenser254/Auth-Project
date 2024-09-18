import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({ handlePress, title, containerStyles, textStyles }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`shadow-md shadow-neutral-400 ${containerStyles}`}
    >
      <Text className={`${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
