import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import LandingPage from "./components/LandingPage"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
