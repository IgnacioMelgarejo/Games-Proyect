import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import LandingPage from "./components/LandingPage"
import CreateGame from './components/CreateGame';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/create" component={CreateGame}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
