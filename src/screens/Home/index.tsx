import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { styles } from './styles';
import Header from '../../components/Header';
import Form from '../../components/Form';
import Status from '../../components/Status';
import TaskList from '../../components/TaskList';
import uuid from 'react-native-uuid';

export interface Task {
  id: string;
  done: boolean;
  description: string;
}
const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [description, setDescription] = useState<string>('');
  const handleAdd = () => {
    console.log(description);
    if (!description) {
      Alert.alert('Error', 'A descrição não pode ser vazia!');
      return;
    }
    const task: Task = {
      id: String(uuid.v4()),
      description,
      done: false,
    };
    setTasks((prevState) => [...prevState, task]);
    setDescription('')
  };
  const handleRemove =(id: string) =>{
      const task = tasks.find(t => t.id=== id)
     Alert.alert('Remover', `Remover a tarefa? \n${task?.description}`, [
       {
         text: 'Sim',
         onPress: () => {
           setTasks((current) =>
             current.filter((t) => {
               return t.id !== id;
             })
           );
           Alert.alert('Deletado!');
         },
       },
       {
         text: 'Não',
         style: 'cancel',
       },
     ]);
  }
  const handleUpdateStatus = (id: string) => {
    setTasks((prevState) => {
      const newTask = prevState.map((t) => {
        if (t.id === id) {
          return { ...t, done: !t.done };
        }
        return t;
      });
      return newTask;
    });
  };
  return (
    <View style={styles.main}>
      <Header />
      <View style={styles.content}>
        <Form
          setDescription={setDescription}
          onAdd={handleAdd}
          description={description}
        />
        <Status tasks={tasks} />
        <TaskList
          tasks={tasks}
          onUpdateStatus={handleUpdateStatus}
          onRemove={handleRemove}
          
        />
      </View>
    </View>
  );
};

export default Home;
