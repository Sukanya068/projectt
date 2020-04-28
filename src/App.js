import React, { useState } from "react";
import "./App.css";

import firebase from "./firebase";
//import LoginPage from './components/LoginPage'


import {Button,Row,Container,Col,Form,Navbar,Table} from 'react-bootstrap';

function App() {
  

  const [tasks, setTasks] = React.useState([]);
  const [newTask, setnewTask] = React.useState('');
  const [updateTask, setupdateTask] = React.useState('');

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      db.collection("tasks")
            .onSnapshot(function(data) {
              console.log(data)
              setTasks(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
              
            });
     
    };
    fetchData();
  }, []);

  const onCreate = () => {
    const db = firebase.firestore();
    db.collection("tasks").add({ name: newTask });
    
   
    
  };

  function onDelete (id) {
    const db = firebase.firestore()
    db.collection('tasks').doc(id).delete()
  }

  const onUpdate = (id) => {
    const db = firebase.firestore()
    db.collection('tasks').doc(id).set({name:updateTask})
  }

  return (
    <div>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      HOME
    </Navbar.Brand>
    <Navbar.Brand href="#ABOUT">
      ABOUT
    </Navbar.Brand>
    </Navbar>
    <br></br>
    <Container>
    <Row>
    <Col>
    <p class="monospace" align = "center"> My DIARY 
    <img src="https://lh3.googleusercontent.com/4voemWkUtUwsbjI9MivVgElvp_sH15u5HC2a2Gtbo8otw21Nhjnv8NhzfHXMJBmbuf0" height="100" width="100"></img> </p>
    <Form>
    <Form.Group controlId="formBasicCheckbox">
    <Form.Control type="text"   value={newTask}  onChange={e => setnewTask(e.target.value)} />     
    </Form.Group>
    <Button variant="success" size="lg" block onClick={onCreate}>ADD</Button>
    </Form>
    </Col>
    </Row>
    <br></br>
    
    <Row>
      <Col>
      <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>No</th>
      <th>Story</th>
      <th>Delete</th>
      <th>Update</th>
     
    </tr>
  </thead>
  <tbody>
  
      {tasks.map(spell => (
        <tr key={spell.id } >
          <td>{spell.id}</td>

      <td >{spell.name}</td>

          <td>  <Button variant="outline-danger" onClick={() => onDelete(spell.id)}>Delete</Button></td>
          <td>
          <input  type="text" className=" "  placeholder={spell.name}  onChange={e => setupdateTask(e.target.value)} placeholder={spell.name}></input>
          <Button className="text-white ml-4" variant="outline-primary" onClick={() => onUpdate(spell.id)}>Update</Button>
          </td>
         </tr >
      ))}
    
    
  
  </tbody>
</Table>
      
      </Col>
    </Row>
    </Container>

      
    </div>
  );
}

export default App;
