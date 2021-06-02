
import './App.css';
import NavigationBar from './Components/NavigationBar ';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import About from './Components/About';
import Photos from './Components/Photos';
import Posts from './Components/Posts';
import AddArticle from './Components/AddArticle';
import Login from './Components/Login';
import Registration from './Components/Registration';

export default  function App() {
  return (
   
    <div className="App">
       <NavigationBar/>
      <BrowserRouter>
      <Switch>
        <Route exact path = "/posts" component={Posts}/>
        <Route exact path = "/aboutUs" component={About}/>
        <Route exact path = "/photos" component={Photos}/>
        <Route exact path = "/addArticle" component={AddArticle}/>

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

