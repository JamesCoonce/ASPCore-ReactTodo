﻿import 'isomorphic-fetch';
const baseUrl = 'https://localhost:44367/api/todos';

export const loadTodos = async () => {
    return await fetch(baseUrl)
        .then(res => res.json());
    return json;
};

export const getTodo = async (id) => {
    return await fetch(`${baseUrl}/${id}`)
        .then(res => res.json());
        return json;
};

export const createTodo = async (todo) => {
    return await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: todo.title,
            description: todo.description,
            finished: todo.finished
        })
    }).then(res => res.json());
    
};

export const updateTodo = async (todo) => {
    return await fetch(`${baseUrl}/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: todo.id,
            title: todo.title,
            description: todo.description,
            finished: todo.finished
        })
    });
};

export const deleteTodo = async (id) => {
    return await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE'
    }).then(loadTodos);
};