import React from "react";
import { View, SafeAreaView, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import { styles } from "../../styles/restaurant.styles";
import normalize from "../../hooks/useNormalize";
import { theme } from "../../styles/theme";

/**
 * @component SearchBarComponent
 * @description A search bar with an input field, search icon, and filter icon.
 *
 * @returns {JSX.Element} The rendered search bar component.
 */
export const SearchBarComponent: React.FC = (): JSX.Element => {
  return (
    <SafeAreaView style={{ flex: 0 }}>
      <LinearGradient
        colors={[theme.colors.gradientLight, theme.colors.white]}
        style={styles.searchGradient}
      >
        <View style={styles.searchSpacer} />
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Ionicons
              name="search"
              size={normalize(20)}
              color={theme.colors.midGray}
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search your favourite food"
              placeholderTextColor={theme.colors.midGray}
            />
            <Ionicons
              name="options"
              size={normalize(20)}
              color={theme.colors.midGray}
              style={styles.filterIcon}
            />
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};