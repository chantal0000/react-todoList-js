import React, {useState, useRef} from 'react';
import './App.css';
import TodoList from "./TodoList";
// library to generate unique ids
import {v4 as uuidv4} from 'uuid';

function App() {
    //first state is empty because array because we have no todo's
    //todo's is an array of objects, all the todos
    //setTodos is a function that allows us to update the todos
    const [todos, setTodos] = useState([]);
    const todoNameRef = useRef();

    function toggleTodo(id) {
        const newTodos = [...todos];
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    }

    function handleAddTodo(e) {
        const name = todoNameRef.current.value
        if (name === '') return //if name is empty, return
        setTodos(prevTodos => {
            return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
        })
        todoNameRef.current.value = null;
    }

    function handleClearAll() {
        const newTodos = todos.filter(todo => !todo.complete)
        setTodos(newTodos)
    }

    return (<>
            {/*main section*/}
            <div className="Wrapper">
                <h1>my Todo List</h1>
                <div>{todos.filter(todo => !todo.complete).length} items left on my list</div>
                <div className="Input">
                    <input ref={todoNameRef} type="text"/>
                    <button onClick={handleAddTodo}>Add</button>
                    <button onClick={handleClearAll}>clear done todo's</button>
                </div>
                {/*list of todos*/}
                <div className="TodoList">
                <TodoList todos={todos} toggleTodo={toggleTodo}/>
                </div>
            </div>
        </>
    );

};

export default App;

// ADI:
// object destructuring
// uuid library keys, useful?
// localStorage, should I use it?
// useEffect, another hook inside react like useState