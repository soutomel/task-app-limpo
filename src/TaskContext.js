import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TaskContext = createContext();
const STORAGE_KEY = '@TaskApp:tasks';

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Carrega as tarefas salvas
  const loadTasks = async () => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      if (data !== null) {
        setTasks(JSON.parse(data));
      }
    } catch (error) {
      console.error("Erro ao carregar tarefas:", error);
    } finally {
      setLoading(false);
    }
  };

  // Salva a lista de tarefas atualizada
  const saveTasks = async (newTasks) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newTasks));
      setTasks(newTasks);
    } catch (error) {
      console.error("Erro ao salvar tarefas:", error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  // Funções CRUD
  const addTask = (description) => {
    const newTask = {
      id: Date.now(),
      description,
      completed: false,
    };
    saveTasks([newTask, ...tasks]);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    saveTasks(updatedTasks);
  };

  const getTaskById = (id) => {
    return tasks.find(task => task.id === id);
  };

  const updateTask = (id, newDescription) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, description: newDescription } : task
    );
    saveTasks(updatedTasks);
  };

  const contextValue = {
    tasks,
    loading,
    addTask,
    deleteTask,
    updateTask,
    getTaskById,
  };

  return (
    <TaskContext.Provider value={contextValue}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};