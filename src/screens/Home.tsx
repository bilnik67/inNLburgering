import React from "react";
import { View, Linking, Dimensions } from "react-native";
import { MainStackParamList } from "../types/navigation";
import { getAuth, signOut } from "firebase/auth";
import { Platform, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
} from "react-native";
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        width: 100,
        height: 120
                
      },
      android: {
        width: 120,
        height: 120
                
      },
      default: {
        width: 120,
        height: 120
                
      }
    })
  }
})

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {
  const { isDarkmode, setTheme } = useTheme();
  const auth = getAuth();
  return (
    <Layout>
      <TopNav
        middleContent="Home"
        
          
      />
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          flexWrap: "wrap",
          marginLeft: 10,
          marginRight: 10,
          
        }}
      >
        
        <Section style={{ marginTop: 20 }} > 
        <Image
              resizeMode="contain"
              style={{
                height: 100,
                width: 180,
                
              }}
              source={require("../../assets/images/schrijven.png")}
            />  
          <SectionContent>
            
        

            <Button
              width={140}
            
              text="Begin met leren!"
              onPress={() => {
                navigation.navigate("SecondScreen");
              }}
              
              style={{
                height: 120,
                
                marginTop: 10,
              }}
              >
              <Text fontWeight="bold" style={{ textAlign: "center" }}>
              KNM
            </Text>
            


              </Button>
            
            
          </SectionContent>
        </Section>
      
      
        <Section style={{ marginTop: 20 }} > 
          
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
              Schrijven
            </Text>
            
            <Button
              width={140}
              text="Begin met leren!"
              onPress={() => {
                navigation.navigate("SecondScreen");
              }}
              style={{
                height: 120,
                marginTop: 10,
              }}
            />
            
          </SectionContent>
        </Section>
        <Section style={{ marginTop: 20 }} > 
          
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
              Lezen
            </Text>
           
            <Button
              width={140}
              text="Begin met leren!"
              onPress={() => {
                navigation.navigate("SecondScreen");
              }}
              style={{
                height: 120,
                marginTop: 10,
              }}
            />
            
          </SectionContent>
        </Section>
      
        <Section style={{ marginTop: 20 }} > 
          
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
              Luisteren
            </Text>
           
            <Button
              width={140}
              text="Begin met leren!"
              onPress={() => {
                navigation.navigate("SecondScreen");
              }}
              style={{
                height: 120,
                marginTop: 10,
              }}
            />
            
          </SectionContent>
        </Section>
      
        <Section style={{ marginTop: 20 }} > 
          
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
              Spreken
            </Text>
           
            <Button
              width={140}
              text="Begin met leren!"
              onPress={() => {
                navigation.navigate("SecondScreen");
              }}
              style={{
                height: 120,
                marginTop: 10,
              }}
            />
            
          </SectionContent>
        </Section>
      
        <Section style={{ marginTop: 20 }} > 
          
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
              Toets
            </Text>
           
            <Button
              width={140}
              text="Begin met leren!"
              onPress={() => {
                navigation.navigate("SecondScreen");
              }}
              style={{
                height: 120,
                marginTop: 10,
              }}
            />
            
          </SectionContent>
        </Section>
      
      </View>
    </Layout>
  );
}
