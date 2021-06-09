
import './App.css';
import NavigationBar from './Components/NavigationBar ';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import About from './Components/About';
import Photos from './Components/Photos';
import Posts from './Components/Posts';
import AddArticle from './Components/AddArticle';
import Login from './Components/Login';
import Registration from './Components/Registration';
import MyArticle from './Components/MyArticle';
import PostsUser from './Components/PostsUser';
import UpdateArticle from './Components/UpdateArticle';

export default  function App() {
  return (
   
    <div className="App">
       <NavigationBar/>
      <BrowserRouter>
      <Switch>
        <Route exact path = "/posts" component={Posts}/>
        <Route exact path = "/postsUser" component={PostsUser}/>
        <Route exact path = "/aboutUs" component={About}/>
        <Route exact path = "/photos" component={Photos}/>
        <Route exact path = "/addArticle" component={AddArticle}/>
        <Route exact path = "/myArticle" component={MyArticle}/>
        <Route exact path = "/article/:id" component = {MyArticle}/>
        <Route exact path = "/edit/:id" component = {UpdateArticle}/>
      </Switch>
      <div className = "auth-wrapper">
            <Switch>            
              <Route exact path = "/login" component = {Login}/>
              <Route exact path = "/register" component = {Registration}/>

            </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

