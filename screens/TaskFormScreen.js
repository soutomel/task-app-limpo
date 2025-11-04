import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useTasks } from '../src/TaskContext'; 

const TaskFormScreen = ({ navigation, route }) => {
  const taskId = route.params?.taskId; 
  const { addTask, updateTask, getTaskById } = useTasks();
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (taskId) {
      const taskToEdit = getTaskById(taskId);
      if (taskToEdit) {
        setDescription(taskToEdit.description);
      }
    }
  }, [taskId]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: taskId ? 'Editar Tarefa' : 'Nova Tarefa',
    });
  }, [navigation, taskId]);

  const handleSave = () => {
    if (description.trim() === '') {
      Alert.alert('Erro', 'A descrição da tarefa não pode estar vazia.');
      return;
    }

    if (taskId) {
      updateTask(taskId, description.trim());
      Alert.alert('Sucesso', 'Tarefa atualizada com sucesso!');
    } else {
      addTask(description.trim());
      Alert.alert('Sucesso', 'Tarefa adicionada com sucesso!');
    }
    
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Descrição da Tarefa:</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Ex: Estudar React Native"
        value={description}
        onChangeText={setDescription}
        multiline={true}
      />

      <Button
        title={taskId ? "SALVAR ALTERAÇÕES" : "CADASTRAR TAREFA"}
        onPress={handleSave}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
    borderRadius: 5,
    minHeight: 80,
    textAlignVertical: 'top',
  },
});

export default TaskFormScreen;