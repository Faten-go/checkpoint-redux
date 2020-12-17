import React from "react";
import { useState } from "react";
import { addTask } from "../redux/actions";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { tasks } from "../redux/states";

function AddTask() {
  const [name, setname] = useState();
  let dispatch = useDispatch();

  return (
    <div>
      <div className="row m-2">
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          type="text"
          className=" col form-control"
        />
        <button
          className=" btn btn-primary mx-2 "
          onClick={() => {
            dispatch(
              addTask({
                id: uuid(),
                name: name,
              })
            );
            setname("");
          }}
        >
          {" "}
          ADD
        </button>
      </div>
    </div>
  );
}

export default AddTask;