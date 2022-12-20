import { Animated, StyleSheet, Dimensions, Image, TouchableOpacity, View } from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Layout,
  TopNav,
  Text,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import React, {useEffect, useRef, useState} from 'react';
import animLogo from '../../../assets/images/inNLburgeringlogotransp.png';
import { Ionicons } from "@expo/vector-icons";

const backGColorblue = "#3366ff"
const backGColororange = "#ff7200"
const backGBlack = "#2b2b2b"
const backGColorDarkBlue = "#002db3"

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "knm">) {
  const { isDarkmode, setTheme } = useTheme();

  return (
    
    <Layout>
      <TopNav
        middleContent="luisteren"
        leftContent={
          <Ionicons
            name="md-exit-outline"
            size={25}
            color={backGColororange}
            style={styles.icons}
          />
        }
        rightContent={
          <Ionicons
            name="close"
            size={25}
            color={backGColororange}
          />
        }
        leftAction={() => navigation.goBack()}
        rightAction={() => navigation.navigate("MainTabs")}
        
      />
      
      
    
    </Layout>
    
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: backGColorDarkBlue,
  },
  icons: {
    transform: [{rotateY: '180deg'}],
    width: "200%",
 
  
  }
  
})
