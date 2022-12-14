import React, { useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { AuthStackParamList } from "../../types/navigation";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Layout,
  Text,
  TextInput,
  Button,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";


const backGColorblue = "#3366ff"
const backGColororange = "#ff7200"

export default function ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, "ForgetPassword">) {
  const { isDarkmode, setTheme } = useTheme();
  const auth = getAuth();
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function forget() {
    setLoading(true);
    await sendPasswordResetEmail(auth, email)
      .then(function () {
        setLoading(false);
        navigation.navigate("Login");
        alert("Your password reset has been sent to your email");
      })
      .catch(function (error) {
        setLoading(false);
        alert(error);
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
              size="h3"
              fontWeight="bold"
              style={{
                alignSelf: "center",
                padding: 30,
              }}
            >
              Password forget?
            </Text>
            <Text>Email</Text>
            <TextInput
              containerStyle={{ marginTop: 15 }}
              placeholder="Enter your email"
              backgroundColor= "#fff"
              value={email}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
            />
            <Button
              text={loading ? "Loading" : "Send email"}
              textStyle={{
                color: "#fff",
              }}
              onPress={() => {
                forget();
              }}
              color = "#ff7200"
              style={{
                marginTop: 30,
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
              <Text size="md">Already have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text
                  size="md"
                  fontWeight="bold"
                  style={{
                    marginLeft: 5,
                  }}
                >
                  Login here
                </Text>
              </TouchableOpacity>
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
