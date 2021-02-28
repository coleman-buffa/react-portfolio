import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>         
          <Switch>
            <Route exact path={["/", "/home"]}>
              {/* Landing page */}
            </Route>
            <Route exact path={["/bio", "/about"]}>
              {/* Bio page */}
            </Route>
            <Route exact path={["/portfolio"]}>
              {/* Portfolio page */}
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
