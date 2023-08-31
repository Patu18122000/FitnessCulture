import React from 'react';
import {View, StyleSheet, Text, BackHandler} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen, green } from './Constants';

const Home = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
      <Text style={{ color: 'orange', fontSize: 64 }}>Let's start</Text>
      <Text style={{ color: 'white', fontSize: 44, marginBottom: 40 }}>Fitness Culture</Text>
      <Btn bgColor={green} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
      <Btn bgColor='white' textColor={darkGreen} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
      </View>
    </Background>
    
  );
}

const styles = StyleSheet.create({})

export default Home;
