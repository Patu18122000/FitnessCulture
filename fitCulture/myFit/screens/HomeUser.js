import React, { useEffect, useState } from "react";

import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  Button
} from "react-native";
const width = Dimensions.get("window").width - 30;
export default function Home({ navigation }) {
  const username = "Alex";
  const motivation = "Sweat, achieve, repeat!";

  const [selectedMode, setSelectedMode] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const date = new Date();
  const day = date.getDate();
  let month = date.getMonth() + 1; // getMonth() returns a zero-based index, so we need to add 1 to get the actual month number
  switch (month) {
    case 1:
      month = "January";
      break;
    case 2:
      month = "February";
      break;
    case 3:
      month = "March";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "August";
      break;
    case 9:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
      break;
    default:
      month = "Invalid month";
  }
  //time
  const currentHour = new Date().getHours();
  let greetingMessage;

  if (currentHour >= 5 && currentHour < 12) {
    greetingMessage = "Good Morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingMessage = "Good Afternoon";
  } else {
    greetingMessage = "Good Evening";
  }

  return (
    <ScrollView style={{backgroundColor:'#fff'}}>
      <View style={styles.container}>
        <Text style={styles.greeting}>
          {greetingMessage}, {username} 👋
        </Text>
        <Text style={styles.motivation}>{motivation}</Text>

        <Text style={styles.header}>Suggested workout:</Text>
      </View>
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    marginLeft: 15,
    backgroundColor: "#fff",
    marginTop:30
  },
  greeting: {
    fontFamily: "Raleway-Bold",
    fontSize: 20,
    marginTop: 14,
    color: "#3e4a5c",
  },
  motivation: {
    fontFamily: "Raleway-Bold",
    fontSize: 32,
    marginTop: 16,
    lineHeight: 30,
  },
  recomendation: {
    width: width,
    position: "relative",
    marginRight: -30,
  },
  header: {
    // fontFamily: "Raleway-SemiBold",
    marginTop: 24,
  },
 
});
