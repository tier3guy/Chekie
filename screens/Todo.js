/* Built-in Imports */
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput,TouchableOpacity, FlatList } from 'react-native';

/* Internal Imports */
// components
import Theme from '../Themes';
import { Card } from '../components/Card';
import { greetMessage, date, getTime } from '../components/Api';

/* External Imports */
import { BaiJamjuree_500Medium, BaiJamjuree_300Light, useFonts } from '@expo-google-fonts/bai-jamjuree';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ShortUniqueId from 'short-unique-id';

/**
 * @returns React-Native Screen : Todo Screen 
 */
export const Todo = () => {

  const uid = new ShortUniqueId({ length: 24 });

  const [todo, setTodo] = useState('');
  const [tasks, setTasks] = useState([tasks]);

  async function fetchTasks() {
    try {
      let data = await AsyncStorage.getItem('@storedTodos');
      if (data != null) {
        data = JSON.parse(data);
        setTasks(data);
      }
    }
    catch (e) {
      console.log(e);
    }
  }
  useEffect(() => { fetchTasks() }, []);

  useEffect(() => { 
    AsyncStorage.setItem('@storedTodos', JSON.stringify(tasks)).then(() => {
      setTodo('');
    });
  }, [tasks]);

  let [fonts] = useFonts({ BaiJamjuree_500Medium, BaiJamjuree_300Light });
  if (!fonts) return null;
  
  function handleAddTodo() {
    if (todo == "") return;
    setTasks((items) => [...items, {
      task: todo,
      date: `${date()}, ${getTime()}`,
      id: uid()
    }]);
  }

  const handleDeleteTask = (id) => {
    const newTasks = tasks.filter(function filterTasks(task) {
      return task.id !== id;
    });
    setTasks(newTasks);
  }

  const clearAll = () => {
    AsyncStorage.setItem('@storedTodos', JSON.stringify([])).then(() => {
      setTasks([]);
      setTodo('');
    });
  }
  
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={Theme.dark}
        barStyle="light-content"
      />

      <View style={styles.greet}>
        <View style={styles.bannerContainer}>
          <Text style={styles.greetText}>{greetMessage()}</Text>
        </View>
        <Text style={styles.dateText}>{ date() }.</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="+ anything to be done?"
          placeholderTextColor={Theme.gray}
          selectionColor={Theme.white}
          autoCorrect={false}
          value={todo}
          onChangeText={(value) => setTodo(value)}
        />
      </View>

      <FlatList style={styles.cardsContainer}
        data={tasks}
        renderItem={(element) => (
          <Card
            task={element?.item.task}
            date={element?.item.date}
            handleDeleteTask={handleDeleteTask}
            id={element?.item.id} />
        )}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
        <Text style={styles.buttonText}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  bannerContainer: {
  },
  container: {
    flex: 1,
    backgroundColor: Theme.dark,
    paddingHorizontal: 10,
    position: 'relative'
  },
  greet: {
    width: '100%',
    marginTop: (StatusBar.currentHeight + 10),
    position: 'relative',
  },
  greetText: {
    fontFamily: 'BaiJamjuree_500Medium',
    fontSize: 32,
    color: Theme.white
  },
  dateText: {
    fontFamily: 'BaiJamjuree_300Light',
    fontSize: 15,
    color: Theme.gray,
  },
  input: {
    padding: 10,
    fontSize: 20,
    fontFamily: 'BaiJamjuree_300Light',
    color: Theme.white,
    borderWidth: 2,
    borderColor: 'transparent',
    borderBottomColor: Theme.gray,
    width: '90%',
  },
  inputContainer: {
    marginTop: 20,
  },
  button: {
    width: '100%',
    position: 'absolute',
    margin: 'auto',
    alignSelf: 'center',
    bottom: 10,
    paddingVertical: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.white,
    borderRadius: 9,
  },
  cardsContainer: {
    marginTop: 25,
    height: '100%',
    position: 'relative',
  }
});
