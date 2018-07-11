import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeMain } from '../../../actions'

// TODO: Logout | On click red darken-1

const Menu = props => {
    let notActive = "btn red darken-3"
    let Active = "btn red darken-2"

    return(
        <div className="menu">
            <button className={props.state.curMain === 'addexpense' ? Active : notActive} onClick={() => props.dispatch(changeMain('addexpense'))}>Add Expense</button>
            <button className={props.state.curMain === 'thismonth' ? Active : notActive} onClick={() => props.dispatch(changeMain('thismonth'))}>This Month</button>
            <button className={props.state.curMain === 'thisyear' ? Active : notActive} onClick={() => props.dispatch(changeMain('thisyear'))}>This Year</button>
            <button className={props.state.curMain === 'comparison' ? Active : notActive} onClick={() => props.dispatch(changeMain('comparison'))}>Comparison</button>
        </div>
    )
}

const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(Menu);