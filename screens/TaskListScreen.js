import React from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, SafeAreaView } from 'react-native';
import TaskItem from '../components/TaskItem'; 
import { useTasks } from '../src/TaskContext'; 

const TaskListScreen = ({ navigation }) => {
  const { tasks, loading } = useTasks();

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Carregando tarefas salvas...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      
      {tasks.length === 0 ? (
        <View style={styles.centered}>
          <Text style={styles.emptyText}>Nenhuma tarefa encontrada!</Text>
          <Text style={styles.emptyTextHint}>Clique no '+' abaixo para adicionar uma.</Text>
        </View>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TaskItem task={item} navigation={navigation} />
          )}
          contentContainerStyle={styles.listContent}
        />
      )}

      {/* Botão Flutuante de Adicionar */}
      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => navigation.navigate('TaskForm')} 
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    padding: 20,
    paddingBottom: 80,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
    marginBottom: 5,
  },
  emptyTextHint: {
    fontSize: 14,
    color: '#aaa',
  },
  addButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor: '#007AFF',
    borderRadius: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

export default TaskListScreen;