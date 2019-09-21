import React,{Component} from "react";
import Axios from "axios";
import {Link} from "react-router-dom";

const User = props => (
    <tr>
      <td>{props.users.roles}</td>
      <td>{props.users.firstName}</td>
      <td>{props.users.lastName}</td>
      <td>{props.users.username}</td>
      <td>{props.users.fullName}</td>
      <td>{props.users.email}</td>
      <td>{props.users.password}</td>
      <td>
        <Link to={"/edit/"+props.users._id}>edit</Link> | <a href="#" onClick={() => { props.deleteUser(props.users._id) }}>delete</a>
      </td>
    </tr>
  )
export default class editUser extends Component{
    constructor(props){
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
        this.state = {
            user:[]
        }
    }
    componentDidMount(){
        Axios.get("http://localhost:3000/users/register")
        .then(response=>{
            this.setState({
                user: response.data});
        })
        .catch((error)=>{
          console.log(error);
        })
    }
    deleteUser(id){
        Axios.delete("http://localhost:3000/users/register/"+id)
        .then(res=>{
            console.log(res.data);
        })
        this.setState({
            user:this.state.student.filter(el=>el._id !== id)
        })
    }
    userList() {
        return this.state.user.map(currentuser => {
          return <User users={currentuser} deleteUser={this.deleteUser} key={currentuser._id}/>;
        })
      }
  render(){
      return(
        <div>
        <h3>List User</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
             <th>Roles</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>user Name</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            { this.userList() }
          </tbody>
        </table>
      </div>
      );
  }
}