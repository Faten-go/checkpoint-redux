import logo from './logo.svg';
import './App.css';
//import components
import Task from './Components/Task/Task'
import ListTask from './Components/ListTask/ListTask'
import AddTask from './Components/AddTask/AddTask'

function App() {
  return (
    <div className="App">
      TO DO App     
       <AddTask/>
      <ListTask/>
      <Task/>

    </div>
  );
}

export default App;
