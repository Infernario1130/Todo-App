import React from 'react';

export function TodoRenderer({todos}) {
    
    return (
        <>
        {todos.map(function(todo) {
            return (
                <div key={todo.id}>
                <p>ID:{todo.id}</p>
                <p>Title:{todo.title}</p>
                <p>Description:{todo.description}</p>
               
                </div>
            )
        })}
        
        </>
    )
}