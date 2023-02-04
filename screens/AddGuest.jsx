import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  ScrollView,
  Keyboard,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useLayoutEffect, useState } from "react";
import User from "../components/User";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";

const AddGuest = () => {
  const navigation = useNavigation();
  const {
    params: { title, guests },
  } = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  let nextId = guests[guests.length - 1].id++;
  const [user, setUser] = useState();
  const [users, setUsers] = useState(guests);

  const handleAddUser = () => {
    Keyboard.dismiss();
    setUsers([...users, { id: nextId++, name: user }]);
    setUser(null);
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
          {users.map((user) => {
            return (
              <TouchableOpacity
                key={user.id}
                onPress={() => setUsers(users.filter((a) => a.id !== user.id))}
                activeOpacity={0.9}
              >
                <User name={user.name} />
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
            value={user}
            onChangeText={(text) => setUser(text)}
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
