import React, { useState } from "react";
import { useSelector } from "react-redux";

import tasks from "../redux/states";

function Filter() {
  let task = useSelector((state) => state);
  const [filterCompleted, setFilterCompleted] = useState(task.isCompleted);
  return (
    <div style={{ display: "flex", justifyContent: "left" }}>
      <h3>Task completed</h3>{" "}
      <input
        type="checkbox"
        onClick={(e) => {
          setFilterCompleted(!filterCompleted);
        }}
      />
    </div>
  );
}

export default Filter;