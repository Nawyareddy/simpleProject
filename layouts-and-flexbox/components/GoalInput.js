import { useState } from 'react';
import { View, StyleSheet, Button, TextInput, Modal ,Image} from 'react-native';

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const handleInputGoal = (eneteredText) => {
    setEnteredGoalText(eneteredText);
  };

  const hanldeAddGoal = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
      <Image source={require('../assets/goalImage.jpg')} style={styles.image}/>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goals"
          onChangeText={handleInputGoal}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add goals" onPress={hanldeAddGoal} color='green'/>
          </View>
          <View style={styles.button}>
            <Button title="Cancel"  onPress={props.onCancelGoal} color='red'/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:15,
    backgroundColor:'purple'
  },
  image:{
    width:100,
    height:100,
    margin:15
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'grey',
    backgroundColor:'white',
    color:'purple',
    width: '100%',
    padding: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop:15
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

export default GoalInput;
