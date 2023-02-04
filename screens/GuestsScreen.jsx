import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

import GuestsCard from "../components/GuestsCard";
import GuestGroupCard from "../components/GuestGroupCard";

const GuestsScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const guests = [
    {
      imageUrl: require("../assets/couple2.jpg"),
      title: "Couple",
      names: [
        { id: 0, name: "Husband" },
        { id: 1, name: "Wife" },
      ],
    },
  ];
  const guestGroups = [
    {
      imageUrl: require("../assets/family.png"),
      title: "Husband's Family",
      guests: [
        { id: 0, name: "bcahbcia" },
        { id: 1, name: "ubuie" },
        { id: 2, name: "hahfoi" },
      ],
    },
    {
      imageUrl: require("../assets/family.png"),
      title: "Wife's Family",
      guests: [
        { id: 0, name: "bcahbcia" },
        { id: 1, name: "ubuie" },
        { id: 2, name: "hahfoi" },
      ],
    },
    {
      imageUrl: require("../assets/colleague.png"),
      title: "Husband's Colleagues",
      guests: [
        { id: 0, name: "bcahbcia" },
        { id: 1, name: "ubuie" },
        { id: 2, name: "hahfoi" },
      ],
    },
    {
      imageUrl: require("../assets/colleague.png"),
      title: "Wife's Colleagues",
      guests: [
        { id: 0, name: "bcahbcia" },
        { id: 1, name: "ubuie" },
        { id: 2, name: "hahfoi" },
      ],
    },
    {
      imageUrl: require("../assets/people.png"),
      title: "General Friends",
      guests: [
        { id: 0, name: "bcahbcia" },
        { id: 1, name: "ubuie" },
        { id: 2, name: "hahfoi" },
      ],
    },
    {
      imageUrl: require("../assets/colleague.png"),
      title: "Husband's Colleagues",
      guests: [
        { id: 0, name: "bcahbcia" },
        { id: 1, name: "ubuie" },
        { id: 2, name: "hahfoi" },
      ],
    },
    {
      imageUrl: require("../assets/colleague.png"),
      title: "Wife's Colleagues",
      guests: [
        { id: 0, name: "bcahbcia" },
        { id: 1, name: "ubuie" },
        { id: 2, name: "hahfoi" },
      ],
    },
    {
      imageUrl: require("../assets/people.png"),
      title: "General Friends",
      guests: [
        { id: 0, name: "bcahbcia" },
        { id: 1, name: "ubuie" },
        { id: 2, name: "hahfoi" },
      ],
    },
    {
      imageUrl: require("../assets/colleague.png"),
      title: "Wife's Colleagues",
      guests: [
        { id: 0, name: "bcahbcia" },
        { id: 1, name: "ubuie" },
        { id: 2, name: "hahfoi" },
      ],
    },
    {
      imageUrl: require("../assets/people.png"),
      title: "General Friends",
      guests: [
        { id: 0, name: "bcahbcia" },
        { id: 1, name: "ubuie" },
        { id: 2, name: "hahfoi" },
      ],
    },
    {
      imageUrl: require("../assets/colleague.png"),
      title: "Husband's Colleagues",
      guests: [
        { id: 0, name: "bcahbcia" },
        { id: 1, name: "ubuie" },
        { id: 2, name: "hahfoi" },
      ],
    },
    {
      imageUrl: require("../assets/colleague.png"),
      title: "Wife's Colleagues",
      guests: [
        { id: 0, name: "bcahbcia" },
        { id: 1, name: "ubuie" },
        { id: 2, name: "hahfoi" },
      ],
    },
  ];
  return (
    <SafeAreaView className="bg-rose-500 flex-1">
      <View
        className="h-14 mx-2 bg-white relative flex-row justify-between items-center px-4"
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 0.5,
        }}
      >
        <View className="flex-row space-x-14">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <AntDesign name="arrowleft" size={30} color="black" />
          </TouchableOpacity>
          <Text className="font-extrabold text-lg">Guest List</Text>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <AntDesign name="search1" size={30} color="#d64161" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={guests}
        renderItem={({ item, index }) => {
          return (
            <GuestsCard
              index={index}
              imageUrl={item.imageUrl}
              title={item.title}
              guests={item.names}
            />
          );
        }}
      />

      <FlatList
        className="mt-10"
        data={guestGroups}
        renderItem={({ item, index }) => {
          return (
            <GuestGroupCard
              index={index}
              imageUrl={item.imageUrl}
              title={item.title}
              guests={item.guests}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default GuestsScreen;
