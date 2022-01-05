import 'App.css';
import 'layouts/layouts.jsx';
import RhodesianInfoPage from 'pages/rhodesian';
import Index from 'pages/index.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";


function App() {
  return (
    <div className="App">
                <Router>
                  <Switch>
                    <Route path='/rhodesian'>
                        <RhodesianInfoPage/>
                    </Route>
                    <Route path='/'>
                        <Index/>
                    </Route>
                    </Switch>
                </Router>
    </div>

);

}


export default App;
