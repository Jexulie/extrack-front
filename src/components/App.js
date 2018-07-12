import React  from 'react';
import { connect } from 'react-redux';

import LoginScreen from '../containers/LoginScreen';
import MainScreen from '../containers/MainScreen';
import Loader from '../Misc/Loader';
import Info from '../Misc/Info';

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
        <Info info={props.state.info} message={props.state.message}/>
    </div>
  )
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(App);
