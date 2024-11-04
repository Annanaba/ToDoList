import propTypes from 'prop-types';
import Task from '../Task';
import './TaskList.css';

const TaskList = ({
  tasks,
  removeTask,
  toggleTaskCompletion,
  updateTaskTitle,
  allTime,
  toggleTimer,
}) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          removeTask={removeTask}
          toggleTaskCompletion={toggleTaskCompletion}
          updateTaskTitle={updateTaskTitle}
          allTime={allTime}
          toggleTimer={toggleTimer}
        />
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
      time: propTypes.number.isRequired,
      timer: propTypes.bool.isRequired,
      countUp: propTypes.bool.isRequired,
      created: propTypes.oneOfType([
        propTypes.string,
        propTypes.instanceOf(Date),
      ]),
    }),
  ).isRequired,
  allTime: propTypes.number,
  toggleTaskCompletion: propTypes.func.isRequired,
  removeTask: propTypes.func.isRequired,
  updateTaskTitle: propTypes.func.isRequired,
  toggleTimer: propTypes.func.isRequired,
};

export default TaskList;
