import React from "react";
import Task from "../Task";
import '../TaskList/TaskList.css';

const TaskList = () => {
    const tasks = [
        { id: 1, title: 'Completed task', status: 'completed', created: 'created 17 seconds ago', isEditing: false },
        { id: 2, title: 'Editing task', status: 'editing', created: 'created 5 minutes ago', isEditing: true },
        { id: 3, title: 'Active task', status: 'active', created: 'created 5 minutes ago', isEditing: false },
      ];
      
    return (
        <ul className="todo-list">
            {tasks.map(task => (
                <Task key={task.id} task={task}/>
            )) }
        </ul>
    );
};

export default TaskList;