import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const BottomTab = createBottomTabNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#3c0a6b" },
            headerTintColor: "white",
            tabBarActiveTintColor:"#3c0a6b"
          }}
        >
          <BottomTab.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              tabBarIcon:({color, size}) =>(
                <Ionicons name="home" color={color} size={size}/>
              )
            }}
          />
          <BottomTab.Screen
            name="UserScreen"
            component={UserScreen}
            options={{
              tabBarIcon:({color, size}) =>(
                <Ionicons name="person" color={color} size={size}/>
              )
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
}
