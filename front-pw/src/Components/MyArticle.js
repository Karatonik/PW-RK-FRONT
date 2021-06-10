import React, { Component } from 'react';
import {Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import axios from 'axios';

//swaper
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";


export default class MyArticle extends Component {
    constructor(props){
        super(props);
        this.state = {
          article:{},
          pictures: [],
          localData: String
      }
    }
    state={}
    componentDidMount = ()=> {
     
     const config ={
         headers:{
             Authorization: 'Bearer ' + localStorage.getItem('token') 
         },
        
     };
     const articleId= this.props.match.params.id
   axios.get('https://pw-page.herokuapp.com/api/'+articleId).then(
     res => {
             this.setState({
              article:res.data,
              localData:res.data.localDateTime.slice(0, res.data.localDateTime.lastIndexOf("T")),
              pictures: res.data.imagesId
             })
       console.log(this.state.pictures);
     },
     
  err =>{
     console.log(err)
 }
 )
 
 }
 









    
    render() {
        
      const {article,pictures ,localData} =this.state;

      return (
        <div style={{width:'1000px',height:'500px',marginLeft:'27%'}}>
          <h1 style={{marginLeft:'-50%',width:'500px',color:'white'}}>Title: {article.title}</h1>
          <h1 style={{width:'600px',marginLeft:'70%',marginTop:'-10%',color:'white'}}>Date: {localData}</h1>
          <h1 style={{marginLeft:'20%',marginTop:'-10%',width:'500px',color:'white'}}>Header:  {article.header}</h1>
          <h1 style={{marginTop:'10%' ,color:'white',width:'600px',height:'400px', marginLeft:'15%'}} >{article.text}</h1>

        
          <Swiper className="mySwiper" style={{width:'400px',height:'auto',marginTop:'-30%'}}>
          { 
        pictures.map((picture)=>( 
            <SwiperSlide><img style={{width:'400px'}} src ={"https://pw-page.herokuapp.com/api/img/"+picture} alt="" /></SwiperSlide>
        ))
      }
          </Swiper>

        </div>   
    
         );
       }
       }