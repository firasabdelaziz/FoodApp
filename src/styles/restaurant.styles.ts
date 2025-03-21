import { StyleSheet, ImageStyle, TextStyle, ViewStyle, Dimensions } from "react-native";
import normalize from "../hooks/useNormalize";
import { theme } from "./theme";

const { width } = Dimensions.get('window');



export const styles = StyleSheet.create({
  gradientBackground: {
    width: '100%',
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(12),
    backgroundColor: "transparent",
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: normalize(12),
  },
  headerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: normalize(28),
    fontWeight: "bold",
    color: theme.colors.black,
    marginRight: normalize(5),
  },
  headerSubtitle: {
    fontSize: normalize(14),
    color: theme.colors.darkGray,
    marginTop: normalize(2),
  },
  headerArrow: {
    marginLeft: normalize(5),
    marginTop: normalize(3),
  },
  toggleButton: {
    borderRadius: normalize(28),
    borderWidth: 0,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  toggleButtonInner: {
    flexDirection: "row",
    width: normalize(86),
    height: normalize(46),
    backgroundColor: "white",
    borderRadius: normalize(28),
  },
  toggleButtonHalf: {
    width: normalize(43),
    height: normalize(46),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: normalize(28),
  },
  toggleButtonActive: {
    backgroundColor: theme.colors.black,
  },
  toggleButtonInactive: {
    backgroundColor: theme.colors.white,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.white,
    borderRadius: normalize(30),
    marginHorizontal: normalize(16),
    marginTop: normalize(5),
    marginBottom: normalize(15),
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(12),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  searchIcon: {
    marginRight: normalize(12),
    color: "#999",
  },
  searchInput: {
    flex: 1,
    fontSize: normalize(16),
    color: theme.colors.black,
    padding: 0,
  },
  filterIcon: {
    marginLeft: normalize(12),
    color: "#999",
  },
  categoryList: {
    paddingHorizontal: normalize(16),
    paddingTop: normalize(5),
    paddingBottom: normalize(15),
  },
  categoryContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: normalize(10),
    marginRight: normalize(16),
    width: normalize(85),
  },
  categorySelected: {
    borderBottomWidth: 2,
    borderBottomColor: "#F68E21",
  },
  categoryImage: {
    width: normalize(60),
    height: normalize(60),
    marginBottom: normalize(6),
    borderRadius: normalize(5),
  },
  categoryText: {
    fontSize: normalize(14),
    fontWeight: "500",
    color: theme.colors.black,
  },
  categoryTextSelected: {
    fontSize: normalize(14),
    fontWeight: "500",
    color: "#F68E21",
  },
  restaurantList: {
    paddingHorizontal: normalize(16),
    paddingBottom: normalize(20),
  },
  restaurantCard: {
    backgroundColor: theme.colors.white,
    borderRadius: normalize(16),
    marginBottom: normalize(16),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    overflow: "hidden",
  },
  restaurantImage: {
    width: "100%",
    height: normalize(180),
  },
  heartIconContainer: {
    position: "absolute",
    top: normalize(16),
    right: normalize(16),
    width: normalize(36),
    height: normalize(36),
    borderRadius: normalize(18),
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  offerBadge: {
    position: "absolute",
    top: normalize(160),
    left: normalize(16),
    backgroundColor: "#0EAA7E",
    borderRadius: normalize(20),
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(6),
    flexDirection: "row",
    alignItems: "center",
    zIndex: 1,
  },
  offerBadgeIcon: {
    marginRight: normalize(6),
  },
  offerText: {
    color: theme.colors.white,
    fontSize: normalize(12),
    fontWeight: "500",
  },
  restaurantInfo: {
    padding: normalize(16),
    paddingTop: normalize(24),
  },
  restaurantName: {
    fontSize: normalize(22),
    fontWeight: "bold",
    color: theme.colors.black,
    marginBottom: normalize(8),
  },
  restaurantDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  restaurantDistance: {
    fontSize: normalize(14),
    color: theme.colors.darkGray,
    marginLeft: normalize(8),
  },
  ratingContainer: {
    position: "absolute",
    top: normalize(160),
    right: normalize(16),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5F5F2",
    borderRadius: normalize(20),
    paddingHorizontal: normalize(14),
    paddingVertical: normalize(6),
    zIndex: 1,
  },
  ratingText: {
    fontSize: normalize(16),
    fontWeight: "bold",
    color: theme.colors.black,
    marginRight: normalize(6),
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: normalize(16),
    color: theme.colors.primary,
  },
});