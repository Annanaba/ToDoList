import React, { useState } from "react";
import propTypes from "prop-types"; 
import { formatDistanceToNow } from 'date-fns';

const Task = ({ 
    task = {
        id:0,
        title: 'Без названия',
        isDan: false,
        created: new Date().toISOString()
    },
     toggleTaskCompletion = () => {}, 
     removeTask = () => {}, 
     updateTaskTitle = () => {}
    }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState(task.title);

 
    const activeEditClick = () =>  {
        if(!task.isDan){
            setIsEditing(true);
        }
    };

    
    const handleSave = () => {
        if (inputValue.trim() !== "") { 
            updateTaskTitle(task.id, inputValue.trim()); 
        }
        setIsEditing(false); 
    };


    const onChangeTitleHandler = (e) => setInputValue(e.target.value);


    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSave(); 
        }
    };

    const createdDate = new Date(task.created);
    const formattedDate = isNaN(createdDate)
        ? "Invalid date"
        : `created ${formatDistanceToNow(createdDate)} ago`;
    const taskClassName = `${task.isDan ? "completed" : "active"} ${isEditing ? "editing" : ""}`;

    return (
        <li className={taskClassName}>
            <div className="view">
                <input 
                    className="toggle" 
                    type="checkbox"  
                    checked={task.isDan} 
                    onChange={() => toggleTaskCompletion(task.id)}
                />
                <label>
                    <span className="description">{task.title}</span>
                    <span className="created">
                        {formattedDate}
                    </span>
                </label>
                <button className="icon icon-edit" onClick={activeEditClick}></button>
                <button className="icon icon-destroy" onClick={ () => removeTask(task.id)}></button>
            </div>
            {isEditing && (
                <input 
                    className="edit" 
                    type="text" 
                    value={inputValue} 
                    autoFocus
                    onChange={onChangeTitleHandler} 
                    onKeyDown={handleKeyDown} 
                    onBlur={handleSave} 
                />
            )}
        </li>
    );
};

Task.propTypes = {
    task: propTypes.shape({
        id: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
        title: propTypes.string.isRequired,
        isDan: propTypes.bool.isRequired,
        created: propTypes.oneOfType([propTypes.string, propTypes.instanceOf(Date)]).isRequired,
    }).isRequired,
    toggleTaskCompletion: propTypes.func.isRequired,
    removeTask: propTypes.func.isRequired,
    updateTaskTitle : propTypes.func.isRequired
}
export default Task;


