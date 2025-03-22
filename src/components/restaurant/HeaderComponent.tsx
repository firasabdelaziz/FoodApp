import React from "react";
import { View, SafeAreaView, StatusBar, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import { UserAvatar } from "../common/UserAvatar";
import { styles } from "../../styles/restaurant.styles";
import normalize from "../../hooks/useNormalize";
import { theme } from "../../styles/theme";

interface HeaderComponentProps {
  isDelivery: boolean;
  setIsDelivery: (value: boolean) => void;
}


/**
 * @component HeaderComponent
 * @description A header component for a food delivery app that allows users to toggle between delivery and pickup modes.
 * @param {boolean} isDelivery - A boolean state indicating whether the delivery mode is active.
 * @param {(value: boolean) => void} setIsDelivery - A function to update the delivery mode state.
 * @returns {JSX.Element} - Returns the header component with user avatar, location, and toggle buttons.
 */
export const HeaderComponent: React.FC<HeaderComponentProps> = ({
  isDelivery,
  setIsDelivery,
}): JSX.Element => {
  return (
    <LinearGradient
      colors={[theme.colors.gradientDark, theme.colors.gradientLight]}
      style={styles.gradientBackground}
    >
      <SafeAreaView>
        <StatusBar barStyle="dark-content" backgroundColor="#E5F5F2" />
        <View style={styles.headerContainer}>
          <UserAvatar source={require("../../../assets/userItem.jpg")} size={55} />
          <View style={styles.headerTextContainer}>
            <View style={styles.headerTitleContainer}>
              <Text style={styles.headerTitle}>Work</Text>
              <Ionicons
                name="chevron-down"
                size={normalize(20)}
                color={theme.colors.black}
              />
            </View>
            <Text style={styles.headerSubtitle}>Borj louzir, Ariana</Text>
          </View>
          <View style={styles.toggleContainer}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                isDelivery
                  ? styles.toggleButtonActive
                  : styles.toggleButtonInactive,
              ]}
              onPress={() => setIsDelivery(true)}
            >
              <Ionicons
                name="bicycle"
                size={normalize(18)}
                color={isDelivery ? theme.colors.black : theme.colors.white}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                !isDelivery
                  ? styles.toggleButtonActive
                  : styles.toggleButtonInactive,
              ]}
              onPress={() => setIsDelivery(false)}
            >
              <Ionicons
                name="bag"
                size={normalize(18)}
                color={!isDelivery ? theme.colors.black : theme.colors.white}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};