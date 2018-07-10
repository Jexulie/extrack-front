import React, { Component } from 'react';
import '../../css/main.css'

import AddExpense from './Main/AddExpense';
import LastYear from './Main/LastYear';
import ThisYear from './Main/ThisYear';

export default props => {
    console.log(props)
    let content;
    if(props.state.curMain === 'thisyear'){
        content = <ThisYear/>
    }else if(props.state.curMain === 'lastyear'){
        content = <LastYear/>
    }else if(props.state.curMain === 'addexpense'){
        content = <AddExpense/>
    }
    return(
        <div className="main">
            {content}
        </div>
    )
}