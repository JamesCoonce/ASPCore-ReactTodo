import 'isomorphic-fetch';
const baseUrl = 'https://localhost:44367/api/todos';

export const loadTodos = () => {
    return fetch(baseUrl)
        .then(res => res.json())
};

export const getTodo = (id) => {
    return fetch(`${baseUrl}/${id}`)
        .then(res => res.json())
};

export const createTodo = (todo) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: todo.title,
            description: todo.description,
            finished: todo.finished
        })
    }).then(res => res.json())
};

export const updateTodo = (todo) => {
    return fetch(baseUrl, {
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
    }).then(res => res.json())
};

export const deleteTodo = (id) => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'DELETE'
    }).then(loadTodos)
};