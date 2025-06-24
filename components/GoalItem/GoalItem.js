import { View, Text, StyleSheet, Pressable } from "react-native";

const styles = StyleSheet.create({
  goalItemView: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalItemText: {
    padding: 8,
    color: 'white',
  },
});

export const GoalItem = ({ goal, onDeleteItem }) => {
  return (
    <View style={styles.goalItemView}>
      <Pressable
        android_ripple={{ color: '#dddddd' }}
        onPress={() => onDeleteItem(goal.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItemText}>{goal.text}</Text>
      </Pressable>
    </View>
  )
};