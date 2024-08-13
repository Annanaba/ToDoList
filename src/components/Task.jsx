import React from "react";

const Task = ({ task,removeTask }) => {
    return (
        <li className={task.status}>
            <div className="view">
                <label>
                <input className="Checbox" type="checkbox" checked ={task.isDan} />
                    <span className="description">{task.title}</span>
                    <span className="created">{task.created}</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy" onClick={ () => removeTask(task.id)}></button>
            </div>
            <input className="edit" type="text" value="Editing task"></input>
            {}
        </li>
    );
};

export default Task;
