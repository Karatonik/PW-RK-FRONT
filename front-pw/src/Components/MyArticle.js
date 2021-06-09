import React, { Component } from 'react';
import {Card,Button} from 'react-bootstrap'
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import axios from 'axios';


export default class MyArticle extends Component {
    constructor(props){
        super(props);
        this.state = {
          articles:{},
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
       console.log(res)
         
 
             this.setState({
              articles:res.data
             })
       
     },
     
  err =>{
     console.log(err)
 }
 )
 
 }
 









    
    render() {
        
      const {articles} =this.state;

      return (
        <div style={{width:'1000px',height:'500px',marginLeft:'27%'}}>
          <h1 style={{marginLeft:'-50%',width:'500px'}}>Title: {articles.title}</h1>
          <h1 style={{width:'600px',marginLeft:'70%',marginTop:'-10%'}}>Date: {articles.localDateTime}</h1>
          <h1 style={{marginLeft:'20%',marginTop:'-10%',width:'500px'}}>Header:  {articles.header}</h1>
          <h1 style={{marginTop:'10%' }}>Text:  {articles.text}</h1>
        </div>   
    
         );
       }
       }