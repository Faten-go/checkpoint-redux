export const ADD_TASK = "ADD_TASK";
export const DELETE = "DELETE";
export const UPDATE = "UPDATE";
export const FILTER = "FILTER";

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const deleteTask = (taskid) => {
  return {
    type: DELETE,
    payload: taskid,
  };
};

export const updateTask = (task) => {
  return {
    type: UPDATE,
    payload: task,
  };
};