import { View, Text, Image, TouchableOpacity, Animated } from "react-native";
import { useRef, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { Checkbox } from "react-native-paper";
const GuestsCard = ({ title, imageUrl, guests }) => {
  const [expanded, setExpanded] = useState(false);
  const animationController = useRef(new Animated.Value(0)).current;

  const toggleList = () => {
    const config = {
      duration: 200,
      toValue: expanded ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(animationController, config).start();
    setExpanded(!expanded);
  };
  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });
  return (
    <View className>
      <TouchableOpacity activeOpacity={0.9} onPress={() => toggleList()}>
        <View
          className="h-18 mx-2 p-1 space-x-2 bg-white flex-row"
          style={{
            elevation: 5,
            borderBottomColor: "black",
            borderBottomWidth: 0.4,
          }}
        >
          <Image className="h-16 w-16 rounded-full" source={imageUrl} />
          <View className="flex-row space-x-60 pt-2">
            <View>
              <Text className="font-extrabold text-lg">{title}</Text>
              <Text>{guests.length + "  "}guests</Text>
            </View>
            <Animated.View
              style={{ transform: [{ rotateZ: arrowTransform }] }}
              className="py-3"
            >
              <Entypo name="chevron-small-up" size={24} color="black" />
            </Animated.View>
          </View>
        </View>
      </TouchableOpacity>
      {expanded && (
        <View>
          {guests?.map((guest) => (
            <View
              key={guest.id}
              className="h-16 mx-2 p-4 bg-white flex-row space-x-14 items-center"
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 0.2,
              }}
            >
              <Checkbox status="checked" color="#d64161" onPress={() => {}} />
              <Text className="font-extrabold text-lg ">{guest.name}</Text>
              <Text className="absolute right-8 text-4xl text-green-400">
                ???
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default GuestsCard;
