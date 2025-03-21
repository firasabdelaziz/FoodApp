import React from "react";
import { CommonStyles } from "../../styles/common";
import { Text, View } from "react-native";
import { CustomHeaderProps } from "../../types/components.types";
import Ionicons from "react-native-vector-icons/Ionicons";
import normalize from "../../hooks/useNormalize";

export const CustomHeader: React.FC<CustomHeaderProps> = ({ title, onBack }) => {
  const haveTitle = title !== "";
  return (
    <View style={[haveTitle && CommonStyles.header]}>
      {onBack && (
        <Ionicons
          onPress={onBack}
          name="chevron-back"
          size={24}
          color="#000"
          style={{ position: "absolute", left: normalize(25), top: normalize(15) }}
        />
      )}
      {haveTitle && <Text style={CommonStyles.headerTitle}>{title}</Text>}
    </View>
  );
};