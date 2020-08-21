import React, {useState, useContext} from 'react'
import {Context} from "./Context";

export default function TodoItem({title, id, completed}) {
  const {dispatch} = useContext(Context);

  const classes = ['todo'];

  if(completed){
    classes.push('completed');
  }

  return (
    <li className={classes.join(' ')}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch({
            type: 'toggle',
            payload: id
          })}
        />
        <span>{title}</span>

        <i
          className="material-icons red-text"
          onClick={() => dispatch({
            type: 'delete',
            payload: id
          })}
        >
          delete
        </i>
      </label>
    </li>
  )
}