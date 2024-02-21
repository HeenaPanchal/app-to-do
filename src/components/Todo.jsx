import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import TodoForm from './TodoForm';

const Todo = ({ todos, completeTodo, removeTodo, editTodo }) => {
  const [edit, setEdit] = useState({ id: null, value: '' });

  const submitUpdate = value =>{
    editTodo(edit.id , value)
    setEdit({id:null , value:''})
  }

  if(edit.id){
    return <TodoForm edit={edit} onSubmit={submitUpdate}/>
  }
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.value}
      </div>
      <div className="icons">
        <FiEdit onClick={() => setEdit({id:todo.id,value:todo.value})} className="edit-icon" />
        <MdDeleteForever
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;
