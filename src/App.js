import ListTask from './Components/ListTask/ListTask';
import AddTask from './Components/AddTask/AddTask';
import 'bootstrap/dist/css/bootstrap.css';
import React , {useState} from 'react';
import "./App.css";

function App() {
  
  return (
    <div className="App">
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
