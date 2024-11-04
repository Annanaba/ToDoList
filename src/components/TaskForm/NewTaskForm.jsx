import { useEffect, useRef, useState } from 'react';
import propTypes from 'prop-types';
import '../TaskForm/NewTaskForm.css';

const TodoForm = ({ addTask, setAllTime }) => {
  let [inputValue, setInputValue] = useState('');
  const [min, setMin] = useState(null);
  const [sec, setSec] = useState(null);

  const secRef = useRef(null);
  const taskRef = useRef(null);

  const handleKeyDownMin = (e) => {
    if (e.key === 'Enter') {
      secRef.current.focus();
    }
  };

  const handleKeyDownSec = (e) => {
    if (e.key === 'Enter') {
      taskRef.current.focus();
    }
  };

  const handleInputChangeMin = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setMin(value === '' ? null : Number(value));
    } else {
      console.log('Введите положительное число');
    }
  };

  const handleInputChangeSec = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setSec(value === '' ? null : Number(value));
    } else {
      console.log('Введите положительное число');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const trimValue = inputValue.trim();
      if (trimValue !== '') {
        addTask(trimValue);
      }

      setInputValue('');
      setSec(null);
      setMin(null);
    }
  };

  const countAllTime = () => {
    const minuteSeconds = min ? parseInt(min, 10) * 60 : 0;
    const seconds = sec ? parseInt(sec, 10) : 0;
    return minuteSeconds + seconds;
  };

  useEffect(() => {
    const totalTime = countAllTime();
    setAllTime(totalTime);
  }, [min, sec]);

  const onChangeHandler = (e) => setInputValue(e.target.value);

  return (
    <div className="header">
      <h1>todos</h1>
      <form className="new-todo-form">
        <input
          className="new-todo"
          ref={taskRef}
          type="text"
          value={inputValue}
          onChange={onChangeHandler}
          onKeyDown={handleKeyDown}
          placeholder="What needs to be done?"
          autoFocus
        />
        <input
          className="new-todo-form__timer"
          type="number"
          placeholder="Min"
          onChange={handleInputChangeMin}
          value={min === null ? '' : min}
          onKeyDown={handleKeyDownMin}
        />
        <input
          type="number"
          ref={secRef}
          className="new-todo-form__timer"
          placeholder="Sec"
          onChange={handleInputChangeSec}
          value={sec === null ? '' : sec}
          onKeyDown={handleKeyDownSec}
        />
      </form>
    </div>
  );
};

TodoForm.propTypes = {
  addTask: propTypes.func.isRequired,
  setAllTime: propTypes.number.isRequired,
};

export default TodoForm;
