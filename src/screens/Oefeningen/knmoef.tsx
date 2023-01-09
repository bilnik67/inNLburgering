import { Animated, StyleSheet, Dimensions, Image, TouchableOpacity, View } from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Layout,
  TopNav,
  Text,
  useTheme,
  themeColor,
  Button,
} from "react-native-rapi-ui";
import {Pressable} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import RadioButton from './components/RadioButton';
import animLogo from '../../../assets/images/inNLburgeringlogotransp.png';
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const backGColorblue = "#3366ff"
const backGColororange = "#ff7200"
const backGBlack = "#2b2b2b"
const backGColorDarkBlue = "#002db3"


function addicon () {
  <MaterialCommunityIcons name="check" style={{
    color: "#fff",
    backgroundColor: "green",
    marginTop: "2%",
    borderRadius: 30/2,
    fontSize: 20,
  
    
   }}
   />
  }



export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "knm">) {
  
  const { isDarkmode, setTheme } = useTheme();

  const [userOption, setUserOption] = useState(null);
  const [showIcon, setShowIcon] = useState(false);
  const [showfirstfalseanswer, setshowfirstfalseanswer] = useState(false);
  const [showsecondfalseanswer, setshowsecondfalseanswer] = useState(false);
  const [showbuttonone, setshowbuttonone] = useState(true);

  const data = [
    { value: 'De buren hebben ruzie.' }, 
    { value: 'Iemand zijn been is gebroken.' },
    { value: 'Je fiets is gestolen.' },
  
  ];

  return (
    
    <Layout>
      <TopNav
        middleContent="knm"
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
      <View style={styles.container}>
      
        <View style={styles.container2}>
        <View style={styles.center}>
          <Text style={styles.questionnumber}>
          Question 1 
          
          <Text style={styles.questionmaxnumber}>
             /52
            </Text>
          </Text>
         
          <Image
          
            style={styles.iconimage}
            source={require("../../../assets/images/Icons/test.png")}
          />
          </View>
          <View
            style={{  
            borderBottomColor: backGColororange,
            borderBottomWidth: 2,
            
            marginTop: "2%",
            width: "96%",
            }}
            />
          <View style={styles.center2}>
          
          <Text style={styles.questiontext}> 
            Wanneer bel je naar het alarmnummer?
          </Text>
          { React.Children.toArray(
          data.map((item, i) => {
          
          return (
   
            <Pressable
            key={i}
            style={ 
              item.value === userOption ? styles.selected : styles.unselected 
            } 
            onPress={() => setUserOption(item.value) }
          >
            
          
           <View style={styles.spacebetween} >
            
            <Text style={styles.option} key={i}>  {item.value} </Text>
           
            
            {i == 0  ?
              <MaterialCommunityIcons name="close" style={{
                color: "#fff",
                backgroundColor: "red",
                marginTop: "2%",
                borderRadius: 30/2,
                display: showfirstfalseanswer ? 'flex' : 'none',
                fontSize: 20,
              }}
              />
            : null
          }
            {i == 1  ?
              <MaterialCommunityIcons name="check" style={{
                color: "#fff",
                backgroundColor: "green",
                marginTop: "2%",
                borderRadius: 30/2,
                display: showIcon ? 'flex' : 'none',
                fontSize: 20,
              }}
              />
            : null
            
           
            }
             {i == 2  ?
              <MaterialCommunityIcons name="close" style={{
                color: "#fff",
                backgroundColor: "red",
                marginTop: "2%",
                borderRadius: 30/2,
                display: showsecondfalseanswer ? 'flex' : 'none',
                fontSize: 20,
              }}
              />
            : null
            
            }
               
           
            </View>
            
          </Pressable>
          
          
        ); 
        
      }))}
      <View style={styles.explanationborder}>
          <Text style={{display: showfirstfalseanswer || showsecondfalseanswer ? 'flex' : 'none'}}> Uitleg: je belt het alarmnummer alleen bij levensgevaar.</Text>
          <Text style={{ display: showIcon == true && showfirstfalseanswer == false && showsecondfalseanswer == false? 'flex' : 'none', }} >Heel goed!</Text>
          </View>
{/*           
          <Button  style={styles.answerbutton} color={backGBlack} text='De buren hebben ruzie.' textStyle={{color: '#fff'}}
                  onPress={() => {
                    //TODO
                  }}/>
          <Button  style={styles.answerbutton} color={backGBlack} text='Iemand heeft zijn been gebroken.' textStyle={{color: '#fff'}}
                  onPress={() => {
                    //TODO
                  }}/>
          <Button  style={styles.answerbutton} color={backGBlack} text='Je fiets is gestolen.' textStyle={{color: '#fff'}}
                  onPress={() => {
                    //TODO
                  }}/> */}

           { showbuttonone ? 
           <Button
              
              text={"Result"}
              textStyle={{
                color: "#fff",
              }}
              onPress={() => {
                if (userOption == "De buren hebben ruzie.") {
                  setshowfirstfalseanswer(true)
                  setShowIcon(true)
                  
                }
                if (userOption == "Je fiets is gestolen.") {
                  setshowsecondfalseanswer(true)
                  setShowIcon(true)
                  
                }
                if (userOption == "Iemand zijn been is gebroken.")
                {
                  setShowIcon(true)
                  
                }
                setshowbuttonone(false)
               }
              }
              color = "#ff7200"
              style={styles.continuebutton}         
              
            /> :
            <Button
              
            text={"Continue"}
            textStyle={{
              color: "#fff",
            }}
            onPress={() => {
              
             }
            }
            color = "#ff7200"
            style={styles.continuebutton}         
            
          />
            
          }
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
    justifyContent: "center",
    alignItems: "center",
  },
  icons: {
    transform: [{rotateY: '180deg'}],
    width: "200%",
  },
  iconimage: {
 
    marginTop: "2%",
    marginLeft: "30%",
    height: "100%",
    width: "12%",
    resizeMode: 'contain',
    
  
  },
  container2: {
    
    height: "95%",
    borderRadius: 12,
    width: "94%",   
    backgroundColor: backGColorblue,
    flexDirection: 'column',
    alignItems: "center",
   
    
   
  },
  questionnumber: {
   
    color: backGColororange,
    fontSize: 34,
    fontWeight: "800",
    textAlign: "center",
    borderColor: backGColororange,
    marginTop: "4%"
    
    
    
  },
  questionmaxnumber: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 24,
    
  },
  center: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    
    
  },
  center2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },  
  questiontext: {
    
    marginTop: "15%",
    marginBottom: "15%",
    fontSize: 30,
    fontWeight: "bold",
    
    
  },
  answerbutton: {
    marginTop: "2%",
  },
  continuebutton: {
    marginTop: "20%",
    height: "10%",
  },
  spacebetween: {
    flexDirection: "row",
    marginHorizontal: "1%",
    marginEnd: "2%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  option: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginTop: "2%",
    alignItems: "center",
    justifyContent: "space-between",
    
  },
  unselected: {
    backgroundColor: backGBlack,
    margin: "1.5%",
    borderRadius: 10,
    height: "7%",
    borderWidth: 2.5 ,
    borderColor: "#000"
  },
  selected: {
    backgroundColor: backGBlack,
    margin: "1.5%",
    borderRadius: 10,
    height: "7%",
    borderWidth: 2.5 ,
    borderColor: backGColororange
  },
  explanationborder: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    marginTop: "10%"
  }

  
})
