import React, { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([]);

    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {

        if(newTask !== "") {
        setTasks(t => [...tasks, newTask]); // ...tasks copia o array tasks e cria um novo mantendo os dados antigos
        setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((task, i) => i !== index); // filter cria um novo array com os elementos que passam no teste da função fornecida
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        
        if (index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {

        if (index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="to-do-list">
            <h1>To Do List</h1>

            <div>
                <input
                    type="text"
                    placeholder="Enter a new task..."
                    value={newTask}
                    onChange={handleInputChange}
                />

                <button className="add-button" onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskUp(index)}>
                            ⬆️
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskDown(index)}>
                            ⬇️
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;
