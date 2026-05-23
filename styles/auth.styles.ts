// styles/auth.styles.ts
import { COLORS } from "@/constants/theme";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    color:COLORS.white,
  },
  brandSection: {
    alignItems: "center",
    marginTop: height * 0.12,
  },
  logoContainer: {
    width: 55,
    height: 55,
    borderRadius: 18,
    backgroundColor: "rgba(6, 14, 6, 0)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },
  appName: {
    fontSize: 42,
    fontWeight: "700",
    fontFamily: "JetBrainsMono-Medium",
    color: COLORS.primary,
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  
  tagline: {
    fontSize: 16,
    color: COLORS.grey,
    letterSpacing: 1,
    textTransform: "lowercase",
  },
  illustrationContainer: {
    marginTop: -80, // Adjust as needed
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  illustration: {
    width: width * 0.75,
    height: width * 0.75,
    
  },
  loginSection: {
    width: "100%",
    paddingHorizontal: 24,
    paddingBottom: 40,
    alignItems: "center",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(226, 237, 226, 0.98)", // Dark Green
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 14,
    marginBottom: 20,
    width: "100%",
    maxWidth: 300,
    shadowColor: "rgba(144, 238, 144, 1)", // Light Green glow
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 10,
    borderWidth: 3,
    borderColor: "rgb(144, 238, 144)", // Glow border
},

googleButtonText: {
    color: "rgb(144, 238, 144)", // Light Green text
    fontSize: 15,
    fontWeight: "bold",
    textShadowColor: "rgba(144, 238, 144, 0.8)", // Light Green shadow
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
},

googleButtonPressed: {
    backgroundColor: "rgb(144, 238, 144)", // Light Green background
    borderColor: "rgb(34, 139, 34)", // Dark Green border
    shadowColor: "rgba(124, 252, 124, 1)", // Medium Green glow
},

  googleIconContainer: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.surface,
  },
  orText: {
    marginTop:-13,
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    marginVertical: 10,
    textAlign: "center",
    letterSpacing: 2, // Adds spacing between characters
},
  termsText: {
    textAlign: "center",
    fontSize: 12,
    color: COLORS.grey,
    maxWidth: 280,
  },
});