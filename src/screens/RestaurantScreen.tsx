import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Text,
  Image as RNImage,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { fetchRestaurants, resetRestaurants } from "../store/restaurantSlice";
import { RestaurantScreenProps } from "../types/navigation";
import { CommonStyles } from "../styles/common";
import { theme } from "../styles/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Restaurant } from "../types/restaurant.types";
import normalize from "../hooks/useNormalize";
import { UserAvatar } from "../components/common/UserAvatar";
import { FlashList } from "@shopify/flash-list";

const { width } = Dimensions.get("window");

export const RestaurantScreen: React.FC<RestaurantScreenProps> = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const { restaurants, loading, error, page, hasMore } = useSelector(
    (state: RootState) => state.restaurant
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]); // Changed to array for multiple selections
  const [isDelivery, setIsDelivery] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (restaurants.length === 0 && !loading) {
      console.log("Initial fetch for page 1");
      dispatch(fetchRestaurants(1));
    }
  }, [dispatch, restaurants.length, loading]);

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      console.log("Loading more, current page:", page);
      dispatch(fetchRestaurants(page));
    }
  }, [dispatch, loading, hasMore, page]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    console.log("Refreshing data");
    dispatch(resetRestaurants());
    dispatch(fetchRestaurants(1)).finally(() => setRefreshing(false));
  }, [dispatch]);

  const categories = [
    { name: "Promo", icon: require("../../assets/category/promo.webp"), isIcon: false },
    { name: "Sandwich", icon: require("../../assets/category/sandwich.webp"), isIcon: false },
    { name: "Burgers", icon: require("../../assets/category/burger.webp"), isIcon: false },
    { name: "Pasta", icon: require("../../assets/category/pasta.webp"), isIcon: false },
    { name: "Beverages", icon: require("../../assets/category/beverage.webp"), isIcon: false },
  ];

  // Filter restaurants based on multiple selected categories
  const filteredRestaurants = selectedCategories.length > 0
    ? restaurants.filter((restaurant) =>
        restaurant.restaurant_specialities?.some((speciality) =>
          selectedCategories.includes(speciality.category)
        )
      )
    : restaurants;

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category) // Remove if already selected
        : [...prev, category] // Add if not selected
    );
  };

  const renderCategory = useCallback(
    ({ item }: { item: { name: string; icon: any; isIcon: boolean } }) => (
      <TouchableOpacity
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: normalize(10),
          marginRight: normalize(16),
          width: normalize(85),
        }}
        onPress={() => toggleCategory(item.name)}
      >
        <RNImage
          source={item.icon}
          style={{
            width: normalize(60),
            height: normalize(60),
            marginBottom: normalize(6),
            borderRadius: item.name === "Promo" ? 0 : normalize(5),
          }}
        />
        <Text
          style={{
            fontSize: normalize(14),
            fontWeight: "500",
            fontFamily: theme.fontFamily.medium,
            color: selectedCategories.includes(item.name) ? theme.colors.lightGreen : theme.colors.black,
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    ),
    [selectedCategories]
  );

  const renderSelectedCategoryLabels = () => {
    if (selectedCategories.length === 0) return null;
    return (
      <View
        style={{
          paddingHorizontal: normalize(16),
          paddingTop: normalize(10),
          flexDirection: "row",
          flexWrap: "wrap",
          gap: normalize(8),
        }}
      >
        {selectedCategories.map((category) => (
          <TouchableOpacity
            key={category}
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#24AF7E",
              paddingVertical: normalize(6),
              paddingHorizontal: normalize(12),
              borderRadius: normalize(20),
            }}
            onPress={() => toggleCategory(category)}
          >
            <Text
              style={{
                color: theme.colors.white,
                fontSize: normalize(14),
                fontWeight: "500",
                marginRight: normalize(8),
              }}
            >
              {category}
            </Text>
            <Ionicons name="close" size={normalize(16)} color={theme.colors.white} />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderRestaurant = useCallback(
    ({ item }: { item: Restaurant }) => (
      <TouchableOpacity
        style={{
          backgroundColor: theme.colors.white,
          borderRadius: normalize(20),
          marginBottom: normalize(16),
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 2,
        }}
      >
        <RNImage
          source={{ uri: item.banner_url ?? "https://via.placeholder.com/150" }}
          style={{
            width: "100%",
            height: normalize(180),
            resizeMode: "cover",
            borderTopLeftRadius: normalize(20),
            borderTopRightRadius: normalize(20),
          }}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            top: normalize(16),
            right: normalize(16),
            width: normalize(32),
            height: normalize(32),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="heart-outline" size={normalize(24)} color="#4CD080" />
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            bottom: normalize(65),
            left: normalize(16),
            backgroundColor: "#FFFFFF",
            borderRadius: normalize(30),
            paddingHorizontal: normalize(12),
            paddingVertical: normalize(6),
            flexDirection: "row",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <View
            style={{
              backgroundColor: "#24AF7E",
              borderRadius: normalize(12),
              width: normalize(20),
              height: normalize(20),
              justifyContent: "center",
              alignItems: "center",
              marginRight: normalize(6),
            }}
          >
            <Text style={{ color: "#FFFFFF", fontSize: normalize(10), fontWeight: "bold" }}>
              %
            </Text>
          </View>
          <Text style={{ color: "#000000", fontSize: normalize(12), fontWeight: "600" }}>
            5 Available Offers
          </Text>
        </View>
        <View style={{ padding: normalize(16) }}>
          <Text
            style={{
              fontSize: normalize(22),
              fontWeight: "700",
              color: "#000000",
              marginBottom: normalize(8),
            }}
          >
            {item.name_en || "Route 66 Ben Arous"}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="bicycle" size={normalize(16)} color="#24AF7E" />
            <Text
              style={{
                fontSize: normalize(14),
                color: "#717171",
                marginLeft: normalize(8),
                fontWeight: "500",
              }}
            >
              {item.max_delivery_distance?.toFixed(2) || "1.50"} DT |{" "}
              {item.preparation_time || "20-35 min"}
            </Text>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: normalize(32),
            right: normalize(16),
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#E8F7F1",
            borderRadius: normalize(30),
            paddingHorizontal: normalize(14),
            paddingVertical: normalize(6),
            borderWidth: 1,
            borderColor: "#D4EFE4",
          }}
        >
          <Text
            style={{
              fontSize: normalize(16),
              fontWeight: "bold",
              color: "#000000",
              marginRight: normalize(4),
            }}
          >
            {item.restaurant_rating?.toFixed(1) || "4.7"}
          </Text>
          <Ionicons name="star" size={normalize(14)} color="#4CD080" />
        </View>
      </TouchableOpacity>
    ),
    []
  );

  const renderFooter = useCallback(() => {
    if (loading && hasMore) {
      return (
        <View style={{ paddingVertical: normalize(20), alignItems: "center" }}>
          <ActivityIndicator size="large" color="#24AF7E" />
        </View>
      );
    }
    if (!hasMore && filteredRestaurants.length > 0) {
      return (
        <View style={{ paddingVertical: normalize(20), alignItems: "center" }}>
          <Text style={{ fontSize: normalize(16), color: "#24AF7E" }}>
            No more restaurants
          </Text>
        </View>
      );
    }
    return null;
  }, [loading, hasMore, filteredRestaurants.length]);

  const renderEmpty = useCallback(() => {
    if (loading && filteredRestaurants.length === 0) {
      return (
        <View style={{ padding: normalize(20), alignItems: "center" }}>
          <ActivityIndicator size="large" color="#24AF7E" />
        </View>
      );
    }
    if (!loading && filteredRestaurants.length === 0) {
      return (
        <View style={{ padding: normalize(20), alignItems: "center" }}>
          <Text style={{ fontSize: normalize(16), color: "#24AF7E" }}>
            No restaurants found
          </Text>
        </View>
      );
    }
    return null;
  }, [loading, filteredRestaurants.length]);

  return (
    <View style={[CommonStyles.container, { paddingBottom: 0 }]}>
      <LinearGradient
        colors={["#C4E2DD", "#E8F7F1", theme.colors.white]}
        style={{ width: "100%" }}
      >
        <SafeAreaView>
          <StatusBar barStyle="dark-content" backgroundColor="#E5F5F2" />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: normalize(20),
              paddingVertical: normalize(12),
              backgroundColor: "transparent",
            }}
          >
            <UserAvatar source={require("../../assets/userItem.jpg")} size={55} />
            <View style={{ flex: 1, marginLeft: normalize(12) }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: normalize(28),
                    fontFamily: theme.fontFamily.medium,
                    color: theme.colors.black,
                    marginRight: normalize(5),
                  }}
                >
                  Work
                </Text>
                <Ionicons
                  name="chevron-down"
                  size={normalize(20)}
                  color={theme.colors.black}
                  style={{ marginLeft: normalize(2) }}
                />
              </View>
              <Text
                style={{
                  fontSize: normalize(14),
                  color: theme.colors.darkGray,
                  marginTop: normalize(2),
                  fontFamily: theme.fontFamily.regular,
                }}
              >
                Borj louzir,Ariana,
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: normalize(70),
                height: normalize(36),
                backgroundColor: theme.colors.black,
                borderRadius: normalize(18),
                overflow: "hidden",
                alignItems: "center",
                justifyContent: "space-between",
                padding: normalize(3),
              }}
            >
              <TouchableOpacity
                style={{
                  width: normalize(32),
                  height: normalize(30),
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: normalize(15),
                  backgroundColor: isDelivery ? theme.colors.white : "transparent",
                }}
                onPress={() => setIsDelivery(true)}
              >
                <Ionicons
                  name="bicycle"
                  size={normalize(18)}
                  color={isDelivery ? theme.colors.black : theme.colors.white}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: normalize(32),
                  height: normalize(30),
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: normalize(15),
                  backgroundColor: !isDelivery ? theme.colors.white : "transparent",
                }}
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: theme.colors.white,
              borderRadius: normalize(30),
              marginHorizontal: normalize(16),
              marginVertical: normalize(10),
              paddingHorizontal: normalize(20),
              paddingVertical: normalize(12),
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 6 },
              shadowOpacity: 0.2,
              shadowRadius: 10,
              elevation: 10,
            }}
          >
            <Ionicons
              name="search"
              size={normalize(20)}
              color={theme.colors.midGray}
              style={{ marginRight: normalize(12) }}
            />
            <TextInput
              style={{ flex: 1, fontSize: normalize(16), color: theme.colors.black }}
              placeholder="Search your favourite food"
              placeholderTextColor={theme.colors.midGray}
            />
            <Ionicons
              name="options"
              size={normalize(20)}
              color={theme.colors.midGray}
              style={{ marginLeft: normalize(12) }}
            />
          </View>
        </SafeAreaView>
      </LinearGradient>

      {renderSelectedCategoryLabels()}

      <FlashList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: normalize(16),
          paddingVertical: normalize(10),
        }}
        estimatedItemSize={normalize(85)}
      />

      {error ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: normalize(16), color: "#24AF7E" }}>{error}</Text>
          <TouchableOpacity onPress={onRefresh} style={{ marginTop: normalize(10) }}>
            <Text style={{ color: "#24AF7E" }}>Retry</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlashList
          data={filteredRestaurants}
          renderItem={renderRestaurant}
          keyExtractor={(item) => item.id}
          onEndReached={loadMore}
          onEndReachedThreshold={0.3}
          ListFooterComponent={renderFooter}
          ListEmptyComponent={renderEmpty}
          refreshing={refreshing}
          onRefresh={onRefresh}
          contentContainerStyle={{
            paddingHorizontal: normalize(16),
            paddingTop: normalize(10),
            paddingBottom: normalize(20),
          }}
          estimatedItemSize={normalize(280)}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};