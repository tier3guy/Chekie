import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

/* Internal Imports */
// components
import Theme from '../Themes';

/* External Imports */
import { BaiJamjuree_500Medium, BaiJamjuree_300Light, useFonts } from '@expo-google-fonts/bai-jamjuree';


export const Card = ({ task, date, handleDeleteTask, id }) => {
  let [fonts] = useFonts({ BaiJamjuree_500Medium, BaiJamjuree_300Light });
  if (!fonts) return null;

  return (
    <TouchableOpacity style={styles.container} onPress={() => {} } onLongPress={ () => handleDeleteTask(id) }>
      <Text style={[styles.cardTaskText, {
        textDecorationLine: (done) ? 'line-through' : 'none',
        textDecorationColor: '#f2f2f2'
      } ]}>{task}</Text>
      <Text style={styles.cardDateText}>{date}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.darkGray,
    width: '100%',
    minHeight: 100,
    borderRadius: 9,
    marginBottom: 25,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  cardTaskText: {
    fontSize: 18,
    fontFamily: 'BaiJamjuree_300Light',
    color: Theme.white,
    marginBottom: 40,
  },
  cardDateText: {
    position: 'absolute',
    bottom: 15,
    fontSize: 13,
    fontFamily: 'BaiJamjuree_300Light',
    color: Theme.white,
    marginLeft: 15,
    marginRight: 15,
  }
});
