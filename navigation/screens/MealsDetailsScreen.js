import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealsDetails from "../components/MealsDetails";
import Subtitle from "../components/Subtitle";
import List from "../components/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

function MealsDetailsScreen({ route , navigation}) {
  const mealId = route.params.mealId;
  const selectedMeals = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log("press");
    
  }

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight:()=>{
        return <IconButton onPress={headerButtonPressHandler} color="white" name="star" style={styles.marginRight}/>
      }
    })
  },[])

  return (
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={{ uri: selectedMeals.imageUrl }} />
      <Text style={styles.title}>{selectedMeals.title}</Text>
      <MealsDetails
        duration={selectedMeals.duration}
        complexity={selectedMeals.complexity}
        affordability={selectedMeals.affordability}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredient</Subtitle>
          <List data={selectedMeals.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeals.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  root:{
    marginBottom: 12 
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    margin: 8,
  },
  listContainer:{
    width: "80%",
  },
  listOuterContainer:{
    alignItems:'center'
  }, 
  marginRight: {
    marginRight: 10,
  },
});
