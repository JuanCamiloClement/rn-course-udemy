import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
  textInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#e4d0ff',
    borderRadius: 6,
    backgroundColor: '#e4d0ff',
    color: '#120438',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

export const GoalInput = ({ showModal, onAddGoal, onCancel }) => {
  const [input, setInput] = useState('');

  const handleInput = (input) => {
    setInput(input);
  };

  const handleAddGoal = () => {
    onAddGoal(input);
    setInput('');
  };

  const handleCancel = () => {
    onCancel(false);
  };

  return (
    <Modal visible={showModal} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../../assets/images/goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          value={input}
          onChangeText={handleInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={handleAddGoal} color='#b180f0' />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={handleCancel} color='#f312a2' />
          </View>
        </View>
      </View>
    </Modal>
  )
};