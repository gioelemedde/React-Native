import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#3c0a6b" },
            headerTintColor: "white",
            drawerActiveBackgroundColor: "#E3D0F6",
            drawerActiveTintColor: "#3c0a6b",
            drawerStyle: {
              backgroundColor: "#F4F3F3",
            },
          }}
        >
          <Drawer.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              drawerLabel: "Welcome Screen",
              drawerIcon: ({ color, size }) => (
                <Ionicons color={color} size={size} name="home" />
              ),
            }}
          />
          <Drawer.Screen
            name="UserScreen"
            component={UserScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons color={color} size={size} name="person" />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
