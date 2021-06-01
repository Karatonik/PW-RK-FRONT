import React, { Component } from 'react';
import ta from './templarka.jpg'
import inv from './invo.jpg'
import MyGoogleMap from './MyGoogleMap'
import {Card,} from 'react-bootstrap'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class About extends Component {
    render() {
        return (
            <div style={{width:'1800px'}}>
                   <img src={ta} alt='brak zdjęcia' style={{width:'700px',height:'300px',marginRight:'50%'}} />
                   <img src={inv} alt='brak zdjęcia' style={{width:'700px',height:'300px',marginBottom:'300px',marginRight:'50%'}} />
                 
                   <MyGoogleMap
                    markerClick={this.test} 
                    markers={[{ name: 'Impreza A', x: 53.15, y: 18.00 }, {  name: 'Impreza B', x: 53.15, y: 18.10 }]}
                    onMapClick={this.test}
                    mapCenter={{ x: 53.15, y: 18.00 }} 
                  />
                  <>

                  <Card style={{overflow:'auto',borderWidth:0,width:'900px',left:'430px',position:'relative',backgroundColor:'#D0FFC8',margin:'5%'}} >
                 <CardContent>
                   <Typography>
                  Text
                   </Typography>
                 </CardContent>
               </Card>
           </>
            </div>
        );
    }
}

