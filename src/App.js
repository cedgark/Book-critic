import NavBar from './NavBar';
import Home from './Home';
import SignIn from './SignIn';
import Register from './Register';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <NavBar/>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route exact path="/SignIn">
          <SignIn/>
          </Route>
          <Route exact path="/Register/:user">
          <Register/>
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
