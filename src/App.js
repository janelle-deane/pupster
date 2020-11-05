import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/Pages/About";
import Discover from "./components/Pages/Discover";
import Search from "./components/Pages/Search";


function App() {
  return (
    
    <Router>
        <NavTabs/>
        <Switch>
        <Route exact path="/" component={About}/>
        <Route exact path="/discover" component={Discover}/>
        <Route exact path="/search" component={Search}/>
        </Switch>
    </Router>
    
  );
}

export default App;
