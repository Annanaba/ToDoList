import React from "react";
import './Footer.css'
import Filters from "../Filters/TaskFilter";

const Footer = ({setFilter}) => {
    return (
        <footer className="footer">
            <span className="todo-count">1 items left</span>
            <Filters  setFilter = {setFilter}/>
            <button className="clear-completed">Clear completed</button>
        </footer>
    );
};

export default Footer;