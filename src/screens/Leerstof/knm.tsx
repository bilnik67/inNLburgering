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
        middleContent="knm"
        
        
  
        
      />
      <View style={styles.container}>
       
      <View style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: backGColorDarkBlue,        
            
        }}>
            <View style={{
                
                
            }}>
            
            <Image source={animLogo} style={{
                     
                     width: Dimensions.get('screen').width * 1,
                     height: Dimensions.get('screen').height * 0.1,
                     marginTop: '15%',
                     marginBottom: "10%",
                     
                 }}></Image>
                 {/*<Text style={{
                     fontSize: 40,
                     fontWeight: 'bold',
                     color: 'white',
                 }}>
                     Welcome,
             </Text> */}
             </View>
             
                 <Text  style={{
                
                     
                     textAlign: "center",
                     fontSize: Dimensions.get('screen').width * 0.05,
                     color: 'white',
                     marginBottom: "20%",
                     marginLeft: "1%",  
                     marginRight: "1%",
                     
                 }}>
                    
                    Knm stands for "Kennis van de Nederlandse Maatschappij", it is a section of the dutch intergration exam. In this section you would need to have knowledge of the Dutch History, culture and traditions. In this exercise you can practise and learn about these subjects. Please press "Start exercise" to start learning about knm.
                    </Text>
                    <View style={{
                    
                     justifyContent: "center",
                     alignItems: "center",
                    }}>
                     <View style={{
                             }}>
                <TouchableOpacity style={{
                    
                    marginTop: -Dimensions.get('window').height * 0.07,
                    width: Dimensions.get('screen').width * 0.85,
                    height: Dimensions.get('screen').height * 0.08,
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 6,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: backGColororange,
                
                    
                    
                }}onPress={() => {
                    navigation.navigate("knmoef");
                  }}>
                    
                    <Text style={{
                        color: 'white',
                        fontSize: 22,
                        fontWeight: '900',
                        
                        
                        
                    }}>
                        Start exercise
                    </Text>
                </TouchableOpacity>
                </View>
                </View>
            </View>

            </View>
      
    
    </Layout>
    
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: backGColorDarkBlue,
  },
  
  
})
