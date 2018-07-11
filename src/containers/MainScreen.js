import React  from 'react';
import { connect } from 'react-redux';

import Main from './MainScreen/Main';
import SideBar from './MainScreen/SideBar';

import '../css/mainscreen.css';

const MainScreen = props => {
    return(
        <div className="mainscreen">
            <Main state={props.state}/>
            <SideBar/>
        </div>
    )
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(MainScreen);