import 'App.css';
import Rhodesian from 'components/pages/rhodesian'
import CardRazaPerros from "components/CardRazaPerros";
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
                        <Rhodesian/>
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
