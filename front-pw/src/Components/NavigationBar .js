import React, { Component } from 'react';
import wr from './wr.jpg'
import { Link } from 'react-router-dom';
import Home from '@material-ui/icons/Home'
import Icon from '@material-ui/core/Icon';

export default class NavigationBar  extends Component {
    render() {
        let buttons;
        if(this.props.user){
            buttons =(
                <div style={{width:'1000px'}}>
                <img src={wr} alt='brak zdjęcia' style={{width:'1000px',height:'300px',marginTop:'-0.8%',marginLeft:'42%'}} />
          <ul id="nav" style={{marginLeft:'60%',width:'1500px'}}>
            <li><a href="/posts">Articles</a></li>
            <li><a href="/aboutUs">About Us</a></li>
            <li><a href="/photos">Photos</a></li>
            <li><a href="/addArticle">Add article</a></li>
          </ul>
          </div>
            )
        }else{

           buttons =(
            <ul id="nav">
                    <li><a href="/posts">Articles</a></li>
                    <li><a href="/aboutUs">About Us</a></li>
                    <li><a href="/photos">Photos</a></li>
                    <li style={{marginLeft:'75%'}}><a href="/login">Login</a></li>
                    <li><a href="/register">Sign up</a></li>
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