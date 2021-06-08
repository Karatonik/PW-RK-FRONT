import axios from 'axios';
import React, { Component } from 'react';

export default class Registration extends Component {
     
    state={
        errorMessage: '',
        successMessage:''
    }
    handleSubmit=e=>{
        e.preventDefault();
        const data ={
            login:this.login,
            password:this.password,
     
        }
        const config ={
            headers:{
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
           
        };
        axios.post('https://pw-page.herokuapp.com/admin/singup/',data,config).then(
           res =>{
            this.setState({    
    
            });
            
            window.location.reload();
               console.log(res)
               alert("Zostałeś zarejestrowany!")
           },
           
        ).catch(
            
            err=>{
                alert(err.data.errors)
            } 
        )   
    }  
    render() {       
        return (
        
          <form onSubmit={this.handleSubmit}>
           <div style={{"display":this.state.show ? "block" : "none"}}>
                </div>
              <h3>Sign Up</h3>

              <div className = "form-group">
                  <label>Login</label>
                  <input required autoComplete="off" type = "text" className = "form-control" placeholder = "Login"
                  onChange={e=>this.login=e.target.value}/>
              </div>
              <div className = "form-group">
                  <label>Password</label>
                  <input type = "password" required autoComplete="off" className = "form-control" placeholder = "Password"
                  onChange={e=>this.password=e.target.value}/>
              </div>
              <button className = "btn btn-primary btn-block">Sign Up</button>
              <button type="reset" className="btn btn-primary btn-block">Reset</button>
          </form>
        );
    }
}

 