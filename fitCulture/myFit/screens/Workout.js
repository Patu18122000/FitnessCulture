import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import Background from '../src/Background';

function Workout() {
  const [planName, setPlanName] = useState('');
  const [selectedGoal, setSelectedGoal] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const goals = ['Select Goal', 'Weight Loss', 'Muscle Gain', 'Other']; // Add more goal options as needed

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const selectGoal = (goal) => {
    setSelectedGoal(goal);
    toggleModal();
  };

  const handleSubmit = () => {
    // Perform form submission actions here
    if (planName && selectedGoal && duration && description) {
      console.log('Workout Plan Submitted:', {
        planName,
        goal: selectedGoal,
        duration,
        description,
      });
    } else {
      console.error('Form is incomplete');
    }
  };

  return (
    <Background>
        <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Create Workout Plan</Text>
      </View>

      {/* Plan Name */}
      <TextInput
        style={styles.input}
        placeholder="Plan Name"
        placeholderTextColor="white"
        value={planName}
        onChangeText={(text) => setPlanName(text)}
      />

      {/* Goal Picker */}
      <TouchableOpacity style={styles.picker} onPress={toggleModal}>
        <Text style={styles.pickerText}>{selectedGoal || 'Select Goal'}</Text>
      </TouchableOpacity>

      {/* Duration */}
      <TextInput
        style={styles.input}
        placeholder="Duration"
        placeholderTextColor="white"
        value={duration}
        onChangeText={(text) => setDuration(text)}
      />

      {/* Description */}
      <TextInput
        style={styles.descriptionInput}
        placeholder="Description"
        placeholderTextColor="white"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />

      {/* Goal Selector Modal */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          {goals.map((goal, index) => (
            <TouchableOpacity key={index} onPress={() => selectGoal(goal)}>
              <Text style={styles.modalItem}>{goal}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>

      {/* Submit Button */}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 19,
  },
  header: {
    backgroundColor: '#FF8C00',
    padding: 16,
    marginBottom: 60,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    width:330,
    
  },
  input: {
    height: 40,
    borderWidth: 2,
    borderColor: 'white',
    marginBottom: 30,
    paddingHorizontal: 8,
    color: 'white',
  },
  picker: {
    height: 40,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 8,
    marginBottom: 30,
  },
  pickerText: {
    color: 'white',
  },
  descriptionInput: {
    height: 80,
    borderWidth: 2,
    borderColor: 'white',
    marginBottom: 40,
    paddingHorizontal: 8,
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
  },
  modalItem: {
    paddingVertical: 30,
    paddingHorizontal: 32,
    fontSize: 22,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default Workout;
