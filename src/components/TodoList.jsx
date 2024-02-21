import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodo = [todo, ...todos];

    setTodos(newTodo);
  };

  const completeTodo = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  const editTodo = (id,newTodo) =>
  {
    setTodos(prev => prev.map((item) => item.id===id ? newTodo : item))
  }

  const removeTodo = (id) => {
    const updatedArr = todos.filter((todo) => todo.id !== id);
    setTodos(updatedArr);
  };
  
  return (
    <>
      <h1>To do App</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
    </>
  );
};

export default TodoList;
