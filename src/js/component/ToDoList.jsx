import React, { useEffect, useState } from "react";
import { ToDoItem } from "./ToDoItem";

const defaultTodos = ["Make the bed", "Wash my hands", "Eat", "Walk the dog"]

export const ToDoList = () => {

    const [toDoList, setToDoList] = useState([])

    const handleDelete = (item) => {
        const newTodoList = toDoList.filter((todo) => todo !== item);
        localStorage.setItem("todos", JSON.stringify(newTodoList))
        setToDoList(newTodoList);
    }

    const handleAddTodo = (e) => {
        if(e.code == "Enter") {
            if(e.target.value !== "") {
                const newTodoList = [...toDoList, e.target.value]
                localStorage.setItem("todos", JSON.stringify(newTodoList))
                setToDoList([...toDoList, e.target.value])

                e.target.value = ""
            } else {
                alert("No puedes agregar un elemento vacío")
            }
        }
    }

    useEffect(() => {
        if(localStorage.getItem("todos") == null) {
            localStorage.setItem("todos", JSON.stringify(defaultTodos))
            setToDoList(defaultTodos)
        } else {
            setToDoList(JSON.parse(localStorage.getItem("todos")))
        }
    }, [])

    return (
        <ul className="list-group col-5">
            <li className="list-group-item"><input type="text" className="form-control" placeholder="Write new todo" onKeyDown={(e) => handleAddTodo(e)} /></li>
            {toDoList !== null && toDoList.map((todo) => {
                return <ToDoItem key={todo} text={todo} deleteHandler={() => handleDelete(todo)}/>
            })}
            <li className="list-group-item">{toDoList.length > 0 ? `${toDoList.length} items left` : `No to Do's, add a new one`}</li>
        </ul>
    );
}