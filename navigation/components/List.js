import { StyleSheet, Text, View } from "react-native";

function List({data}) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemtext}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
    listItem:{
        borderRadius:6,
        paddingHorizontal:8, 
        paddingVertical: 4,
        marginVertical: 4, 
        marginHorizontal: 12, 
        backgroundColor: "#58031D"
    },
    itemtext:{
        color: "#EEE5C3",
        textAlign:"center"
    }
    
})
