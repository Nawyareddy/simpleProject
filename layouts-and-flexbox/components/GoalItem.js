import { View, Text, StyleSheet, Pressable } from 'react-native';

const GoalItem = (props) => {
  return (
    <Pressable
      onPress={props.onDeleteItem.bind(this, props.id)}
      android_ripple={{ color: 'purple' }}
      style={({ pressed }) => pressed && styles.pressedItem}>
      <View style={styles.listItems}>
        <Text style={styles.textItem}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listItems: {
    margin: 8,
    borderWidth: 2,
    borderColor: 'purple',
    backgroundColor: 'purple',
    borderRadius: 6,
  },
  textItem: {
    color: 'white',
    padding: 10,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
