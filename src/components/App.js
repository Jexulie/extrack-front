import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginScreen from '../containers/LoginScreen';
import MainScreen from '../containers/MainScreen';

const App = props => {
  let content;
  if(props.state.isLogged === false){
    content = <LoginScreen/>
  }else{
    content = <MainScreen/>
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
