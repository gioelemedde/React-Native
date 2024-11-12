import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ onPress, name, color, style }) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => [pressed && style.pressed, style]}>
      <Ionicons name={name} size={22} color={color} />
    </Pressable>
  );
}

export default IconButton;

const style = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
