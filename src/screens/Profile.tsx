import React from "react";
import { View, Linking, StyleSheet, Image, Text, TouchableNativeFeedbackComponent, TouchableOpacity, TextInput } from "react-native";
import { MainStackParamList } from "../types/navigation";
import { getAuth, signOut } from "firebase/auth";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Layout,
  Button,
  TopNav,
  Section,
  SectionContent,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import { jsonEval } from "@firebase/util";

const backGColorblue = "#3366ff"
const backGColororange = "#ff7200"
const backGBlack = "#2b2b2b"
const backGColorDarkBlue = "#002db3"
const secondwhite = "#fff"

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {
 
  const auth = getAuth();
  return (
    <View style={styles.container}>
    <View style={styles.top}>
      
      
      <Image style={styles.profileimage}
          source={require("../../assets/images/elon.jpg")}
        /> 
      <Text style={styles.centertext}>Elon Musk</Text>
    </View>
    <View style={styles.center}>
      
    </View>

    <View style={styles.bottom}>

     

      <View style={styles.bottomItem}>
          <View style={styles.bottomItemInner}>
          <View style={styles.column}>
              
            
              <Image 
                    style={styles.images}
                    source={require("../../assets/images/Icons/email.png")}
                  />  
                
                <TextInput style={styles.textinput}>
                   test
                </TextInput>
              </View>
              <View style={styles.column}>
              
            
            <Image 

                  style={styles.images}
                  source={require("../../assets/images/Icons/user.png")}
                />  
              
              <TextInput style={styles.textinput} placeholder={"test2"}>
                 test
              </TextInput>
            </View>
            <View style={styles.column}>
              
            
            <Image 
                  style={styles.images}
                  source={require("../../assets/images/Icons/lock.png")}
                />  
              
              <TextInput style={styles.textinput}>
                 test
              </TextInput>
            </View>
          <Button
              status="danger"
              text="Logout"
              onPress={() => {
                signOut(auth);
              }}
              style={{
                
              }}
            />  
          </View>
      </View>
      

      

    </View>
    
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
},
top: {
  height: '45%',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: backGColorDarkBlue,
},
profileimage: {
  width: 140,
  height: 140,
  borderRadius: 100,
  borderWidth: 4,
  borderColor: '#fff',
  backgroundColor: '#eee',
},
center: {
  height: '10%',
  backgroundColor: backGColorblue,

 
},
centertext: {
  textAlign: 'center',
  fontSize: 35,
  color: '#fff',
  fontWeight: 'bold',
},
bottom: {
  flex: 1,
  height: '45%',
  backgroundColor: '#fff',
  
  flexDirection: 'row',
  flexWrap: 'wrap',
  padding: 5,
},
bottomItem: {
  width: '100%',
  height: '100%',
  padding: 5,
},
column: {
  display: "flex",
  flexDirection: 'row',
  gap: 10,
  marginBottom: 30,
  
  
},
textinput: {
  flex: 1,
  paddingVertical: 10,
  fontFamily: "Ubuntu_400Regular",
  backgroundColor: "#2f2f2f",       
  color: "#fff", 
  borderRadius: 10,
  marginLeft: 15,
  paddingLeft: 12,

},
images: {
 width: "12%",
 height: "100%",
 borderRadius: 10,
 backgroundColor: "#fff",
},
bottomItemInner: {
  flex: 1,
  backgroundColor: secondwhite,
  borderRadius: 10,
  justifyContent: 'flex-end',
},
downbottom: {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
},
logoutbutton: {
  backgroundColor: backGColorDarkBlue,
  borderColor: backGColorDarkBlue,
  marginBottom: '10%',
}
});