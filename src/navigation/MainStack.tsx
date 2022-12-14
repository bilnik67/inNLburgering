import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SecondScreen from "../screens/SecondScreen";
import knm from "../screens/Leerstof/knm"
import schrijven from "../screens/Leerstof/schrijven"
import lezen from "../screens/Leerstof/lezen"
import luisteren from "../screens/Leerstof/luisteren"
import spreken from "../screens/Leerstof/spreken"
import toets from "../screens/Leerstof/toets"

import MainTabs from "./MainTabs";

const MainStack = createNativeStackNavigator();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="SecondScreen" component={SecondScreen} />
      <MainStack.Screen name="knm" component={knm}/>
      <MainStack.Screen name="schrijven" component={schrijven}/>
      <MainStack.Screen name="lezen" component={lezen}/>
      <MainStack.Screen name="luisteren" component={luisteren}/>
      <MainStack.Screen name="spreken" component={spreken}/>
      <MainStack.Screen name="toets" component={toets}/>

    </MainStack.Navigator>
  );
};

export default Main;
