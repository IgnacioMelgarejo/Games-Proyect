import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import LandingPage from "./components/LandingPage"
import CreateGame from './components/CreateGame';
import NotFound from './components/NotFound';
import Details from './components/Details';
import Favorites from './components/Favorites';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:3001/";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/create" component={CreateGame}/>
          <Route path="/favorites" component={Favorites}/>
          <Route path="/game/:id" component={Details}/>
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
