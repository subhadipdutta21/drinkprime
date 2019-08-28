import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './ui/loginPage';
import LeadsList from './ui/leadsList';
import CreateLead from './ui/createLead';
import Lists from './ui/lists'
import {BrowserRouter,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/leadslist' component={LeadsList} />
          <Route path='/createlead' component={CreateLead} />

        </Switch>
        
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
