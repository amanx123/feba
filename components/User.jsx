import { View, Text } from "react-native";
import React from "react";

const User = ({ name }) => {
  return (
    <View className="h-12 m-1 items-center justify-center bg-rose-200 rounded-lg">
      <Text className="font-extrabold text-lg">{name}</Text>
    </View>
  );
};

export default User;
