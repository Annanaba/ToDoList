import React from "react";

const Task = ({ task }) => {
    return (
        <li className={task.status}>
            <div className="view">
                <input className="toggle" type="checkbox" checked ={task.status === 'completed'} />
                <label>
                    <span className="description">{task.title}</span>
                    <span className="created">{task.created}</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
            </div>
            <input className="edit" type="text" value="Editing task"></input>
        </li>
    );
};

export default Task;
