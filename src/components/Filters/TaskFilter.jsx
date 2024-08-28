import React from "react";
import propTypes from "prop-types";
import './Filters.css';


const Filters = ({setFilter,filter }) => {

     const onAllClickHandler = () => setFilter('all');
     const onActiveClickHandler = () => setFilter('active');
     const onCompletedClickHandler = () => setFilter('completed');

    return (
        <ul className="filters">
            <li>
                <button className={filter === 'all' ? 'selected' : ''} 
                onClick={onAllClickHandler}>All</button>
            </li>
            <li>
                <button className = {filter === 'active' ? 'selected' : ''}
                onClick ={onActiveClickHandler}>Active</button>
            </li>
            <li>
                <button className = {filter === 'completed' ? 'selected' : ''} 
                onClick={onCompletedClickHandler}>Completed</button>
            </li>
        </ul>
    );
};

Filters.propTypes = {
    setFilter: propTypes.func.isRequired,
    filter: propTypes.oneOf(['all', 'active', 'completed']).isRequired
};

export default Filters;