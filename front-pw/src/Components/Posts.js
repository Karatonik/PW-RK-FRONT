import React, { Component } from 'react';
import {Card,Button,Form} from 'react-bootstrap'
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Posts extends Component {
  constructor(props){
    super(props);

    this.state = {
     // title: String,
     // header: String,
      //text: String,
      articles: []
}
  }
state={}


 getRealtimeData =(data)=> {
  this.setState({
      text : data.text
     });
}


  componentDidMount = ()=> {
    function eleContainsInArray(arr,element){
      
      if(arr != null && arr.length >0){
          for(var i=0;i<arr.length;i++){
              if(arr[i].id === element.id){
                  return true;
              }
          }
      }
      return false;
   } 
    
    
    const source = new EventSource('https://pw-page.herokuapp.com/api/All');
    source.onmessage = (e) => {
        const data = JSON.parse(e.data);
        if(!eleContainsInArray(this.state.articles,data)){
        this.setState({
          articles : this.state.articles.concat(data),
         });
        }else{
         source.close();
        }
   }
 
  

}

deleteArticle=(id)=>{ 
    
  axios.delete("https://pw-page.herokuapp.com/admin/"+id)
  .then(res=>{
     
          this.setState({
              articles:this.state.articles.filter(article => article.articleId !== id)

          });
          window.location.reload();
          console.log(res)
      
     
  });
};



setArticles = articles =>{
  this.setState({
    articles:articles
  });
};

    render() {
      const {articles} = this.state;
          return (
            <>
             { 
        articles.map((article)=>( 
         
            <Card style={{overflow:'auto',borderWidth:0,width:'900px',left:'400px',top:'40px',position:'relative',backgroundColor:'#339933',margin:'5%',height:'150px'}} >
             
               <CardHeader
                    style={{marginLeft:'-80%',fontSize:'32px',color:'white'}}                 
                   title= {article.title}
                 />
                    <CardHeader
                    style={{marginTop:'-7%',marginLeft:'75%',color:'white'}}
                 
                 title= {article.localDateTime.slice(0, article.localDateTime.lastIndexOf("T"))}
               />
                 <CardContent>
                   <Typography   style={{marginTop:'-8%',marginLeft:'2%',fontSize:'26px',color:'white'}} >
                   {article.header}
                   </Typography >
                 </CardContent>
                 < Link to={"article/"+article.id }style={{width:'100px',marginLeft:'75%'}} className= "btn btn-sm btn-primary"> Show</Link>{' '}       
                  <Button style={{width:'100px',marginTop:'-31px',marginLeft:'87%'}} className= "btn btn-sm btn-danger" variant="contained" color="secondary" onClick={this.deleteArticle.bind(this,article.id)}>
                    Delete
                  </Button>
                  <Link to={"edit/"+article.id } style={{width:'100px',marginTop:'-31px',marginLeft:'63%'}} className= "btn btn-sm btn-info">Edit</Link>{' '}
               </Card>
                ))
      } 
              
               </>
             );
           }
           }