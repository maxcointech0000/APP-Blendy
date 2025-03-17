import { useAuth } from "@clerk/clerk-expo";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";



export default function InitialLayout() {
    const {isLoaded,isSignedIn} = useAuth()

    const segments = useSegments();
    const router = useRouter();
  
    useEffect(() => {
      console.log("🔹 Checking Authentication State");
      console.log("➡️ isLoaded:", isLoaded);
      console.log("➡️ isSignedIn:", isSignedIn);
      
      const checkSession = async () => {
          const { getToken } = useAuth();
          const token = await getToken();
          console.log("➡️ Clerk Session Token:", token);
      };
  
      checkSession();
  
      if (!isLoaded) return;
  
      const inAuthScreen = segments[0] === "(auth)";
  
      if (!isSignedIn && !inAuthScreen) {
          console.log("❌ User not signed in → Redirecting to Login");
          router.replace("/(auth)/login");
      } else if (isSignedIn && inAuthScreen) {
          console.log("✅ User signed in → Redirecting to Tabs");
          router.replace("/(tabs)");
      }
  }, [isLoaded, isSignedIn, segments]);
  
  return <Stack screenOptions={{headerShown:false}} />

}
