import React from "react";
import Navigation from "./src/navigation";
import { AuthProvider } from "./src/provider/AuthProvider";
import { ThemeProvider } from "react-native-rapi-ui";
import { LogBox } from "react-native";
import SplashScreen from "./src/components/SplashScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DarkTheme } from "@react-navigation/native";
import Login from "./src/screens/auth/Login";



export default function App() {
  
 
  
  React.useEffect(() => {
    LogBox.ignoreLogs([
      "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
    ]);
  }, []);

  return (
    
   <SafeAreaProvider>
    
  
     
       <ThemeProvider theme="dark">
        
      <AuthProvider>
        
        <Navigation />
        
      </AuthProvider>
      
      </ThemeProvider>  
      
    </SafeAreaProvider>
    
  
  );
}
