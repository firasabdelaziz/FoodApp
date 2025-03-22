import React from "react";
import { View, Image, StyleSheet } from "react-native";
import normalize from "../../hooks/useNormalize";

interface UserAvatarProps {
  source: any;
  size: number;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ source, size }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={source} 
        style={[
          styles.avatar, 
          { 
            width: size, 
            height: size, 
            borderRadius: size / 2,
            borderColor: "#0EAA7E",
            borderWidth: 2 
          }
        ]} 
      />
      <View style={[styles.statusDot, { top: 3, left: -2 }]} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  avatar: {
    // avatar styles
  },
  statusDot: {
    position: "absolute",
    width: normalize(12),
    height: normalize(12),
    borderRadius: normalize(6),
    backgroundColor: "#0EAA7E", 
    borderWidth: 2,
    borderColor: "#E5F5F2",
  },
});