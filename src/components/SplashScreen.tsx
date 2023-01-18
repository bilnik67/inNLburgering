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


        
   

    return(
        
        <View style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: backGColorblue,        
            
        }}>
            <View style={{
                display: "flex",
                
            }}>
            
                <Image source={animLogo} style={{
                     
                    width: Dimensions.get('screen').width * 1,
                    height: Dimensions.get('screen').height * 0.1,
                    marginTop: '20%',
                    
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
                    marginBottom: "10%",
                    
                }}>
                   {/*inNLburgeren is een concept ontwikkeld door een groep eerste jaars ICT-studenten van Fontys. Het streven van inNLburgeren is oefenmateriaal/cursussen bieden aan inburgeraars in Nederland. Een complicatie waar inburgeraars tegenaan lopen is dat er online geen (gratis) oefenmateriaal beschikbaar is. inNLburgeren biedt hierbij een oplossing, alle leerstof is gratis en overal te oefenen. inNLburgeren heeft een website, desktopapp en mobiele app zodat U overal makkelijk de lesstof kan oefenen en begrijpen. Maak een account aan en krijg toegang tot de oefenopdrachten en uw eigen leerproces.*/}
                   inNLburgeren is a concept developed by a group of first-year ICT students from Fontys. The aim of inNLburgeren is to offer practice material/courses to people integrating in the Netherlands. A complication encountered by people integrating is that there is no (free) practice material available online. inNLburgeren offers a solution for this, all learning material is free and can be practiced anywhere. inNLburgeren has a website, desktop app and mobile app so that you can easily practice and understand the lesson material anywhere. Create an account to get started!
                   </Text>
                   <View style={{
                   
                    justifyContent: "center",
                    alignItems: "center",
                   }}>
                    <View style={{
                            }}>
                <TouchableOpacity style={{
                    
                    
                    width: Dimensions.get('screen').width * 0.85,
                    height: Dimensions.get('screen').height * 0.1,
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 6,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: backGColororange,
                
                    
                    
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
                </View>
                </View>
            </View>
            
       
    );
    }
