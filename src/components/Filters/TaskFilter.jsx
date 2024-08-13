import React from "react";
import './Filters.css';

const Filters = ({setFilter}) => {
    return (
        <ul className="filters">
            <li>
                <button className="selected" onClick={ () => setFilter('all')}>All</button>
            </li>
            <li>
                <button onClick={ () => setFilter('active')}>Active</button>
            </li>
            <li>
                <button onClick={ () => setFilter('completed')}>Completed</button>
            </li>
        </ul>
    );
};

export default Filters;