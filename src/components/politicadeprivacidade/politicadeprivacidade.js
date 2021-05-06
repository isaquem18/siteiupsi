import React from 'react';
import './politicadeprivacidade.css';
import {Link, NavLink, withRouter} from 'react-router-dom';

class PoliticaDePrivacidade extends React.Component {
      render()
    { 
    console.log(this.props)
      return <h1>Hello</h1>;
    }
  }
export default withRouter(PoliticaDePrivacidade);