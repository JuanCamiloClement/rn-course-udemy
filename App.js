import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GoalItem } from './components/GoalItem/GoalItem';
import { GoalInput } from './components/GoalInput/GoalInput';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  goalsContainer: {
    flex: 5,
  },
});

export default function App() {
  const [goals, setGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddGoal = (input) => {
    setGoals((prevGoals) => [
      ...prevGoals,
      { id: Math.random().toString(), text: input }
    ]);
    setShowModal(false);
  };

  const handleDeleteItem = (itemId) => {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== itemId)
    });
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const renderItem = ({ item }) => <GoalItem goal={item} onDeleteItem={handleDeleteItem} />;
  const keyExtractor = (item) => item.id;

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color='#a065ec' onPress={handleShowModal} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
        </View>
        <GoalInput showModal={showModal} onAddGoal={handleAddGoal} onCancel={setShowModal} />
      </View>
    </>
  );
}

/**
 * Flexbox notes:
 * - In RN, views are organized with flexbox by default and with flexDirection: column by default
 * - By default, alignItems: 'stretch'
 * - The 'flex' property is applied to item that are inside a flex container and tells the child how
 *   much of the available space to occupy (of the main axis). For the cross axis, this is done in the
 *   container with 'alignItems'
 * Other notes:
 * - There is no style inheritance in RN
 * - for ScrollView, the area that is scrollable is determined by the parent component
 */