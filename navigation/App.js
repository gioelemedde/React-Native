import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { createStackNavigator, StackView } from "@react-navigation/stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailsScreen from "./screens/MealsDetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#58031D" },
            headerTintColor: "#EEE5C3",
            cardStyle: { backgroundColor: "#EEE5C3" },
            gestureEnabled: true, // Abilita il gesto di scorrimento
            animationEnabled: true, // Assicurati che l'animazione sia abilitata
            transitionSpec: {
              open: { animation: 'timing', config: { duration: 300 } }, // Configura la durata dell'animazione
              close: { animation: 'timing', config: { duration: 300 } },
            },
            cardStyleInterpolator: ({ current, layouts }) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [layouts.screen.width, 0], // Entrata da sinistra
                      }),
                    },
                  ],
                },
                overlayStyle: {
                  opacity: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                },
              };
            },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}  options={{
              headerBackTitle: "Back", // Modificato per mostrare "back"
              headerBackTitleVisible: false, // ci permette di decidere se vedere o no il testo del pulsante
            }}  />
             <Stack.Screen name="MealsDetail" component={MealsDetailsScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
