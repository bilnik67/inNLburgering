import React from "react";
import { View, StyleSheet } from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Layout,
  TopNav,
  Text,
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
}: NativeStackScreenProps<MainStackParamList, "knm">) {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <View style={styles.container}>
    <Layout>
      <TopNav
        middleContent="knm"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        leftAction={() => navigation.goBack()}
        
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* This text using ubuntu font */}
        <Text fontWeight="bold">TODO</Text>
      </View>
    </Layout>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: backGColorDarkBlue,
  }
})
