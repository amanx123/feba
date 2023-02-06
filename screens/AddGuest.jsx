import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  Keyboard,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useLayoutEffect, useState } from "react";
import User from "../components/User";
import { LogBox } from "react-native";

const AddGuest = () => {
  const navigation = useNavigation();
  const {
    params: { title, guests, setGuests },
  } = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() => {}, [guest, guests, setGuests]);
  const [guest, setGuest] = useState("");
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);
  const handleRemove = (item) => {
    setGuests((prev) => {
      return prev.filter((x) => x.id !== item.id);
    });
  };

  const handleAddUser = () => {
    Keyboard.dismiss();
    setGuests((prev) => {
      return [{ id: Math.random().toString(), name: guest }, ...prev];
    });
    setGuest(null);
  };

  return (
    <SafeAreaView className="bg-rose-500 flex-1">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="ml-28 mt-4 rounded-full h-14 w-1/2 items-center justify-center bg-gray-300">
          <Text className="font-extrabold text-lg">{title}</Text>
        </View>
        <View className="mt-8">
          {guests?.map((item) => {
            return (
              <TouchableOpacity
                onPress={() => handleRemove(item)}
                activeOpacity={0.9}
              >
                <User name={item.name} />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      <View className="m-2 h-36 relative">
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          className="absolute bottom-5 w-full flex-row justify-around items-center"
        >
          <TextInput
            className="p-4 w-80 bg-white rounded-full border-2 border-rose-600"
            placeholder="Add a guest"
            value={guest}
            onChangeText={(text) => setGuest(text)}
          />
          <TouchableOpacity onPress={() => handleAddUser()}>
            <View className="items-center justify-center ">
              <Ionicons name="add-circle" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default AddGuest;
