import { Animated, Dimensions, Image, Text, View } from "react-native";
import React, {useEffect, useRef} from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";

 
import animLogo from '../../assets/images/inNLburgeringlogotransp.png';
import { Button } from "react-native-rapi-ui";

const backGColor = "#3366ff"

export default function SplashScreen() {
    
    const edges = useSafeAreaInsets();

   
    const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    useEffect(()=>{

        setTimeout(() => {

            Animated.sequence([
                Animated.timing(
                    moveLogo,
                    {
                        toValue: -Dimensions.get('window').height + 800,
                        useNativeDriver: true
                    }
                )
            ])
            .start(); 
        }, 500);
    }, [])

    return(
        <Animated.View style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: backGColor,        
            
        }}>
            <Animated.View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
               

                
                
            }}>
            
                <Animated.Image source={animLogo} style={{
                    width:380,
                    height:380,
                    transform: [
                        
                        { translateY: moveLogo.y },
                    ]
                }}></Animated.Image>
                <Text style={{
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: "center",
                    fontSize: 20,
                    
                    color: 'white'
                }}>
                   {/*inNLburgeren is een concept ontwikkeld door een groep eerste jaars ICT-studenten van Fontys. Het streven van inNLburgeren is oefenmateriaal/cursussen bieden aan inburgeraars in Nederland. Een complicatie waar inburgeraars tegenaan lopen is dat er online geen (gratis) oefenmateriaal beschikbaar is. inNLburgeren biedt hierbij een oplossing, alle leerstof is gratis en overal te oefenen. inNLburgeren heeft een website, desktopapp en mobiele app zodat U overal makkelijk de lesstof kan oefenen en begrijpen. Maak een account aan en krijg toegang tot de oefenopdrachten en uw eigen leerproces.*/}
                   inNLburgeren is a concept developed by a group of first-year ICT students from Fontys. The aim of inNLburgeren is to offer practice material/courses to people integrating in the Netherlands. A complication encountered by people integrating is that there is no (free) practice material available online. inNLburgeren offers a solution for this, all learning material is free and can be practiced anywhere. inNLburgeren has a website, desktop app and mobile app so that you can easily practice and understand the lesson material anywhere. Create an account and get access to the practice assignments and your own learning process.
                   </Text>
                   <Button>Continue</Button>
            </Animated.View>
            
        </Animated.View>
    );
}