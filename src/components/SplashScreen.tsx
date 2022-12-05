import { Animated, StyleSheet, Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import React, {useEffect, useRef, useState} from 'react';
import { useSafeAreaInsets, withSafeAreaInsets } from "react-native-safe-area-context";
import FadeInOut from 'react-native-fade-in-out';

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import animLogo from '../../assets/images/inNLburgeringlogotransp.png';
import { Button } from "react-native-rapi-ui";
import { AuthStackParamList } from "../types/navigation";


const backGColorblue = "#3366ff"
const backGColororange = "#ff7200"



export default function SplashScreen({navigation, }: NativeStackScreenProps<AuthStackParamList, "Splashscreen">) {
  
    const edges = useSafeAreaInsets();

   
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
                        toValue: -Dimensions.get('window').height + 840,
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
                        toValue: -Dimensions.get('window').height + 725,
                        useNativeDriver: true
                    }
                )
            ])
            .start(); 
        }, 750);
    }, [])
    

    return(
        
        <Animated.View style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: backGColorblue,        
            
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
                    
                    marginTop: 20,
                    width: 300,
                    height: 60,
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 6,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: backGColororange,
                    transform: [
                        {translateY: -50}
                    ]
                    
                }}onPress={() => {
                    navigation.navigate("Login");
                  }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 22,
                        fontWeight: '900',
                        
                        
                    }}>
                        Continue
                    </Text>
                </TouchableOpacity>
                </Animated.View>
                </View>
            </Animated.View>
            
       
    );
    }
