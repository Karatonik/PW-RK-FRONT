import React, { Component } from 'react';
import ta from './templarka.jpg'
import inv from './invo.jpg'
import MyGoogleMap from './MyGoogleMap'
import {Card,} from 'react-bootstrap'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class About extends Component {


/*
                */







    render() {
        return (
          
          <div style={{width:'1800px'}}>
              <Card style={{overflow:'auto',borderWidth:0,width:'900px',left:'430px',position:'relative',backgroundColor:'#D0FFC8',margin:'5%'}} >
                 <CardContent>
                   <Typography>
                  Projekt studencki, Mateusz Kalksztejn, Roman Volchuk
                   </Typography>
                 </CardContent>
               </Card>
               <div style={{marginBottom:'-30%'}}>
               <MyGoogleMap style={{overflow:'auto',borderWidth:0,width:'900px',left:'430px',top:'-300px',position:'relative',backgroundColor:'#D0FFC8',margin:'5%'}}
                    markerClick={this.test} 
                    markers={[{ name: 'locate', x: 53.15, y: 18.00 }]}
                    onMapClick={this.test}
                    mapCenter={{ x: 53.15, y: 18.00 }} 
                  />
          </div>
            </div>
        );
    }
}

