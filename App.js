import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { TaskProvider } from './src/TaskContext'; 
import TaskListScreen from './screens/TaskListScreen';
import TaskFormScreen from './screens/TaskFormScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TaskProvider> 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TaskList">
          
          <Stack.Screen 
            name="TaskList" 
            component={TaskListScreen} 
            options={{ title: 'Minhas Tarefas', headerShown: false }} 
          />
          
          <Stack.Screen 
            name="TaskForm" 
            component={TaskFormScreen} 
            options={{ title: 'Detalhes da Tarefa' }}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}