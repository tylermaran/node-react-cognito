// Importing Dependencies
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importing Components
import Comments from './pages/Comments';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Users from './pages/Users';
import NoMatch from './pages/NoMatch';

// Importing Style
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Comments} />
          <Route exact path="/log-in" component={LogIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/users" component={Users} />
          <Route component={NoMatch} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
