import React, { useState } from "react";
import { GrFormClose, GrFormEdit, GrFormCheckmark } from "react-icons/gr";
import { useTodoLayerValue } from "../context/TodoContext";

const Todo = ({ todo }) => {
  // eslint-disable-next-line
  const [{}, dispatch] = useTodoLayerValue();
  const [editable, setEditable] = useState(false);
  const [content, setContent] = useState(todo.content);
  const removeTodo = (id) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: id,
    });
  };

  const completedTodo = (id) => {
    dispatch({
      type: "COMPLETE_TODO",
      payload: id,
    });
  };

  const updateTodo = ({ todoId, newValue }) => {
    dispatch({
      type: "UPDATE_TODO",
      payload: {
        todoId,
        newValue,
      },
    });
  };

  return (
    <div className={todo.isCompleted ? "todo-row completed" : "todo-row"}>
      <div onClick={() => (editable ? "" : completedTodo(todo.id))}>
        {editable ? (
          <input
            type="text"
            value={content}
            className="todo-input-edit"
            onChange={(e) => setContent(e.target.value)}
          />
        ) : (
          todo.content
        )}
      </div>

      <div className="todo-icons">
        <GrFormClose
          className="todo-icon"
          onClick={() => removeTodo(todo.id)}
        />

        {editable ? (
          <GrFormCheckmark
            className="todo-icon"
            onClick={() => {
              updateTodo({ todoId: todo.id, newValue: content });
              setContent("");
              setEditable(false);
            }}
          />
        ) : (
          <GrFormEdit className="todo-icon" onClick={() => setEditable(true)} />
        )}
      </div>
    </div>
  );
};

export default Todo;
