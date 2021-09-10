import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Options from './Options';
import Result from './Result';

function App() {
    return (
         <><Router>
             <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>RemoteStack</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/srcres"}>Use Services</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </div>
        <div className="outer">
        <div className="inner">
      <Switch>
                <Route exact path='/'  component={Options}></Route>
                <Route exact path="/srcres"  component={Result}></Route>
            </Switch>
            </div>
            </div>
         </Router>
            
        </> 
    );
}

export default App;