import React, {useState} from 'react';
import '../TaskForm/NewTaskForm.css'


function TodoForm({initialTask}) {

    // const [tasks, setTask] = useState(initialTask);
    // const [taskTitle, setTaskTitle] = useState('');

    // const addTask = () => {
    //     if (taskTitle.trim()){
    //      setTask([...tasks, {
    //         text: taskTitle
    //      }]);
    //      setTaskTitle('')
    //     }
    // }
    

    return (
        <header className='header'>
            <h1>todos</h1>
            <input 
             className='new-todo'
             placeholder='What needs to be done?' 
             autoFocus 
             />
        </header>
    );
}

export default TodoForm;

