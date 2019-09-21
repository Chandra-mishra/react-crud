//import React,{Component} from 'react';
import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Navbar from "./components/navbar.component";
import userList from "./components/user-list.component";
import EditUser from "./components/user-edit.component";
import createUser from "./components/create-user.component";
//import Person from './Person/Person';
// class App extends Component{
//   state = {
//     persons: [
//       {name :"Chandra" , age : 24},
//       {name :"Abhay" ,age: 22},
//       {name: "Ajay" , age: 12}
//     ],
//     otherState: 'some other value'
//   }
//   onChangeHandler = (event)=>{
//     this.setState({
//       persons: [
//       {name :"Chandra" , age : 24},
//       {name :event.target.value ,age: 22},
//       {name: "Ajay" , age: 12}
//       ]
//      })
//   }
//   switchNameHandler = (someValue)=>{
//    //Don't do this.state.persons[0].name = "Mishra";
//    this.setState({
//     persons: [
//       {name :someValue , age : 24},
//       {name :"Abhay" ,age: 22},
//       {name: "Ajay" , age: 11}
//     ]
//    })
//   }
//   render(){
//     const style = {
//       backgroundColor:'white',
//       font: 'inherit',
//       border:'1x solid blue',
//       padding: '8px'
//     };
//     return (
//       <div className = "App">
//         <h1>Hi, i am a react app</h1>
//         <button onClick = {this.switchNameHandler.bind(this,"Mishra")}>switch name</button>
//         <p>this is really working!!!</p>
//         <Person 
//         name = {this.state.persons[0].name} 
//         age = {this.state.persons[0].age}/>
//         <Person 
//         name = {this.state.persons[1].name} 
//         age = {this.state.persons[1].age}
//         click = {this.switchNameHandler.bind(this,"Prashad")}
//         changed = {this.onChangeHandler}>bdvwhc</Person>
//         <Person 
//         name = {this.state.persons[2].name} 
//         age = {this.state.persons[2].age}/>
//       </div>
//     );
//   }
// } 
function App(){
  return (
    <Router>
      <div className = "container">
      <Navbar>
    <br />
    </Navbar>
    <Route path ='/' exact component = {userList} />
    <Route path = '/edit/:id' component = {EditUser} />
    <Route path = '/create' component = {createUser} />
   </div>
   </Router>
  );
    
  }
export default App;
