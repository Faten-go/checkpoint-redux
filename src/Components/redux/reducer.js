import { ADD_TASK, UPDATE, DELETE } from "./actions";
import { tasks } from "./states";

export const reducer = (state = tasks, action) => {
  let newTasks;
  switch (action.type) {
    case ADD_TASK:
      newTasks = [...state];
      newTasks.push(action.payload);

      return newTasks;

    case UPDATE:
      newTasks = [...state];
      let index = -1;
      for (let i = 0; i < newTasks.length; i++) {
        index++;
        if (newTasks[i].id === action.payload.id) {
          break;
        }
      }
      if (index !== -1) {
        newTasks[index] = action.payload;
        return newTasks;
      }
      break;
    case DELETE:
      newTasks = [...state];
      newTasks = newTasks.filter((tasks) => tasks.id !== action.payload);
      return newTasks;

    default:
  }
  return state;
};