import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { CommonStyles } from "../../styles/common";
import { theme } from "../../styles/theme";
import { CustomButtonProps } from "../../types/components.types";
import { ActivityIndicator } from "react-native-paper";
import normalize from "../../hooks/useNormalize";

export const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  disabled = false,
  style,
  textStyle,
  loading = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        CommonStyles.primaryButton,
        disabled && { backgroundColor: theme.colors.lightGray },
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {loading ? (
        <View style={{ flexDirection: "row" }}>
          <ActivityIndicator
            size={normalize(13)}
            color={theme.colors.disabledGray}
            style={{ right: normalize(5) }}
          />
          <Text
            style={[
              CommonStyles.primaryButtonText,
              disabled && { color: theme.colors.darkGray },
              textStyle,
            ]}
          >
            {title}
          </Text>
        </View>
      ) : (
        <Text
          style={[
            CommonStyles.primaryButtonText,
            disabled && { color: theme.colors.darkGray },
            textStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};