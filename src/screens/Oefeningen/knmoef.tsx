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
import {questionsknm} from "../Vragen/knmvragen"


const backGColorblue = "#3366ff"
const backGColororange = "#ff7200"
const backGBlack = "#2b2b2b"
const backGColorDarkBlue = "#002db3"
var questionIndex = 1;


export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "knm">) {
  
  const { isDarkmode, setTheme } = useTheme();
  

  const [userOption, setUserOption] = useState(null);
  const [showIcon, setShowIcon] = useState(false);
  const [showbuttonone, setshowbuttonone] = useState(true);
  const [questionnumber, setquestionnumber] = useState(questionIndex);
  const currentquestion = questionsknm[questionnumber - 1];
  const [chosennumber, setchosennumber] = useState(-1);
  const [questionansweredright, setquestionansweredright] = useState(false);

 

  function resetQuestion() {
    questionIndex = questionIndex + 1
    setquestionnumber(questionIndex)
    setUserOption(null);
    setShowIcon(false);
    setshowbuttonone(true);
    setchosennumber(-1);
    setquestionansweredright(false);
  }
  function RightAnswer() {
  
    if (userOption == currentquestion.options[0]) {
        setchosennumber(0);
       
    }
    else if (userOption == currentquestion.options[1]) {
        setchosennumber(1);
      
    }
    else if (userOption == currentquestion.options[2]) {
        setchosennumber(2);
      
    }
    if (userOption == currentquestion.correctAnswer[0]) {    
      setquestionansweredright(true);
    } 
    

  }

  

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
          Question {questionnumber}
          
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
            {currentquestion.text} 
        
          </Text>
          { React.Children.toArray(
          currentquestion.options.map((item, i) => {
          
          return (
   
            <Pressable
            key={i}
            style={ 
              item === userOption ? styles.selected : styles.unselected 
            } 
            onPress={() => {chosennumber != -1 ? null : setUserOption(item)} }
          >
           
          
           <View style={styles.spacebetween} >
            
            <Text style={styles.option} key={i}>  {item} </Text>
           
            
            {i == 0 && chosennumber == 0 && i != currentquestion.correctAnswer[1] ?
              <MaterialCommunityIcons name="close" style={{
                color: "#fff",
                backgroundColor: "red",        
                borderRadius: 30/2,
            
                fontSize: 20,
              }}
              />
            : null
          }
          {i == 1 && chosennumber == 1 && i != currentquestion.correctAnswer[1]  ?
              <MaterialCommunityIcons name="close" style={{
                color: "#fff",
                backgroundColor: "red",        
                borderRadius: 30/2,
            
                fontSize: 20,
              }}
              />
            : null
          }
          {i == 2 && chosennumber == 2 && i != currentquestion.correctAnswer[1] ?
              <MaterialCommunityIcons name="close" style={{
                color: "#fff",
                backgroundColor: "red",        
                borderRadius: 30/2,
            
                fontSize: 20,
              }}
              />
            : null
          }
            {i == currentquestion.correctAnswer[1] ?
              <MaterialCommunityIcons name="check" style={{
                color: "#fff",
                backgroundColor: "green",
                
                borderRadius: 30/2,
                display: showIcon ? 'flex' : 'none',
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
        {/* Wanneer een antwoord fout beantwoord is. */}
      <MaterialCommunityIcons name="exclamation" style={{
                color: "#fff",
                backgroundColor: backGColorDarkBlue,
                marginLeft: "2%",
                marginRight: "3%",
                borderRadius: 30,
                display: questionansweredright == false && showIcon == true ? 'flex' : 'none',
                fontSize: 35,
              }}
              />
              {/* Wanneer een antwoord goed beantwoord is. */}
              <MaterialCommunityIcons name="check" style={{
                color: "#fff",
                backgroundColor: "green",
                marginLeft: "2%",
                marginRight: "3%",
                borderRadius: 30,
                display: questionansweredright ? 'flex' : 'none',
                fontSize: 35,
              }}
              />
              
          {/* Wanneer een antwoord fout beantwoord is. */}
          <Text style={{display: questionansweredright == false && showIcon == true ? 'flex' : 'none', flex: 1}}>{currentquestion.Explanation}</Text>
          {/* Wanneer een antwoord goed beantwoord is. */}
          <Text style={{ display: questionansweredright ? 'flex' : 'none', flex: 1}} >{currentquestion.Explanation}</Text>
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
                RightAnswer();              
                setShowIcon(true);
                setshowbuttonone(false);
                
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
              
              resetQuestion();
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
    marginLeft: "25%",
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
    flex: 1,
    top : 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    justifyContent: "center",

  },  
  questiontext: {
  
  
    flexWrap: 'wrap',
    fontSize: 25,
    marginBottom: "7%",
    textAlign: 'center',
    fontWeight: "bold",
    
    
  },
  answerbutton: {
    marginTop: "2%",
  },
  continuebutton: {

    height: "10%",
    margin: '1.5%',
    marginTop: "8%",
    
    

  },
  spacebetween: {
    flexDirection: "row",
    marginEnd: "2%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  option: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
 

    
  },
  unselected: {
    backgroundColor: backGBlack,
    marginTop: "3%",
    padding: "3%",
    margin: "1.5%",
    borderRadius: 10,
    borderWidth: 2.5 ,

    borderColor: "#000"
  },
  selected: {
    backgroundColor: backGBlack,
    
    padding: "3%",
    margin: "1.5%",
    borderRadius: 10,
    borderWidth: 2.5 ,
    borderColor: backGColororange
  },
  explanationborder: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden',
    
   
    marginTop: "5%",
 
   
  }

  
})
