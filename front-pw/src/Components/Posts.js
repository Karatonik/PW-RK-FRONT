import React, { Component } from 'react';
import {Card,} from 'react-bootstrap'
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default class Posts extends Component {
    render() {
          return (
            <>
            <Card style={{overflow:'auto',borderWidth:0,width:'900px',left:'430px',top:'80px',position:'relative',backgroundColor:'#D0FFC8',margin:'5%'}} >
               <CardHeader
                    style={{marginLeft:'-70%'}}                 
                   title= 'Tytuł artykułu'
                 />
                    <CardHeader
                    style={{marginTop:'-7%',marginLeft:'75%'}}
                 
                 title= 'Data'
               />
                 <CardContent>
                   <Typography  style={{marginLeft:'-79%'}} >
                   Krótki opis
                   </Typography>
                   <Typography   style={{marginTop:'-2.5%',marginLeft:'70%'}} >
                   2020 12 12 12:30
                   </Typography >
                 </CardContent>
               </Card>

               <Card style={{overflow:'auto',borderWidth:0,width:'900px',left:'430px',top:'80px',position:'relative',backgroundColor:'#D0FFC8',margin:'5%'}} >
               <CardHeader
                    style={{marginLeft:'-70%'}}                 
                   title= 'Tytuł artykułu'
                 />
                    <CardHeader
                    style={{marginTop:'-7%',marginLeft:'75%'}}
                 
                 title= 'Data'
               />
                 <CardContent>
                   <Typography  style={{marginLeft:'-79%'}} >
                   Krótki opis
                   </Typography>
                   <Typography   style={{marginTop:'-2.5%',marginLeft:'70%'}} >
                   2020 12 12 12:30
                   </Typography >
                 </CardContent>
               </Card>

              
               <Card style={{overflow:'auto',borderWidth:0,width:'900px',left:'430px',top:'80px',position:'relative',backgroundColor:'#D0FFC8',margin:'5%'}} >
               <CardHeader
                    style={{marginLeft:'-70%'}}                 
                   title= 'Tytuł artykułu'
                 />
                    <CardHeader
                    style={{marginTop:'-7%',marginLeft:'75%'}}
                 
                 title= 'Data'
               />
                 <CardContent>
                   <Typography  style={{marginLeft:'-79%'}} >
                   Krótki opis
                   </Typography>
                   <Typography   style={{marginTop:'-2.5%',marginLeft:'70%'}} >
                   2020 12 12 12:30
                   </Typography >
                 </CardContent>
               </Card>
               <Card style={{overflow:'auto',borderWidth:0,width:'900px',left:'430px',top:'80px',position:'relative',backgroundColor:'#D0FFC8',margin:'5%'}} >
               <CardHeader
                    style={{marginLeft:'-70%'}}                 
                   title= 'Tytuł artykułu'
                 />
                    <CardHeader
                    style={{marginTop:'-7%',marginLeft:'75%'}}
                 
                 title= 'Data'
               />
                 <CardContent>
                   <Typography  style={{marginLeft:'-79%'}} >
                   Krótki opis
                   </Typography>
                   <Typography   style={{marginTop:'-2.5%',marginLeft:'70%'}} >
                   2020 12 12 12:10
                   </Typography >
                 </CardContent>
               </Card>
               
               </>
             );
           }
           }