import { Animated, Image, View } from "react-native";
import React from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";

 
import animLogo from '../../assets/images/LogoAnim.gif';

const backGColor = "#3366ff"

export default function SplashScreen() {
    
const edges = useSafeAreaInsets();


    return(
        <View style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: backGColor
        }}>
            <Animated.View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                
                
            }}>
            
                <Image source={animLogo} style={{
                    width:380,
                    height:380
                }}></Image>
            </Animated.View>
            
        </View>
    );
}