import { StyleSheet, ImageStyle, TextStyle, ViewStyle, Dimensions } from "react-native";
import normalize from "../hooks/useNormalize";
import { theme } from "./theme";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  // General container styles
  mainContainer: {
    flex: 1,
  } as ViewStyle,

  // HeaderComponent styles
  gradientBackground: {
    width: "100%",
  } as ViewStyle,

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(12),
    backgroundColor: "transparent",
  } as ViewStyle,

  headerTextContainer: {
    flex: 1,
    marginLeft: normalize(12),
  } as ViewStyle,

  headerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,

  headerTitle: {
    fontSize: normalize(28),
    fontFamily: theme.fontFamily.medium,
    color: theme.colors.black,
    marginRight: normalize(5),
  } as TextStyle,

  headerSubtitle: {
    fontSize: normalize(14),
    color: theme.colors.darkGray,
    marginTop: normalize(2),
    fontFamily: theme.fontFamily.regular,
  } as TextStyle,

  toggleContainer: {
    flexDirection: "row",
    width: normalize(70),
    height: normalize(36),
    backgroundColor: theme.colors.black,
    borderRadius: normalize(18),
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "space-between",
    padding: normalize(3),
  } as ViewStyle,

  toggleButton: {
    width: normalize(32),
    height: normalize(30),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: normalize(15),
  } as ViewStyle,

  toggleButtonActive: {
    backgroundColor: theme.colors.white,
  } as ViewStyle,

  toggleButtonInactive: {
    backgroundColor: "transparent",
  } as ViewStyle,

  // SearchBarComponent styles
  searchGradient: {
    width: "100%",
  } as ViewStyle,

  searchSpacer: {
    height: normalize(20),
  } as ViewStyle,

  searchContainer: {
    paddingHorizontal: normalize(16),
    paddingBottom: normalize(10),
  } as ViewStyle,

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.white,
    borderRadius: normalize(30),
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(12),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  } as ViewStyle,

  searchIcon: {
    marginRight: normalize(12),
  } as ViewStyle,

  searchInput: {
    flex: 1,
    fontSize: normalize(16),
    color: theme.colors.black,
  } as TextStyle,

  filterIcon: {
    marginLeft: normalize(12),
  } as ViewStyle,

  // RestaurantListComponent styles - Selected Category Labels
  selectedCategoryContainer: {
    paddingHorizontal: normalize(16),
    paddingTop: normalize(10),
    flexDirection: "row",
    flexWrap: "wrap",
    gap: normalize(8),
  } as ViewStyle,

  selectedCategoryLabel: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.accentGreen,
    paddingVertical: normalize(6),
    paddingHorizontal: normalize(12),
    borderRadius: normalize(20),
  } as ViewStyle,

  selectedCategoryText: {
    color: theme.colors.white,
    fontSize: normalize(14),
    fontWeight: "500",
    marginRight: normalize(8),
  } as TextStyle,

  // Category list styles
  categoryContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: normalize(10),
    marginRight: normalize(16),
    width: normalize(85),
  } as ViewStyle,

  categoryImage: {
    width: normalize(60),
    height: normalize(60),
    marginBottom: normalize(6),
    borderRadius: normalize(5),
  } as ImageStyle,

  categoryImagePromo: {
    borderRadius: 0,
  } as ImageStyle,

  categoryText: {
    fontSize: normalize(14),
    fontWeight: "500",
    fontFamily: theme.fontFamily.medium,
    color: theme.colors.black,
  } as TextStyle,

  categoryTextSelected: {
    color: theme.colors.lightGreen,
  } as TextStyle,

  categoryListContent: {
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(10),
  } as ViewStyle,

  // Restaurant list styles
  restaurantListContent: {
    paddingHorizontal: normalize(16),
    paddingTop: normalize(10),
  } as ViewStyle,

  restaurantCard: {
    backgroundColor: theme.colors.white,
    borderRadius: normalize(20),
    marginBottom: normalize(16),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  } as ViewStyle,

  restaurantImage: {
    width: "100%",
    height: normalize(180),
    resizeMode: "cover",
    borderTopLeftRadius: normalize(20),
    borderTopRightRadius: normalize(20),
  } as ImageStyle,

  heartIconContainer: {
    position: "absolute",
    top: normalize(16),
    right: normalize(16),
    width: normalize(32),
    height: normalize(32),
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,

  offerBadge: {
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
  } as ViewStyle,

  offerIcon: {
    backgroundColor: theme.colors.accentGreen,
    borderRadius: normalize(12),
    width: normalize(20),
    height: normalize(20),
    justifyContent: "center",
    alignItems: "center",
    marginRight: normalize(6),
  } as ViewStyle,

  offerText: {
    color: "#000000",
    fontSize: normalize(12),
    fontWeight: "600",
  } as TextStyle,

  restaurantInfo: {
    padding: normalize(16),
  } as ViewStyle,

  restaurantName: {
    fontSize: normalize(22),
    fontWeight: "700",
    color: "#000000",
    marginBottom: normalize(8),
  } as TextStyle,

  restaurantDetails: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,

  restaurantDistance: {
    fontSize: normalize(14),
    color: theme.colors.mutedGray,
    marginLeft: normalize(8),
    fontWeight: "500",
  } as TextStyle,

  ratingContainer: {
    position: "absolute",
    bottom: normalize(32),
    right: normalize(16),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.gradientLight,
    borderRadius: normalize(30),
    paddingHorizontal: normalize(14),
    paddingVertical: normalize(6),
    borderWidth: 1,
    borderColor: theme.colors.borderGreen,
  } as ViewStyle,

  ratingText: {
    fontSize: normalize(16),
    fontWeight: "bold",
    color: "#000000",
    marginRight: normalize(4),
  } as TextStyle,

  // Footer and empty states
  footerContainer: {
    paddingVertical: normalize(20),
    alignItems: "center",
  } as ViewStyle,

  footerText: {
    fontSize: normalize(16),
    color: theme.colors.accentGreen,
  } as TextStyle,

  emptyContainer: {
    padding: normalize(20),
    alignItems: "center",
  } as ViewStyle,

  emptyText: {
    fontSize: normalize(16),
    color: theme.colors.accentGreen,
  } as TextStyle,

  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,

  errorText: {
    fontSize: normalize(16),
    color: theme.colors.accentGreen,
  } as TextStyle,

  retryText: {
    color: theme.colors.accentGreen,
    marginTop: normalize(10),
  } as TextStyle,
});