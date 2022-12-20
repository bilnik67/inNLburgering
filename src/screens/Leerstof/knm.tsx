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


  const moveLogo = useRef(new Animated.ValueXY({ x: + 200, y: + 200 })).current;
    const moveText = useRef(new Animated.ValueXY({ x:  -300, y:  -300 })).current;
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const visibleAnim = useRef(new Animated.Value(0)).current;

   
        
    const  animatedStyle = {
        opacity: fadeAnim
    }

    
        Animated.timing(
           
            fadeAnim, 
            {
            
            toValue: 1,
            delay: 1000,
            duration: 1000,
            useNativeDriver: true,
        }).start();
      

    function timeout(delay: number) {
        return new Promise( res => setTimeout(res, delay) );
    }

    useEffect(()=>{

        setTimeout(() => {

            Animated.sequence([
                Animated.timing(
                    moveLogo,
                    {
                        toValue: -Dimensions.get('window').height + 720,
                        useNativeDriver: true
                    }
                )
            ])
            .start(); 
        }, 1000);
    }, [])
    useEffect(()=>{

        setTimeout(() => {

            Animated.sequence([
                Animated.timing(
                    moveText,
                    {
                        toValue: -Dimensions.get('window').height + 600,
                        useNativeDriver: true
                    }
                )
            ])
            .start(); 
        }, 750);
    }, [])



  return (
    
    <Layout>
      <TopNav
        middleContent="knm"
        
        
  
        
      />
      <View style={styles.container}>
       
      <Animated.View style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: backGColorDarkBlue,        
            
        }}>
            <Animated.View style={{
                display: 'flex', 

                justifyContent: "center",
                alignItems: "center",
                flexDirection: 'row',
                
            }}>
            
                <Animated.Image source={animLogo} style={{
                     
                    width:380,
                    height:380,
                    
                    transform: [
                        
                        { translateY: moveLogo.y },
                    ]
                }}></Animated.Image>
                {/*<Text style={{
                    fontSize: 40,
                    fontWeight: 'bold',
                    color: 'white',
                }}>
                    Welcome,
            </Text> */}
            </Animated.View>
            
                <Animated.Text  style={{
                    opacity: fadeAnim,
                    
                    
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    fontSize: 20,
                    color: 'white',
                    transform: [
                        
                        { translateY: moveText.y },
                    ]
                    
                }}>
                   {/*inNLburgeren is een concept ontwikkeld door een groep eerste jaars ICT-studenten van Fontys. Het streven van inNLburgeren is oefenmateriaal/cursussen bieden aan inburgeraars in Nederland. Een complicatie waar inburgeraars tegenaan lopen is dat er online geen (gratis) oefenmateriaal beschikbaar is. inNLburgeren biedt hierbij een oplossing, alle leerstof is gratis en overal te oefenen. inNLburgeren heeft een website, desktopapp en mobiele app zodat U overal makkelijk de lesstof kan oefenen en begrijpen. Maak een account aan en krijg toegang tot de oefenopdrachten en uw eigen leerproces.*/}
                   inNLburgeren is a concept developed by a group of first-year ICT students from Fontys. The aim of inNLburgeren is to offer practice material/courses to people integrating in the Netherlands. A complication encountered by people integrating is that there is no (free) practice material available online. inNLburgeren offers a solution for this, all learning material is free and can be practiced anywhere. inNLburgeren has a website, desktop app and mobile app so that you can easily practice and understand the lesson material anywhere. Create an account to get started!
                   </Animated.Text>
                   <View style={{
                   
                    justifyContent: "center",
                    alignItems: "center",
                   }}>
                    <Animated.View style={{
                    opacity: fadeAnim,
                    }}>
                <TouchableOpacity style={{
                    
                    marginTop: -Dimensions.get('window').height * 0.07,
                    width: 300,
                    height: 60,
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 6,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: backGColororange,
                
                    transform: [
                        {translateY: -Dimensions.get('window').height + 680}
                    ]
                    
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
                </Animated.View>
                </View>
            </Animated.View>

            </View>
      
    
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
