import React, {useState} from 'react';
import propTypes from 'prop-types';
import '../TaskForm/NewTaskForm.css'


    
    const TodoForm = ({ addTask }) => {
        let [inputValue, setInputValue] = useState('');
    
        const handleKeyDown = (e) => {
            if (e.key === 'Enter') {
                const trimValue = inputValue.trim()
                if(trimValue !== ""){
                    addTask(trimValue);
                 }

                 setInputValue('');
            }
        }

        const onChangeHandler = (e) => setInputValue(e.target.value)
    
        return (
            <div className='header'>
            <h1>todos</h1>
            <input className='new-todo'
                type="text"
                value={inputValue}
                onChange={onChangeHandler}
                onKeyDown={handleKeyDown}
                placeholder="What needs to be done?"
                autoFocus
            />
            </div>
        );
    };

TodoForm.propTypes = {
    addTask: propTypes.func.isRequired,
};

export default TodoForm;

