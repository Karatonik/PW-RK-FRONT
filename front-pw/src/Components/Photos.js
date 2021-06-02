import React, { Component } from 'react';
import {Card,} from 'react-bootstrap'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import ta from './templarka.jpg'
import inv from './invo.jpg'
import bp from './BestPikchaEver.jpeg'

export default  class Photos extends Component {
    render() {
        return (
            <>
            <Card style={{overflow:'auto',borderWidth:0,width:'900px', left:'430px',position:'relative',backgroundColor:'#D0FFC8',margin:'5%'}} >
            <CardHeader
                 style={{marginLeft:'-70%'}}                 
                title= 'Wydarzenie'
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
     <img src={ta} alt='brak zdjęcia' style={{width:'600px',height:'300px',margin:'10px'}} />
     <img src={inv} alt='brak zdjęcia' style={{width:'600px',height:'300px',margin:'10px'}} />
     <img src={bp} alt='brak zdjęcia' style={{width:'600px',height:'300px',margin:'10px'}} />
     <Card style={{overflow:'auto',borderWidth:0,width:'900px', left:'430px',position:'relative',backgroundColor:'#D0FFC8',margin:'5%'}} >
            <CardHeader
                 style={{marginLeft:'-70%'}}                 
                title= 'Wydarzenie'
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
     <img src={ta} alt='brak zdjęcia' style={{width:'600px',height:'300px',margin:'10px'}} />
     <img src={inv} alt='brak zdjęcia' style={{width:'600px',height:'300px',margin:'10px'}} />
     <img src={bp} alt='brak zdjęcia' style={{width:'600px',height:'300px',margin:'10px'}} />
   </>
        );
    }
}

