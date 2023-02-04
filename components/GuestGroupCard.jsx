import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";

const GuestGroupCard = ({ index, imageUrl, title, guests }) => {
  const navigation = useNavigation();
  return (
    <View
      className="h-18 mx-2 p-2 space-x-2 bg-white flex-row mb-2 relative"
      style={{
        elevation: 5,
      }}
    >
      <Image className="h-16 w-16 rounded-full" source={imageUrl} />
      <View className="flex-row items-center ">
        <View className="">
          <Text className="font-extrabold text-lg">{title}</Text>
          <Text>{guests.length + "  "}guests</Text>
        </View>
      </View>
      <TouchableOpacity
        className="bg-rose-600 rounded-xl p-1 px-3 absolute right-8 top-7 "
        onPress={() => {
          navigation.navigate("AddGuest", {
            title,
            guests,
          });
        }}
      >
        <Text className="text-white font-bold">Add +</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GuestGroupCard;
