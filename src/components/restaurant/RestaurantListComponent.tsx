import React, { useCallback } from "react";
import { View, TouchableOpacity, Text, Image as RNImage, ActivityIndicator } from "react-native";
import { FlashList } from "@shopify/flash-list";
import Ionicons from "react-native-vector-icons/Ionicons";
import { styles } from "../../styles/restaurant.styles"; 
import normalize from "../../hooks/useNormalize"; 
import { theme } from '../../styles/theme'; 
import { Restaurant } from "../../types/restaurant.types"; 

interface RestaurantListComponentProps {
  categories: { name: string; icon: any; isIcon: boolean }[];
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
  filteredRestaurants: Restaurant[];
  loading: boolean;
  hasMore: boolean;
  error: string | null;
  refreshing: boolean;
  onRefresh: () => void;
  loadMore: () => void;
}

/**
 * @component RestaurantListComponent
 * @description Displays a list of restaurant categories and filtered restaurants with interactive elements.
 *
 * @param {Object[]} categories - The list of categories with names and icons.
 * @param {string[]} selectedCategories - The currently selected category filters.
 * @param {(category: string) => void} toggleCategory - Function to toggle a category selection.
 * @param {Restaurant[]} filteredRestaurants - The filtered list of restaurants.
 * @param {boolean} loading - Indicates if restaurant data is being fetched.
 * @param {boolean} hasMore - Indicates if more restaurants can be loaded.
 * @param {string | null} error - Error message, if any.
 * @param {boolean} refreshing - Indicates if the list is refreshing.
 * @param {() => void} onRefresh - Function to refresh the restaurant list.
 * @param {() => void} loadMore - Function to load more restaurants.
 *
 * @returns {JSX.Element} The rendered restaurant list component.
 */
export const RestaurantListComponent: React.FC<RestaurantListComponentProps> = ({
  categories,
  selectedCategories,
  toggleCategory,
  filteredRestaurants,
  loading,
  hasMore,
  error,
  refreshing,
  onRefresh,
  loadMore,
}): JSX.Element => {
  // Render a single category item
  const renderCategory = useCallback(
    ({ item }: { item: { name: string; icon: any; isIcon: boolean } }) => (
      <TouchableOpacity
        style={styles.categoryContainer}
        onPress={() => toggleCategory(item.name)}
      >
        <RNImage
          source={item.icon}
          style={[
            styles.categoryImage,
            item.name === "Promo" && styles.categoryImagePromo,
          ]}
        />
        <Text
          style={[
            styles.categoryText,
            selectedCategories.includes(item.name) && styles.categoryTextSelected,
          ]}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    ),
    [selectedCategories]
  );

  // Render selected category labels
  const renderSelectedCategoryLabels = () => {
    if (selectedCategories.length === 0) return null;
    return (
      <View style={styles.selectedCategoryContainer}>
        {selectedCategories.map((category) => (
          <TouchableOpacity
            key={category}
            style={styles.selectedCategoryLabel}
            onPress={() => toggleCategory(category)}
          >
            <Text style={styles.selectedCategoryText}>{category}</Text>
            <Ionicons
              name="close"
              size={normalize(16)}
              color={theme.colors.white}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  // Render a single restaurant item
  const renderRestaurant = useCallback(
    ({ item }: { item: Restaurant }) => (
      <TouchableOpacity style={styles.restaurantCard}>
        <RNImage
          source={{ uri: item.banner_url ?? "https://via.placeholder.com/150" }}
          style={styles.restaurantImage}
        />
        <TouchableOpacity style={styles.heartIconContainer}>
          <Ionicons name="heart-outline" size={normalize(24)} color={theme.colors.iconGreen} />
        </TouchableOpacity>
        <View style={styles.offerBadge}>
          <View style={styles.offerIcon}>
            <Text style={{ color: "#FFFFFF", fontSize: normalize(10), fontWeight: "bold" }}>
              %
            </Text>
          </View>
          <Text style={styles.offerText}>5 Available Offers</Text>
        </View>
        <View style={styles.restaurantInfo}>
          <Text style={styles.restaurantName}>
            {item.name_en || "Route 66 Ben Arous"}
          </Text>
          <View style={styles.restaurantDetails}>
            <Ionicons name="bicycle" size={normalize(16)} color={theme.colors.accentGreen} />
            <Text style={styles.restaurantDistance}>
              {item.max_delivery_distance?.toFixed(2) || "1.50"} DT |{" "}
              {item.preparation_time || "20-35 min"}
            </Text>
          </View>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>
            {item.restaurant_rating?.toFixed(1) || "4.7"}
          </Text>
          <Ionicons name="star" size={normalize(14)} color={theme.colors.iconGreen} />
        </View>
      </TouchableOpacity>
    ),
    []
  );

  // Render footer for loading or end of list
  const renderFooter = useCallback(() => {
    if (loading && hasMore) {
      return (
        <View style={styles.footerContainer}>
          <ActivityIndicator size="large" color={theme.colors.accentGreen} />
        </View>
      );
    }
    if (!hasMore && filteredRestaurants.length > 0) {
      return (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>No more restaurants</Text>
        </View>
      );
    }
    return null;
  }, [loading, hasMore, filteredRestaurants.length]);

  // Render empty state
  const renderEmpty = useCallback(() => {
    if (loading && filteredRestaurants.length === 0) {
      return (
        <View style={styles.emptyContainer}>
          <ActivityIndicator size="large" color={theme.colors.accentGreen} />
        </View>
      );
    }
    if (!loading && filteredRestaurants.length === 0) {
      return (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No restaurants found</Text>
        </View>
      );
    }
    return null;
  }, [loading, filteredRestaurants.length]);

  return (
    <>
      {renderSelectedCategoryLabels()}
      <FlashList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryListContent}
        estimatedItemSize={normalize(85)}
      />
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity onPress={onRefresh} style={styles.retryText}>
            <Text style={styles.retryText}>Retry</Text>
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
          contentContainerStyle={styles.restaurantListContent}
          estimatedItemSize={normalize(280)}
          showsVerticalScrollIndicator={false}
        />
      )}
    </>
  );
};