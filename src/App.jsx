import 'App.css';
import 'layouts/layouts.jsx';
import RhodesianInfoPage from 'pages/rhodesian';
import Index from 'pages/index.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Layout from 'layouts/layouts'
import BorderCollie from 'pages/borderCollie';


function App() {
  return (
    <div className="App">
                <Router>
                <Layout>
                  <Switch>
                    <Route path='/rhodesian'>
                        <RhodesianInfoPage/>
                    </Route>
                    <Route path='/bordercollie'>
                        <BorderCollie/>
                    </Route>
                    <Route path='/'>
                        <Index/>
                    </Route>
                  </Switch>
                </Layout>
                </Router>
    </div>

);

}


export default App;
