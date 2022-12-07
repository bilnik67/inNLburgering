import React, { useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { AuthStackParamList } from "../../types/navigation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Layout,
  Text,
  TextInput,
  Button,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import { Colors } from "react-native/Libraries/NewAppScreen";

const backGColorblue = "#3366ff"
const backGColororange = "#ff7200"

const styles = StyleSheet.create({
  underlineTextStyle: {
    textDecorationLine: 'underline',
  },
});


export default function ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, "Login">) {
  const { isDarkmode, setTheme } = useTheme();
  const auth = getAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function login() {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password).catch(function (
      error
    ) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      setLoading(false);
      alert(errorMessage);
    });
  }
  return (
    <KeyboardAvoidingView behavior="height" enabled style={{ flex: 1 }}>
      <Layout>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: backGColorblue,
            }}
          >
            <Image
              resizeMode="contain"
              style={{
                height: 320,
                width: 320,
                marginBottom: -60,
              }}
              source={require("../../../assets/images/inNLburgeringlogotransp.png")}
            />
          </View>
          <View
            style={{
              flex: 3,
              paddingHorizontal: 20,
              paddingBottom: 20,
              backgroundColor: backGColorblue,
            }}
          >
            <Text
              fontWeight="bold"
              style={{
                alignSelf: "center",
                padding: 30,
              }}
              size="h3"
            >
              Login
            </Text>
            <Text
              fontWeight="bold"
            
            >Email</Text>
            
            <TextInput 
              containerStyle={{ marginTop: 15 }}
              placeholder="Enter your email"
              placeholderTextColor={"#ff0000"}
              backgroundColor={"#2b2b2b"}
              value={email}
              autoCapitalize="none"
              selectionColor={"#000"}
              autoCompleteType="off"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
              style={{
                color: "#000",
              
              }}
              
            />
            
            
            <Text fontWeight="bold" style={{ marginTop: 15 }}>Password</Text>
            <TextInput
              containerStyle={{ marginTop: 15 }}
              placeholder="Enter your password"
              value={password}
              backgroundColor={"#2b2b2b"}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
            
            <TouchableOpacity
             style={{marginTop: 5}}
                onPress={() => {
                  navigation.navigate("ForgetPassword");
                }}
              >
                <Text style={
             styles.underlineTextStyle
             
            }  size="md" fontWeight="bold">
                  Forget password?
                </Text>
              </TouchableOpacity>
             <Button
              
              text={loading ? "Loading" : "Continue"}
              textStyle={{
                color: "#000",
              }}
              onPress={() => {
                login();
              }}
              color="white"
              style={{
                marginTop: 20,
                
              }}
              disabled={loading}

              
            />
           <Button
              
              text={loading ? "Loading" : "Sign Up"}
              textStyle={{
                color: "#fff",
              }}
              onPress={() => {
                navigation.navigate("Register");
              }}
              color = "#ff7200"
              style={{
                marginTop: 20,
                
              }}
              disabled={loading}

              
            />
           
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,
                justifyContent: "center",
              }}
            >
              
              
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                justifyContent: "center",
              }}
            >
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 30,
                justifyContent: "center",
              }}
            >
              
            </View>
          </View>
        </ScrollView>
      </Layout>
    </KeyboardAvoidingView>
  );
}
