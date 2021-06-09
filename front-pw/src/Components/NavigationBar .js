import React, { Component } from 'react';
import wr from './logo.png'
import { Link } from 'react-router-dom';
import Home from '@material-ui/icons/Home'
import Icon from '@material-ui/core/Icon';

export default class NavigationBar  extends Component {
  handleLoguot=()=>{
    localStorage.clear();

};
    render() {
        let buttons;
        if(localStorage.getItem('logged')){
            buttons =(
                <div style={{width:'500px'}}>
                <img src={wr} alt='brak zdjęcia' style={{width:'200px',height:'200px',marginTop:'-0.8%',marginLeft:'182%'}} /> 
          <ul id="navL">
            <li style={{marginTop:'15%',marginLeft:'43%'}}><a href="/posts">Articles</a></li>
            <li style={{marginTop:'15%'}}><a href="/aboutUs">About Us</a></li>
            <li style={{marginTop:'15%'}}><a href="/photos">Photos</a></li>
            <li style={{marginTop:'15%'}}><a href="/addArticle">Add article</a></li>
            {/* <li><a href="/myArticle">Article table</a></li> */}
            <li style={{marginTop:'7%',marginLeft:'30%'}}><a href="/" onClick ={this.handleLoguot}>Logout</a></li>
          </ul>
          </div>
            )
        }else{

           buttons =(
         
            <ul id="nav">
               <img src={wr} alt='brak zdjęcia' style={{width:'200px',height:'200px',marginTop:'-1%',marginLeft:'-85%'}}/> 
                    <li style={{marginLeft:'42%',marginTop:'10%'}}><a href="/postsUser">Articles</a></li>
                    <li style={{marginTop:'10%'}}><a href="/aboutUs">About Us</a></li>
                    <li style={{marginTop:'10%'}}><a href="/photos">Photos</a></li>
                    <li style={{marginTop:'1%',marginLeft:'25%'}}><a href="/login">Login</a></li>
                    <li style={{marginTop:'-2.1%',marginLeft:'30%'}}><a href="/register">Sign up</a></li>
            </ul>    
            )
        }
        return(
               <div style={{ width:'1900px'}}>
                  {buttons}
                </div>

    );
     }
 }