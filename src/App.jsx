import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import TodoForm from './components/TaskForm/NewTaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('active');
  const [allTime, setAllTime] = useState(0);

  const toggleTimer = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, timer: !task.timer, countUp: task.time === 0 }
        : task,
    );
    setTasks(updatedTasks);
  };

  useEffect(() => {
    const intervalIds = tasks
      .filter((task) => task.timer && !task.isDan)
      .map((task) => {
        const intervalId = setInterval(() => {
          setTasks((prevTasks) =>
            prevTasks.map((t) =>
              t.id === task.id
                ? {
                    ...t,
                    time: t.countUp ? t.time + 1 : Math.max(t.time - 1, 0),
                    timer: t.time <= 0 && !t.countUp ? false : t.timer,
                  }
                : t,
            ),
          );
        }, 1000);
        return intervalId;
      });

    return () => intervalIds.forEach(clearInterval);
  }, [tasks]);

  const removeTask = (id) => {
    const filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  };

  const clearCompletedTask = () => {
    const activeTasks = tasks.filter((t) => !t.isDan);
    setTasks(activeTasks);
  };

  const addTask = (trimValue) => {
    const newTask = {
      id: uuidv4(),
      title: trimValue,
      status: 'active',
      created: new Date(),
      isDan: false,
      time: allTime,
      timer: false,
      countUp: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isDan: !task.isDan } : task,
    );
    setTasks(updatedTasks);
  };

  const updateTaskTitle = (id, newTitle) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task,
      ),
    );
  };

  const activeTaskCount = tasks.filter((t) => !t.isDan).length;

  const getFilteredTasks = () => {
    if (filter === 'completed') {
      return tasks.filter((t) => t.isDan === true);
    }
    if (filter === 'active') {
      return tasks.filter((t) => t.isDan === false);
    }
    return tasks;
  };

  return (
    <div className="todoapp">
      <TodoForm addTask={addTask} setAllTime={setAllTime} />
      <TaskList
        tasks={getFilteredTasks()}
        removeTask={removeTask}
        toggleTaskCompletion={toggleTaskCompletion}
        updateTaskTitle={updateTaskTitle}
        allTime={allTime}
        toggleTimer={toggleTimer}
      />
      <Footer
        setFilter={setFilter}
        clearCompletedTask={clearCompletedTask}
        activeTaskCount={activeTaskCount}
        filter={filter}
      />
    </div>
  );
};

export default App;
