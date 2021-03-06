import React from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';

export const TodoForm = () => (
  <View style={styles.form}>
    <TextInput
      style={styles.input}
      value={props.newTodo}
      onChangeText={props.handleChange}
    />
    <TouchableOpacity style={styles.button} onPress={props.handlePress}>
      <Text style={styles.buttonText}>Create</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  form: {
    flexDirection: 'row'
  },
  input: {
    flex: 0.7,
    fontSize: 24
  },
  button: {
    flex: 0.3,
    borderWidth: 1,
    height: 50,
    borderColor: 'blue',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  todos: {
    marginTop: 60
  },
  todo: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  todoText: {
    fontSize: 24
  }
});
