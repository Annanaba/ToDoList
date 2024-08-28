import React from "react";
import propTypes from "prop-types";
import './Footer.css'
import Filters from "../Filters/TaskFilter";

const Footer = ({setFilter, clearCompletedTask, activeTaskCount, filter}) => {
    return (
        <footer className="footer">
            <span className="todo-count">{activeTaskCount} items left</span>
            <Filters  setFilter = {setFilter} filter={filter}/>
            <button className="clear-completed" onClick={clearCompletedTask}>Clear completed</button>
        </footer>
    );
};

Footer.propTypes = {
    setFilter: propTypes.func.isRequired,
    clearCompletedTask: propTypes.func.isRequired,
    activeTaskCount: propTypes.number.isRequired,
    filter: propTypes.oneOf(['all', 'active', 'completed']).isRequired
};

export default Footer;