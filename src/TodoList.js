// rcs to get react template

import React from 'react';
import Todo from './Todo.js'

function TodoList ({todos, toggleTodo}) {
    return (
       // loop over todos
       todos.map(todo => {
           return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
       })

    );
}

export default TodoList;

// ADI:
// put into components folder, how do I reach it