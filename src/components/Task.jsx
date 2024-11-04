import { useState } from 'react';
import propTypes from 'prop-types';
import { formatDistanceStrict } from 'date-fns';

const Task = ({
  task,
  toggleTaskCompletion,
  removeTask,
  updateTaskTitle,
  toggleTimer,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(task.title);

  const activeEditClick = () => {
    if (!task.isDan) {
      setIsEditing(true);
    }
  };

  const handleSave = () => {
    if (inputValue.trim() !== '') {
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
    ? 'Invalid date'
    : `created ${formatDistanceStrict(createdDate, new Date(), { unit: 'minute' }).split(' ')[0]} ago`;

  const taskClassName = `${task.isDan ? 'completed' : 'active'} ${isEditing ? 'editing' : ''}`;
  const timerClassName = `${task.timer ? 'icon-pause' : 'icon-play'}`;

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(min).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

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
          <span className="description">
            <span className="title">{task.title}</span>
            <span className="timer">
              <button
                className={timerClassName}
                onClick={() => toggleTimer(task.id)}
              ></button>
              <span className="time-text created">{formatTime(task.time)}</span>
            </span>
          </span>
          <span className="created">{formattedDate}</span>
        </label>
        <button className="icon icon-edit" onClick={activeEditClick}></button>
        <button
          className="icon icon-destroy"
          onClick={() => removeTask(task.id)}
        ></button>
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
    created: propTypes.oneOfType([propTypes.string, propTypes.instanceOf(Date)])
      .isRequired,
    time: propTypes.number.isRequired,
    timer: propTypes.bool.isRequired,
    countUp: propTypes.bool.isRequired,
  }).isRequired,
  toggleTaskCompletion: propTypes.func.isRequired,
  removeTask: propTypes.func.isRequired,
  updateTaskTitle: propTypes.func.isRequired,
  toggleTimer: propTypes.func.isRequired,
};
export default Task;
