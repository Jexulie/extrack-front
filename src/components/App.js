import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginScreen from '../containers/LoginScreen';
import MainScreen from '../containers/MainScreen';
import Loader from '../misc/Loader';

const App = props => {
  let content;
  if(props.state.isLogged){
    content = <MainScreen state={props.state}/>
  }else if(props.state.isLoading){
    content = <Loader/>
  }else{
    content = <LoginScreen/>
  }

  return(
    <div className="App">
        {content}
    </div>
  )
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(App);
