import { useState } from 'react';
import { View, StyleSheet, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const handleStartAddGoal = () => {
    setModalIsVisible(true);
  };

  const handleCancelGoal = () => {
    setModalIsVisible(false);
  };

  const hanldeAddGoal = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    handleCancelGoal();
  };

  const handleDeleteGoal = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="green"
        onPress={handleStartAddGoal}
      />
      <GoalInput
        onAddGoal={hanldeAddGoal}
        visible={modalIsVisible}
        onCancelGoal={handleCancelGoal}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.key}
                onDeleteItem={handleDeleteGoal}
              />
            );
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
  },

  goalsContainer: {
    flex: 5,
    paddingBottom: 20,
  },
});

export default App;
