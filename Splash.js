import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import React from 'react'
import LottieView from "lottie-react-native";



const Splash = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <LottieView
        source={require("../assets/knowunity.json")}
        autoPlay
        loop={false}
        speed={1}
        onAnimationFinish={() => {
          navigation.navigate("TodoList");
        }}
      ></LottieView>
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default Splash;