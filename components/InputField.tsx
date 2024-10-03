import {
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import React from "react";

const InputField = ({
  label,
  labelStyle,
  icons,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconsStyle,
  className,
  ...props
}) => {
  return (
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback>
        <View className="my-2 w-full">
          <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>
            {label}
          </Text>
          <View
            className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 ${containerStyle}`}
          >
            {icon && (
              <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
