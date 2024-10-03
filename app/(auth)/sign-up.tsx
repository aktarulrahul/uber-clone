import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";

const Page = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="relative w-full h-[250px]">
        <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
        <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
          Create Your Account
        </Text>
        <InputField
          label={"Name"}
          placeholder="Enter your name"
          icons={icons.person}
          value={form.name}
          onChangeText={(text) => setForm({ ...form, name: text })}
        />
      </View>
    </ScrollView>
  );
};
export default Page;
