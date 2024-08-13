import './App.css';
import React from 'react';
import TaskList from './components/TaskList/TaskList';
import TodoForm from './components/TaskForm/NewTaskForm';



function App() {
  

  return (
    <>
      <div className='todoapp'>
        <TodoForm/>
        <TaskList/>
      </div>
    </>
  );
};

export default App;
