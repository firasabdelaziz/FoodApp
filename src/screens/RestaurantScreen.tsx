import React, { useEffect, useState, useCallback } from "react";
import { View, Animated } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { fetchRestaurants, resetRestaurants } from "../store/restaurantSlice";
import { RestaurantScreenProps } from "../types/navigation";
import { styles } from "../styles/restaurant.styles";
import { HeaderComponent } from "../components/restaurant/HeaderComponent"; 
import { SearchBarComponent } from "../components/restaurant/SearchBarComponent"; 
import { RestaurantListComponent } from "../components/restaurant/RestaurantListComponent"; 
import normalize from "../hooks/useNormalize";

/**
 * @component RestaurantScreen
 * @description The main screen component for a food delivery app that displays a list of restaurants.
 *
 * @param {RestaurantScreenProps} props - The navigation props.
 * @returns {JSX.Element} - The rendered restaurant screen component.
 */
export const RestaurantScreen: React.FC<RestaurantScreenProps> = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const { restaurants, loading, error, page, hasMore } = useSelector(
    (state: RootState) => state.restaurant
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isDelivery, setIsDelivery] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState(false);
  const scrollY = new Animated.Value(0);

  // Fetch initial restaurants on mount
  useEffect(() => {
    console.log("Component mounted, fetching page 1");
    dispatch(fetchRestaurants(1));
  }, [dispatch]);

  // Load more restaurants when reaching the end
  const loadMore = useCallback(() => {
    if (!loading && hasMore && page > 1) {
      console.log("Loading more, current page:", page);
      dispatch(fetchRestaurants(page));
    }
  }, [dispatch, loading, hasMore, page]);

  // Refresh the restaurant list
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    console.log("Refreshing data");
    dispatch(resetRestaurants());
    dispatch(fetchRestaurants(1)).finally(() => setRefreshing(false));
  }, [dispatch]);

  // Define categories
  const categories = [
    { name: "Promo", icon: require("../../assets/category/promo.webp"), isIcon: false },
    { name: "Sandwich", icon: require("../../assets/category/sandwich.webp"), isIcon: false },
    { name: "Burgers", icon: require("../../assets/category/burger.webp"), isIcon: false },
    { name: "Pasta", icon: require("../../assets/category/pasta.webp"), isIcon: false },
    { name: "Beverages", icon: require("../../assets/category/beverage.webp"), isIcon: false },
  ];

  // Filter restaurants based on selected categories
  const filteredRestaurants = selectedCategories.length > 0
    ? restaurants.filter((restaurant) =>
        restaurant.restaurant_specialities?.some((speciality) =>
          selectedCategories.includes(speciality.category)
        )
      )
    : restaurants;

  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Animated.ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: normalize(20) }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        stickyHeaderIndices={[1]}
      >
        <HeaderComponent
          isDelivery={isDelivery}
          setIsDelivery={setIsDelivery}
        />
        <SearchBarComponent />
        <RestaurantListComponent
          categories={categories}
          selectedCategories={selectedCategories}
          toggleCategory={toggleCategory}
          filteredRestaurants={filteredRestaurants}
          loading={loading}
          hasMore={hasMore}
          error={error}
          refreshing={refreshing}
          onRefresh={onRefresh}
          loadMore={loadMore}
        />
      </Animated.ScrollView>
    </View>
  );
};