// Importing Dependencies
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importing Components
import Comments from './pages/Comments';
import SignIn from './pages/SignIn';
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
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/users" component={Users} />

          <Route component={NoMatch} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
