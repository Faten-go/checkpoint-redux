import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/actions";
import { useState } from "react";
import { updateTask } from "../redux/actions";

function Task({ task }) {
  const dispatch = useDispatch();
  const [ edit, setedit ] = useState(false);
  const [ name, setname ] = useState(task.name);
  const [ completed, setCompleted ] = useState(task.isCmpleted);
  
  const getStyle = () => {  
    if (completed) {
      return {
        textDecoration: "line-through",
        display: "flex",
        justifyContent: "left",
        marginLeft: 20,
      };
    } else {
      return {
        textDecoration: "none",
        display: "flex",
        justifyContent: "left",
        marginLeft: 20,
      };
    }
  };
  return (
    <div>
      <div className="row mx-2">
        <div> Id: {task.id.length > 1 ? task.id[2] : task.id} </div>
        <div className="col" style={getStyle()}>
          {" "}
            <input
              type="checkbox"
              onClick={() => {
                setCompleted(!completed);
            }}
          />
          {edit ? (
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          ) : (
            <h3>{task.name}</h3>
          )}
        </div>
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            dispatch(
              updateTask({
                ...task,
                name: name,
              })
            );
            if (edit) {
              setname(task.name);
            }
            setedit(!edit);
          }}
        >
          {" "}
          {edit ? "Update" : "Edit"}{" "}
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(deleteTask(task.id))}
        >
          {" "}
          Delete{" "}
        </button>
      </div>
      <br/>
    </div>
  );
}

export default Task;