import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

export const ToDoItem = (props) => {

    const [isHovering, setIsHovering] = useState(false)

    const handleHover = (isHover) => {
        setIsHovering(isHover)
    }

    return(
        <li className={"list-group-item d-flex align-items-center justify-content-between"} onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
            <span className="fs-3 py-2">{props.text}</span> 
            <button type="button" onClick={props.deleteHandler} class={`btn btn-outline-danger border-0 fs-4 ${isHovering ? "" : "d-none"}`} aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
            </li>
    );
}

ToDoItem.propTypes = {
    text: PropTypes.string,
    deleteHandler: PropTypes.func
}