import React from 'react';
import PoliticaDePrivacidade from './components/politicadeprivacidade/politicadeprivacidade';
import {Switch,Router,BrowserRouter,withRouter} from 'react-router-dom';


class App extends React.Component {
 
  render (){return(
    <BrowserRouter>
    <Switch>
      <Router exact path="/politica-de-privacidade">
        <PoliticaDePrivacidade/>
        </Router>
    </Switch>
    </BrowserRouter>
  );}
}

export default App;
