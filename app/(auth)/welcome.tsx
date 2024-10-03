import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { onboarding } from "../../constants/";
import CustomButton from "@/components/CustomButton";

const WelcomePage = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <View className="w-full flex justify-end items-end p-5">
        <TouchableOpacity
          onPress={() => {
            router.replace("/(auth)/sign-up");
          }}
        >
          <Text className="text-black text-md font-JakartaBold">Skip</Text>
        </TouchableOpacity>
      </View>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] bg-[#E2E8F0] rounded-full mx-1" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] bg-[#0286FF] rounded-full mx-1" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View
            key={item.id}
            className="flex flex-col items-center justify-between"
          >
            <Image
              source={item.image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            <View>
              <Text className="text-black text-3xl font-bold mx-10 text-center my-10">
                {item.title}
              </Text>
              <Text className=" text-md font-JakartaSemiBold text-center mx-10 text-[#858585]">
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </Swiper>
      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
        className="w-11/12 mt-10"
      />
    </SafeAreaView>
  );
};

export default WelcomePage;
