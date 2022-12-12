import React from "react";
import { View, Linking, StyleSheet } from "react-native";
import { MainStackParamList } from "../types/navigation";
import { getAuth, signOut } from "firebase/auth";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Layout,
  Button,
  Text,
  TopNav,
  Section,
  SectionContent,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

const backGColorblue = "#3366ff"
const backGColororange = "#ff7200"
const backGBlack = "#2b2b2b"
const backGColorDarkBlue = "#002db3"

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {
 
  const auth = getAuth();
  return (
      <Layout>
      
      <TopNav
        
        middleContent="Profile"
        
          
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Section style={{ marginTop: 20 }}>
          <SectionContent>
            
            <Button
              style={{ marginTop: 10 }}
              text="inNLburgering website"
              status="info"
              onPress={() => Linking.openURL("https://easycation.fun/")}
            />
            <Button
              text="Begin met leren!"
              onPress={() => {
                navigation.navigate("SecondScreen");
              }}
              style={{
                marginTop: 10,
              }}
            />
            <Button
              status="danger"
              text="Logout"
              onPress={() => {
                signOut(auth);
              }}
              style={{
                marginTop: 10,
              }}
            />
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
}
