import React,{useState} from "react";
import Task from "../Task";
import Footer from "../Footer/Footer";
import '../TaskList/TaskList.css';


const TaskList = () => {

    let initialTask = [
        { id: 1, title: 'Completed task', status: 'completed', created: 'created 17 seconds ago', isDan: true },
        { id: 2, title: 'Editing task', status: 'active', created: 'created 5 minutes ago',isDan: false },
        { id: 3, title: 'Active task', status: 'active', created: 'created 5 minutes ago',isDan: false  },
      ]; 

    //   let arr = useState(initialTask);
    //   let tasks = arr[0];
    //   let setTasks = arr[1];

      let [tasks, setTasks] = useState(initialTask);
      let [filter, setFilter] = useState('active')


      function removeTask(id) {
        let filterTask = tasks.filter((t) => t.id !== id )
        setTasks(filterTask);
      }

      let tasksFortodolist = tasks;
      if(filter === "completed"){
        tasksFortodolist = tasks.filter( t => t.isDan === true);
      }
      if(filter === "active"){
        tasksFortodolist = tasks.filter( t => t.isDan === false);
      }
      


      
    return (
        <div>
        <ul className="todo-list">
            {tasksFortodolist.map(task => (
                <Task key={task.id} task={task} removeTask={removeTask}  />
            )) }
        </ul>
        <Footer setFilter={setFilter} />
        </div>
    );
};

export default TaskList;