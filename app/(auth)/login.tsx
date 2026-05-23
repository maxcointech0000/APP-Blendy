import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "@/styles/auth.styles";
import { Image } from "react-native";
 import { useSSO } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import { COLORS } from "@/constants/theme";



export default function login() {

  const {startSSOFlow} = useSSO()
  const router = useRouter();

const handleGoogleSignIn = async () => {
    try{
   const {createdSessionId,setActive}=await startSSOFlow({strategy:"oauth_google"})

    if (setActive && createdSessionId){
      setActive({session:createdSessionId})
     router.replace("/(tabs)")
    }
    } catch (error) {
    console.error("OAuth error:",error);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
        const { createdSessionId, setActive } = await startSSOFlow({ strategy: "oauth_facebook" });

        if (setActive && createdSessionId) {
            setActive({ session: createdSessionId });
            router.replace("/(tabs)");
        }
    } catch (error) {
        console.error("Facebook OAuth error:", error);
    }
};
    
  return (
    <View style={styles.container} >
      
      
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
        <Image source={require('../../assets/images/blendy.png')} style={{ width: 68, height: 68,bottom:25,marginLeft:12,borderRadius:20,}} />
        </View>
      <Image source={require('../../assets/images/Screenshot 2025-03-12 141012.png')} style={{ width: 260, height: 60,bottom:20, }} />
      <Text style={[styles.appName,{ fontSize:33,color:COLORS.primary,bottom:18, }]}>Socializing Feels Natural</Text>
      </View>

     
      <View style={styles.illustrationContainer}>
        <Image source={require("../../assets/images/blendy..png")}
        style={styles.illustration}
        resizeMode='cover' />
      </View>

      
      <View style={styles.loginSection}>
    {/* Google Button */}
    <TouchableOpacity 
        style={styles.googleButton}
        onPress={handleGoogleSignIn}
        activeOpacity={0.9}
    >
        <View style={styles.googleIconContainer}>
        <Image source={require('../../assets/images/google.png')} style={{ width: 31, height: 31 }} /> 
        </View>
        <Text style={styles.googleButtonText}> Continue With Google</Text>
    </TouchableOpacity>
    {/* OR Text with lines */}
    <Text style={styles.orText}>━ Or ━</Text>

    {/* Facebook Button */}
    <TouchableOpacity 
        style={[styles.googleButton]} // Reuse style with Facebook-specific tweaks
        onPress={handleFacebookSignIn}
        activeOpacity={0.9}
    >
        <View style={styles.googleIconContainer}>
        <Image source={require('../../assets/images/facebook.png')} style={{ width: 35, height: 35 }} />
        </View>
        <Text style={styles.googleButtonText}> Continue With Facebook</Text>
    </TouchableOpacity>

    <Text style={styles.termsText}>
        By continuing, you agree to our Terms and Privacy Policy.
    </Text>
</View>

    </View>
  );
}