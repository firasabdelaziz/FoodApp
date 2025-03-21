import { ImageSourcePropType, TextStyle, ViewStyle } from "react-native";

export interface CustomButtonProps {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  loading?: boolean;
}

export interface CustomHeaderProps {
  title: string;
  onBack?: () => void;
}

export interface UserAvatarProps {
  source: ImageSourcePropType;
  size?: number;
  style?: ViewStyle;
}