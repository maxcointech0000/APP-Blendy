
import InitialLayout from "@/components/InitialLayout";
import ClerkAndConvexProvider from "@/providers/ClerkAndConvexProvider";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as NavigationBar from "expo-navigation-bar";
import { Platform } from "react-native";
import { useEffect } from "react";



export default function RootLayout() {
//update the native navigation bar on android
  useEffect(() => {
    if (Platform.OS === "android") {
      NavigationBar.setBackgroundColorAsync("#000000");
      NavigationBar.setButtonStyleAsync("light");
    }
  },[]);

  return (
   
     <ClerkAndConvexProvider>
     <SafeAreaProvider>
     <SafeAreaView style={{flex:1, backgroundColor:"black",}}>
     <StatusBar backgroundColor="black" style="light" />
        <InitialLayout />
     </SafeAreaView>
    </SafeAreaProvider>
    </ClerkAndConvexProvider>
  
  );
}
