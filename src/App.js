import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import Serials from './Components/Pages/Serials/Serials';
import Movies from './Components/Pages/Movies/Movies';
import Error from './Components/Pages/Error/Error';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/serials">
          <Serials />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/error">
          <Error />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
