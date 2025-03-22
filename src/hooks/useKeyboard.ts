import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

/**
 * Hook that listens to the keyboard events and returns the keyboard visibility state and a function to dismiss the keyboard.
 */
export const useKeyboard = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return { keyboardVisible, dismissKeyboard };
};