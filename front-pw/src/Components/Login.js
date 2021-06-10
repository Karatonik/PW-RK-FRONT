import axios from 'axios';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class Login extends Component {

    state={
        errorMessage: ''
    }
    handleSubmit=e=>{
        e.preventDefault();

        const data = {
            login:this.login,
            password:this.password
        };

        const config ={
            headers:{
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
           
        };
       axios.post('https://pw-page.herokuapp.com/admin/singin',data,config).then(
            res =>{
              localStorage.setItem('token',res.data);             
              this.setState({
                  loggedIn:true
                  
              });
              localStorage.setItem('logged',true); 
              // this.props.setUser(res.data.user);
             alert('Zalogowano!')
             window.location.reload();
          // }else{
          
          //     alert('Konto jeszcze nie zostało aktywowane!Sprawdź swoją skrzyńkę pocztową!');
          // }

          }
      ).catch(err =>{
          alert('Login or password is incorrect!');
          // window.location.reload();
      })
  };
    render() {
        if(this.state.loggedIn){
            return <Redirect to ={'/'}/>
        }
        return (
            <form onSubmit={this.handleSubmit}>
              <h3>Login</h3>
              <div className = "form-group">
                  <label>Login</label>
                  <input type = "text" className = "form-control" placeholder = "Login"
                   onChange={e=>this.login=e.target.value}
                  />
              </div>
              <div className = "form-group">
                  <label>Password</label>
                  <input type = "password" className = "form-control" placeholder = "Password"
                   onChange={e=>this.password=e.target.value}
                  />
              </div>
            <div className='formBtnL'>
              <button className = "btn btn-primary btn-block">Login</button>
              <button type="reset" className="btn btn-primary btn-block">Reset</button>
              </div>
          </form>
        );
    }
}
