import React from "react";
import { View, Linking, Dimensions, Text } from "react-native";
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
  const { isDarkmode, setTheme } = useTheme();
  const auth = getAuth();
  return (
   
    <View style={styles.container}>
        
        <View style={styles.center}></View>

        <View style={styles.bottom}>

          <View style={styles.bottomItem}>
              <View style={styles.bottomItemInner}>
                <TouchableOpacity>
                <Image 
                  style={styles.images}
                  source={require("../../assets/images/knm.jpg")}
                />  
                <View style={styles.directionrow}> 
                  <Button style={styles.downbottom} color={backGBlack} text='knm' textStyle={{color: '#fff'}}
                  onPress={() => {
                    navigation.navigate('knm')
                  }}>

                  </Button>
                </View>  
                </TouchableOpacity>
              </View>
          </View>

          <View style={styles.bottomItem}>
          <View style={styles.bottomItemInner}>
              <Image 
             
              style={styles.images}
              source={require("../../assets/images/schrijven.jpg")}
             />  
              <View style={styles.directionrow}> 
                <Button style={styles.downbottom} color={backGBlack} text='Schrijven' textStyle={{color: '#fff'}}
                onPress={() => {
                  navigation.navigate('schrijven')
                }}>
                
                
                </Button>
              </View>
                
              </View>
          </View>

          <View style={styles.bottomItem}>
              <View style={styles.bottomItemInner}>
                <Image 
                  style={styles.images}
                  source={require("../../assets/images/books.jpg")}
                />  
                <View style={styles.directionrow}> 
                  <Button style={styles.downbottom} color={backGBlack} text='Lezen' textStyle={{color: '#fff'}}
                  onPress={() => {
                    navigation.navigate('lezen')
                  }}>

                  </Button>
                </View>  
              </View>
          </View>
          
          <View style={styles.bottomItem}>
              <View style={styles.bottomItemInner}>
                <Image 
                  style={styles.images}
                  source={require("../../assets/images/listen.jpg")}
                />  
                <View style={styles.directionrow}> 
                  <Button style={styles.downbottom} color={backGBlack} text='Luisteren' textStyle={{color: '#fff'}}
                  onPress={() => {
                    navigation.navigate('luisteren')
                  }}>

                  </Button>
                </View>  
              </View>
          </View>

          <View style={styles.bottomItem}>
              <View style={styles.bottomItemInner}>
                <Image 
                  style={styles.images}
                  source={require("../../assets/images/speak.png")}
                />  
                <View style={styles.directionrow}> 
                  <Button style={styles.downbottom} color={backGBlack} text='Spreken' textStyle={{color: '#fff'}}
                  onPress={() => {
                    navigation.navigate('spreken')
                  }}>

                  </Button>
                </View>  
              </View>
          </View>
          
          <View style={styles.bottomItem}>
              <View style={styles.bottomItemInner}>
                <Image 
                  style={styles.images}
                  source={require("../../assets/images/toets.jpg")}
                />  
                <View style={styles.directionrow}> 
                  <Button style={styles.downbottom} color={backGBlack} text='Toets' textStyle={{color: '#fff'}}
                  onPress={() => {
                    navigation.navigate('toets')
                  }}>

                  </Button>
                </View>  
              </View>
          </View>

        </View>
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backGColorDarkBlue,
    
  },
  center: {
    height: '10%',
    backgroundColor: backGBlack,
  },
  
  bottom: {
    marginTop: 20,
    height: '45%',
    backgroundColor: backGColorDarkBlue,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
  },
  bottomItem: {
   
    width: '50%',
    height: '60%',
    padding: 5,
    
  },
  bottomItemInner: {
    flex: 1,
    backgroundColor: backGColorblue,
    alignItems: 'center',   
    justifyContent: 'flex-end',    
    borderRadius: 5,
  },
  images: {
    flex: 1,
    aspectRatio: 1.4,
    borderColor: '#ff0000',
    resizeMode: 'contain',
    marginTop: 5,
    borderRadius: 5,
    

    
  },
  directionrow: {
    flexDirection: 'row',
    
  },
  downbottom: {
    
    flexGrow: 1,
    margin: 5,
    backgroundColor: backGBlack,
    marginBottom: 3, 
   
  }
});