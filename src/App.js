import React, {useState, useEffect, useReducer} from 'react'
import TodoList from './TodoList'
import {Context} from "./Context";
import reducer from "./reducer";

export default function App() {
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todo')) || []);
  const [value, setValue] = useState('');

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(state));
  }, [state]);

  const addItem = (e) => {
    if(e.key === 'Enter'){
      dispatch({
        type: 'add',
        payload: value
      });
      setValue('');
    }
  };

  return (
    <Context.Provider value={{
      dispatch
    }}>
      <div className="container">
        <h1>Todo app</h1>

          <div className="input-field">
            <input type="text" onChange={(e) => setValue(e.target.value)} value={value} onKeyPress={addItem} />
            <label>Todo name</label>
          </div>

          <TodoList todos={state} />
      </div>
    </Context.Provider>
  );
}