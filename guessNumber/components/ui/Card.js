import { View, StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    marginTop: 36,
    backgroundColor: colors.primary800,
    borderRadius: 10,
    marginHorizontal: deviceWidth < 380 ? 18 : 36,
    elevation: 4, // Per Android
    shadowColor: "black", // Per iOS
    shadowOffset: { width: 0, height: 2 }, // Per iOS
    shadowRadius: 6, // Per iOS
    shadowOpacity: 0.25, // Per iOS
  },

}); 
