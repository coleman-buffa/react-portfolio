import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/nav/nav";
import Bio from "./pages/Bio";
import LandingZone from "./pages/LandingZone";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Router>            
          <Nav/>   
          <Switch>
            <Route exact path="/">
              <LandingZone/>
            </Route>
            <Route exact path="/bio">
              <Bio/>
            </Route>
            <Route exact path="/portfolio">
              <Portfolio/>
            </Route>
          </Switch>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
