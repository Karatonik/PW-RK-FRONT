
import './App.css';
import NavigationBar from './Components/NavigationBar ';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import About from './Components/About';
import Photos from './Components/Photos';
import Posts from './Components/Posts';

export default  function App() {
  return (
   
    <div className="App">
       <NavigationBar/>
      <BrowserRouter>
      <Switch>
        <Route exact path = "/posts" component={Posts}/>
        <Route exact path = "/aboutUs" component={About}/>
        <Route exact path = "/photos" component={Photos}/>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

