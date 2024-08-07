import './App.css';
import React from 'react';
import TaskList from './components/TaskList/TaskList';
import TodoForm from './components/TaskForm/NewTaskForm';
import Footer from './components/Footer/Footer'


function App() {
  

  return (
    <>
      <div className='todoapp'>
        <TodoForm/>
        <TaskList/>
        <Footer/>
      </div>
    </>
  );
};

export default App;
