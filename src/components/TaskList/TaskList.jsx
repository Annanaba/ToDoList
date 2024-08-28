import React from 'react';
import propTypes from "prop-types";
import Task from '../Task';
import './TaskList.css';

const TaskList = ({ tasks, removeTask, toggleTaskCompletion, updateTaskTitle}) => {
    return (
        <ul className="todo-list">
            {tasks.map(task => (
                <Task 
                key={task.id} 
                task={task} 
                removeTask={removeTask}  
                toggleTaskCompletion={toggleTaskCompletion} 
                updateTaskTitle={updateTaskTitle}/>
            ))}
        </ul>
    );
};


TaskList.propTypes = {
    tasks: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
            title: propTypes.string.isRequired,
            isDan: propTypes.bool.isRequired,
            created: propTypes.oneOfType([propTypes.string, propTypes.instanceOf(Date)])
        })
    ).isRequired,
    toggleTaskCompletion: propTypes.func.isRequired,
    removeTask: propTypes.func.isRequired,
    updateTaskTitle: propTypes.func.isRequired
};


export default TaskList;
