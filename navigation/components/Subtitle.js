import { StyleSheet, View , Text } from "react-native";

function Subtitle({children}) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;
const styles = StyleSheet.create({
    subTitle: {
      fontWeight: "bold",
      fontSize: 18,
      textAlign: "center",
      color:'#58031D'
    },
    subTitleContainer: {
      padding: 6,
      marginHorizontal :12,
      marginVertical:8,
      borderBottomColor: "#58031D",
      borderBottomWidth: 2,
    },
  });
  
