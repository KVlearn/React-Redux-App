import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { Nav, NavItem,NavLink} from 'reactstrap';
import Home from './components/Home';
import Dragon from './components/Dragon';
import Crew from './components/Crew';
import {connect} from 'react-redux';
import {getInfo} from './action';

import './App.css';

function App(props) {

  
  return (
    <div className="App">
     <header>
     <h1> SpaceX Lovers!</h1>
     <Nav className="myNav">
        <NavItem>
          <NavLink href="/"> Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/dragon">
            Dragon
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/crew">Crew</NavLink>
        </NavItem>
     </Nav>
      </header>

     <Switch>
     <Route path='/dragon' >
       <Dragon  />
     </Route>

     <Route path='/crew' >
       <Crew  />
     </Route>

     <Route path='/' >
       <Home  />
     </Route>

     </Switch>
    </div>
  );
}

const mapStateToProps=(state)=>{
  return{
    data:state.data,
    // isLoading: state.isLoading,
    // error:state.error,
  }
}
export default connect(mapStateToProps,{getInfo})(App);
