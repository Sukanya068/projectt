import React, {useState} from 'react';
//import './App.css';

function App() {
const [tasks, setTasks] = useState([
  { id: 1, name: "test"},
  {  id: 2, name: "test"}
])

  const renderTask = () => {
    return tasks.map((task, index) => {
      
      return (
        <li key={index}> 
        {task.id} : {task.name} 
        </li>
      )
      })
      
  }
  return (
    <div>
      <h1>Today</h1>

    <ul>{renderTask()}</ul>

    </div>
  );
}
export default App;