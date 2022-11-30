import React, { useContext } from "react";
import { getApps, initializeApp } from "firebase/app";
import { AuthContext } from "../provider/AuthProvider";

import { NavigationContainer } from "@react-navigation/native";

import Main from "./MainStack";
import Auth from "./AuthStack";
import Loading from "../screens/utils/Loading";

// Better put your these secret keys in .env file
const firebaseConfig = {
  apiKey: "AIzaSyCduiw6gnC4lF0jgFfpRsQinxTgYLvQzWE",
  authDomain: "innlburgeren.firebaseapp.com",
  projectId: "innlburgeren",
  storageBucket: "innlburgeren.appspot.com",
  messagingSenderId: "571464528981",
  appId: "1:571464528981:web:8f4a19dc016a61b5b5d0dc",
  measurementId: "G-BX6QMH2RC7"
};
if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

export default () => {
  const auth = useContext(AuthContext);
  const user = auth.user;
  return (
    <NavigationContainer>
      {user == null && <Loading />}
      {user == false && <Auth />}
      {user == true && <Main />}
    </NavigationContainer>
  );
};
