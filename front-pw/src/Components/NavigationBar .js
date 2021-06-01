import React, { Component } from 'react';
import wr from './wr.jpg'

export default class NavigationBar  extends Component {
    render() {
        return(
            <div style={{width:'1000px'}}>
                  <img src={wr} alt='brak zdjęcia' style={{width:'1000px',height:'300px',marginTop:'-0.8%',marginLeft:'42%'}} />
            <ul id="nav" style={{marginLeft:'80%'}}>
              <li><a href="/posts">Articles</a></li>
              <li><a href="/aboutUs">About Us</a></li>
              <li><a href="/photos">Photos</a></li>
            </ul>
            </div>
         );
     }
 }