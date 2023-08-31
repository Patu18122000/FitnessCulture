import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback, Modal, ImageBackground } from 'react-native';

function GoalSettingScreen() {
  const [goalType, setGoalType] = useState('');
  const [targetValue, setTargetValue] = useState('');
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const goalTypeOptions = [
    'Weight Loss',
    'Muscle Gain',
    'Body Fat Percentage',
    'Running Distance',
    // Add more options as needed
  ];

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const selectGoalType = (value) => {
    setGoalType(value);
    toggleDropdown();
  };

  return (
    <ImageBackground source={require('./assets/gym1.jpg')} style={styles.container}>
      <Text style={styles.title}>Set Fitness Goal</Text>
      <TouchableWithoutFeedback onPress={toggleDropdown}>
        <View style={styles.picker}>
          <Text style={styles.pickerText}>{goalType || 'Select Goal Type'}</Text>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={isDropdownVisible} transparent={true} animationType="slide">
        <View style={styles.dropdownContainer}>
          {goalTypeOptions.map((option, index) => (
            <TouchableWithoutFeedback key={index} onPress={() => selectGoalType(option)}>
              <View style={styles.dropdownItem}>
                <Text style={styles.dropdownItemText}>{option}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </Modal>
      <TextInput
        style={styles.input}
        placeholder="Target Value"
        value={targetValue}
        onChangeText={setTargetValue}
        keyboardType="numeric"
        placeholderTextColor="white"
      />
      <View style={styles.buttonContainer}>
        <Button
            title="Set Goal"
            onPress={() => {
            if (goalType && targetValue<=50 && targetValue>0) {
                const goalData = {
                type: goalType,
                target: parseFloat(targetValue),
                };


                // Now you can handle the goal data, e.g., send it to the backend
            } else {
                // Provide feedback to the user to fill out both fields
                if(targetValue>50){
                    alert('the value should be below 50 ! Start with 50 :)');
                }else{
                    alert('Invalid Detailes')
                }
            }
            }}
            color="#FF8C00"
            titleStyle={styles.buttonTitle}
            buttonStyle={styles.button}
        />
        </View>


    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 44,
    fontWeight: 'bold',
    color: 'rgb(255, 140, 0)', // Set title text color
    marginBottom: 80,
  },
  picker: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white', // Set background color for the picker
  },
  pickerText: {
    color: 'black', // Set text color for the picker
  },
  dropdownContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.83)', // Add the background color with transparency
  },
  dropdownItem: {
    padding: 10,
  },
  dropdownItemText: {
    color: 'white', // Set text color for dropdown items
    fontSize: 30,
    marginBottom: 40,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'white', // Set text color for input
  },
  buttonContainer: {
    marginTop: 30, // Add spacing to the top of the button
  },
  button: {
    backgroundColor: '#FF8C00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },

});

export default GoalSettingScreen;
