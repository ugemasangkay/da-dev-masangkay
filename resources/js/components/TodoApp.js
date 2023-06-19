import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('/api/');
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTodo.trim() === '') {
      setErrorMessage('Please enter a description');
      return;
    }

    addTodo();
  };

  const addTodo = async () => {
    if (newTodo.trim() === '') {
      return;
    }

    try {
      const response = await axios.post('/api/todos', {
        title: newTodo.trim(),
      });

      fetchTodos();
      setNewTodo('');
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/api/todos/${id}`);
      fetchTodos();
    } catch (error) {
      console.error(error);
    }
  };

  const toggleComplete = async (id, completed) => {
    try {
      await axios.put(`/api/todos/${id}`, {
        completed: !completed,
      });


      fetchTodos();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container my-4">
        <h1>Todo List</h1>
        <div className="mb-3">
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="form-control"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                required
            />
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
            <button type="submit" className="btn btn-primary mt-2">
                Add Todo
            </button>
        </form>
        </div>
        <table className="table">
            <thead>
                <tr>
                    <th>To-do</th>
                    <th>Status</th>
                    <th>Last Update</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo) => (
                    <tr key={todo.id}>
                        <td style={{
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        }}>
                            {todo.title}
                        </td>
                        <td>
                        <span className={todo.completed ? 'completed' : ''}>
                            {todo.completed ? 'Completed' : 'Incomplete'}
                        </span>
                    </td>
                    <td>{todo.updated_at}</td>
                    <td>
                    <button
                        className={`btn mx-2 btn-sm ${todo.completed ? 'btn-success' : 'btn-warning'}`}
                        onClick={() => toggleComplete(todo.id, todo.completed)}
                    >
                        {todo.completed ? 'Completed' : 'Incomplete'}
                    </button>
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteTodo(todo.id)}
                    >
                        Delete
                    </button>
                </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};

export default TodoApp;