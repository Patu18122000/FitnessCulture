import React, {useState} from "react";
import {View, Text, TextInput , Button , Stylsheet} from 'react-native';

function UserProfileScreen(){
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#f8f8f8', // Background color for the whole screen
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      height: 40,
      width: '100%',
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
  });

return(
    <View style="styles.container">
        <Text style={styles.title}>User Profile</Text>
        <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
      />
      <Button
        title="Save"
        onPress={async () => {
            try {
            // Create an object with the user profile data
            const userProfileData = {
                name,
                age,
                gender,
            };

            // Send the data to your backend using an API call (example using fetch)
            const response = await fetch('your-backend-api-url', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(userProfileData),
            });

            if (response.ok) {
                // Data saved successfully, update the state
                setIsSaved(true);
            } else {
                // Handle error, maybe display an error message to the user
                console.error('Error saving data:', response.statusText);
            }
            } catch (error) {
            // Handle unexpected errors
            console.error('An error occurred:', error);
            }
        }}
        />

    
    </View>

)

export default UserProfileScreen;