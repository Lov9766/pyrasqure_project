import React, { useState, useEffect } from "react";
// import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import AntDesign from "react-native-vector-icons/AntDesign";
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
} from "react-native";

function Payment({navigation}) {
  return (
    <View
      style={{
        marginTop: 40,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 60,
          color: "black",
        }}
      >
        Make
      </Text>
      <Text
        style={{
          fontSize: 60,
          color: "black",
        }}
      >
        Payment{" "}
      </Text>
     
      
      

      <View style={{}}>
         <Image
          style={{ width: 300, height:300, marginBottom: 10 , marginTop: 10 }}
          source={require("./qr.jpeg")}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
           navigation.navigate("VideoUpload");;
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            paddingHorizontal: 60,
            paddingVertical: 7,
            elevation: 5,
            marginTop: 60,
            backgroundColor: "yellow",
            color: "black",
            borderRadius: 40,
          }}
        >
          Pay
        </Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 40, paddingTop: 15 }}>or</Text>
      <View>
        <Text style={{ fontSize: 20, paddingTop: 15 }}>Pay using Gpay</Text>
      </View>
      <View style={{paddingTop:20}}>
        <Image
          style={{ width: 50, height: 50, marginBottom: 40 }}
          source={require("./google-pay.png")}
        />
      </View>
    </View>
  );
}
export default Payment;
