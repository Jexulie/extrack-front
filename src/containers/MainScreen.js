import React, { Component } from 'react';
import { connect } from 'react-redux';

import Main from './MainScreen/Main';
import SideBar from './MainScreen/SideBar';

import '../css/mainscreen.css';

const MainScreen = props => {
    return(
        <div className="mainscreen">
            <h1>Main Screen</h1>
        </div>
    )
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(MainScreen);