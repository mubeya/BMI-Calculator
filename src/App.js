import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Calculations from "./pages/Calculations";
import Error from "./pages/Error";
import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BMIProvider } from "./context/BMIcontext";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact>
          <BMIProvider>
            <Home />
          </BMIProvider>
        </Route>
        <Route path='/whatisbmi' component={About} />
        <Route path='/calculations' component={Calculations} />
        <Route path='*' component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
