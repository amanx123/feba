import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useContext } from "react";
import GuestsContext from "../context/GuestsContext";
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  let num = useContext(GuestsContext);
  const total =
    num.husbandFamily.length +
    num.husbandColleagues.length +
    num.wifeFamily.length +
    num.wifeColleagues.length +
    num.general.length;
  return (
    <>
      <SafeAreaView className="bg-rose-500 flex-1">
        {/* upper */}
        <View className="m-2 bg-white h-1/3 relative" style={{ elevation: 10 }}>
          <Image
            source={require("../assets/wedding.jpg")}
            className="h-52 w-full relative"
          />
          <View className="absolute top-10 items-center space-y-4">
            <Text className="text-white text-2xl font-extrabold left-1/2">
              Name | Surname
            </Text>
            <TouchableOpacity className="left-1/2">
              <Text className="text-cyan-500 text-2xl font-extrabold ">
                Add Wedding Date +
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="border-4 border-rose-600 rounded-3xl p-1 left-1/2">
              <Text className="text-rose-500 text-xl font-extrabold px-2 mx-3">
                Upload Photo
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* middle */}
        <View className="absolute mt-72 flex-row mx-14 space-x-8">
          <View
            className="bg-white border-2 rounded-lg border-rose-600 h-44 w-36 items-center p-3 space-y-1 py-2"
            style={{ elevation: 15 }}
          >
            <AntDesign name="contacts" size={38} color="#d64161" />
            <Text className="text-4xl font-extrabold text-rose-500 top-1">
              20
            </Text>
            <Text className="text-center font-extrabold text-rose-500 ">
              Vendors Shortlisted
            </Text>
            <TouchableOpacity className="border-2 rounded-xl border-rose-600 flex-row items-center px-3 space-x-1">
              <Text className="text-rose-500 text-xs text-center font-extrabold">
                View All
              </Text>
              <Entypo name="chevron-small-right" size={18} color="#d64161" />
            </TouchableOpacity>
          </View>
          <View
            className="bg-white border-2 rounded-lg border-rose-600 h-44 w-36 items-center p-3 space-y-1 py-2"
            style={{ elevation: 15 }}
          >
            <MaterialIcons name="people-alt" size={38} color="#d64161" />
            <Text className="text-4xl font-extrabold text-rose-500 top-1">
              {total + 2}
            </Text>
            <Text className="text-center font-extrabold text-rose-500 px-2">
              Wedding Guests
            </Text>
            <TouchableOpacity
              className="border-2 rounded-xl border-rose-600 flex-row items-center px-2 space-x-1 "
              onPress={() => {
                navigation.navigate("GuestList");
              }}
            >
              <Text className="text-rose-500 text-xs text-center font-extrabold">
                Add Guest List
              </Text>
              <Entypo name="chevron-small-right" size={18} color="#d64161" />
            </TouchableOpacity>
          </View>
        </View>
        {/* bottom */}
        <View className="bg-white h-1/2 m-2 mt-32 p-4 space-y-6">
          <View
            className="bg-white border-4 rounded-3xl border-rose-600 h-32 w-full mt-4 flex-row"
            style={{ elevation: 8 }}
          >
            <Image
              source={require("../assets/couple1.jpg")}
              className="h-20 w-20 m-1 mt-4"
            />
            <View className="space-y-1">
              <Text className="text-xl font-extrabold mt-4">
                Wedding Planning is difficult!
              </Text>
              <View className="flex-row items-center justify-center">
                <Text className="text-rose-500 font-extrabold">
                  Try our Professional planner @ just
                </Text>
                <Text className="text-black ml-1 font-extrabold">Rs 1499</Text>
              </View>
              <TouchableOpacity className="bg-rose-600 rounded-lg h-6 w-24 flex-row justify-center items-center">
                <Text className="text-white text-xs text-center font-extrabold">
                  Try Now
                </Text>
                <Entypo name="chevron-small-right" size={18} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            className="bg-white border-4 rounded-3xl border-rose-600 h-32 w-full space-x-2 flex-row"
            style={{ elevation: 8 }}
          >
            <Image
              source={require("../assets/couple.jpg")}
              className="h-20 w-20 mt-5 ml-2 rounded-2xl"
            />
            <View className="space-y-6">
              <Text className="text-xl font-extrabold mt-4">
                Start your guest list today !
              </Text>
              <TouchableOpacity
                className="bg-rose-600 rounded-lg h-6 w-24 flex-row justify-center items-center"
                onPress={() => {
                  navigation.navigate("GuestList");
                }}
              >
                <Text className="text-white text-xs text-center font-extrabold">
                  Add Guests
                </Text>
                <Entypo name="chevron-small-right" size={18} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
