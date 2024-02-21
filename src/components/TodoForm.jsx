import React, { useState ,useRef,useEffect} from 'react';

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const inputRef = useRef(null)

  useEffect(() =>{
    inputRef.current.focus()
  })
  //using this function i can write into the form
  //setInput is function which is responsible to change the state
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  //input is state here and setInput is function to change its state

  // this function is used to prevent the default behaviour of the button
  //abriviation of e is event handler
  //to stop the default behaviour of the form i have used this function
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      //when i will submit the form that time i also want to add to do...
      //to each todo list give id which is generated randomly and
      //give value => state =>initially empty string
      id: Math.floor(Math.random() * 10000),
      value: input, // state
    });

    setInput(''); //when i submit the form the state value should be ''
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (<><input
        type="text"
        placeholder="Update to do"
        value={input} //input state here
        name="text"
        className="todo-input edit"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button edit">Update</button></>):(<><input
        type="text"
        placeholder="Add to do"
        value={input} //input state here
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button">Add todo</button></>) }
    </form>
  );
};

export default TodoForm;
