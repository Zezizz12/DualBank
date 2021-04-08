import React from 'react';
import './App.css';
import Navbar from './componets/Navbar';
import Body from './componets/Body';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends React.Component{
  render(){
    return (
      <>
      <Router>
      <Navbar />
      <Body/>
      <Switch>
        <Route path='/' />
      </Switch>
      </Router>
      
      </>
    );
  }
}

export default App;
