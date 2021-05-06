import React from 'react';
import PoliticaDePrivacidade from './components/politicadeprivacidade';
import { Switch, Route } from 'react-router-dom';


class App extends React.Component {

  render() {

    return (
      <Switch>
        <Route exact path="/politica-de-privacidade" component={PoliticaDePrivacidade} />
      </Switch>
    );
  }
}

export default App;
