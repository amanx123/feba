import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GuestsCard from "../components/GuestsCard";
import GuestGroupCard from "../components/GuestGroupCard";
import { useContext } from "react";
import GuestsContext from "../context/GuestsContext";
const GuestsScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const couple = {
    imageUrl: require("../assets/couple2.jpg"),
    title: "Couple",
    names: [
      { id: 0, name: "Husband" },
      { id: 1, name: "Wife" },
    ],
  };
  const imgUrls = {
    family: require("../assets/family.png"),
    colleague: require("../assets/colleague.png"),
    general: require("../assets/people.png"),
  };
  const context = useContext(GuestsContext);
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
      {/* couple */}
      <View>
        <GuestsCard
          imageUrl={couple.imageUrl}
          title={couple.title}
          guests={couple.names}
        />
      </View>
      {/* groupss */}
      <View className="mt-10">
        <GuestGroupCard
          imageUrl={imgUrls.family}
          title={"Husband's Family"}
          guests={context.husbandFamily}
          setGuests={context.setHusbandFamily}
        />
        <GuestGroupCard
          imageUrl={imgUrls.family}
          title={"Wife's Family"}
          guests={context.wifeFamily}
          setGuests={context.setWifeFamily}
        />
        <GuestGroupCard
          imageUrl={imgUrls.colleague}
          title={"Husband's Colleagues"}
          guests={context.husbandColleagues}
          setGuests={context.setHusbandColleagues}
        />
        <GuestGroupCard
          imageUrl={imgUrls.colleague}
          title={"Wife's Colleagues"}
          guests={context.wifeColleagues}
          setGuests={context.setWifeColleagues}
        />
        <GuestGroupCard
          imageUrl={imgUrls.general}
          title={"General Friends"}
          guests={context.general}
          setGuests={context.setGeneral}
        />
      </View>
    </SafeAreaView>
  );
};

export default GuestsScreen;
