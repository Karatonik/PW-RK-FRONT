import React, { Component } from 'react';
import wr from './wr.jpg'
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
                <div style={{width:'1000px'}}>
                <img src={wr} alt='brak zdjęcia' style={{width:'1000px',height:'300px',marginTop:'-0.8%',marginLeft:'52%'}} />
          <ul id="navL">
            <li><a href="/posts">Articles</a></li>
            <li><a href="/aboutUs">About Us</a></li>
            <li><a href="/photos">Photos</a></li>
            <li><a href="/addArticle">Add article</a></li>
            <li style={{marginLeft:'95%',marginTop:'-2%'}}><a href="/" onClick ={this.handleLoguot}>Logout</a></li>
          </ul>
          </div>
            )
        }else{

           buttons =(
         
            <ul id="nav">
               <img src={wr} alt='brak zdjęcia' style={{width:'1000px',height:'300px',marginTop:'-0.8%',marginLeft:'-10%'}}/>
                    <li><a href="/posts">Articles</a></li>
                    <li><a href="/aboutUs">About Us</a></li>
                    <li><a href="/photos">Photos</a></li>
                    <li style={{marginLeft:'85%',marginTop:'-15.5%'}}><a href="/login">Login</a></li>
                    <li style={{marginLeft:'90%',marginTop:'-15.5%'}}><a href="/register">Sign up</a></li>
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