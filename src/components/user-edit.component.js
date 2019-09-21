import React,{Component} from "react";
import axios from "axios";

export default class editUser extends Component{
    constructor(props){
        super(props);
        this.onChangefirstName = this.onChangefirstName.bind(this);
        this.onChangelastName = this.onChangelastName.bind(this);
        this.onChangeusername = this.onChangeusername.bind(this);
        this.onChangefullName = this.onChangefullName.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onChangeroles = this.onChangeroles.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            firstName: "",
            lastName:"",
            username:"",
            fullName:"",
            email:"", 
            password:"",
            role:[]
        }
    }
    componentDidMount(){
        axios.put('http://localhost:3000/users/register/'+this.props.match.params.id)
        .then(response => {
          this.setState({
            firstName:response.data.firstName,
            lastName:response.data.lastName,
            username:response.data.username,
            fullName:response.data.fullName,
            email:response.data.email, 
            password:response.data.password,
            roles:response.data.roles
          })   
        })
        .catch(function (error) {
          console.log(error);
        })
      this.setState({
          role:['student','manager','Teacher'],
          roles:'student'
      })
    }
    onChangefirstName(e){
        this.setState({
        firstName:e.target.value
        });
    }
    onChangelastName(e){
        this.setState({
        lastName:e.target.value
        });
    }
    onChangeusername(e){
        this.setState({
        username:e.target.value
        });
    }
    onChangefullName(e){
        this.setState({
        fullName:e.target.value
        });
    }
    onChangeemail(e){
        this.setState({
        email:e.target.value
        });
    }
    onChangepassword(e){
        this.setState({
        password:e.target.value
        });
    }
    onChangeroles(e){
        this.setState({
        roles:e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();

        const user = {
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            username:this.state.username,
            fullName:this.state.fullName,
            email:this.state.email, 
            password:this.state.password,
            roles:this.state.roles
    }
    console.log(user);
    axios.put('http://localhost:3000/users/register/'+this.props.match.params.id,user)
    .then(res => console.log(res.data));
    window.location = '/';
}
  render(){
      return(
        <div>
        <h3>Edit User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Roles: </label>
            <select ref="userInput"
                required
                className="form-control"
                value={this.state.roles}
                onChange={this.onChangeroles}>
                {
                  this.state.role.map(function(role) {
                    return <option 
                      key={role}
                      value={role}>{role}
                      </option>;
                  })
                }
            </select>
          </div>
          <div className="form-group"> 
            <label>First Name:</label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.firstName}
                onChange={this.onChangefirstName}
                />
          </div>
          <div className="form-group"> 
            <label>Last Name:</label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.lastName}
                onChange={this.onChangelastName}
                />
          </div>
          <div className="form-group"> 
            <label>User Name</label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeusername}
                />
          </div>
          <div className="form-group"> 
            <label>Full Name</label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.fullName}
                onChange={this.onChangefullName}
                />
          </div>
          <div className="form-group"> 
            <label>Email:</label>
            <input  type="email"
                required
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeemail}
                />
          </div>
          <div className="form-group"> 
            <label>Password:</label>
            <input  type="password"
                required
                className="form-control"
                value={this.state.password}
                onChange={this.onChangepassword}
                />
          </div>
  
          <div className="form-group">
            <input type="submit" value="Edit User" className="btn btn-primary" />
          </div>
        </form>
      </div>
      );
  }
}