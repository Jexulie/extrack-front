import React from 'react';
import { connect } from 'react-redux';
import { changeMain } from '../../../actions'


const Menu = props => {
    let notActive = "waves-effect waves-light btn red darken-3"
    let Active = "waves-effect waves-light btn red darken-2"

    return(
        <div className="menu">
            <button className={props.state.curMain === 'addexpense' ? Active : notActive} onClick={() => props.dispatch(changeMain('addexpense'))}>Add Expense</button>
            <button className={props.state.curMain === 'thismonth' ? Active : notActive} onClick={() => props.dispatch(changeMain('thismonth'))}>This Month</button>
            <button className={props.state.curMain === 'thisyear' ? Active : notActive} onClick={() => props.dispatch(changeMain('thisyear'))}>This Year</button>
            <button className={props.state.curMain === 'comparison' ? Active : notActive} onClick={() => props.dispatch(changeMain('comparison'))}>Comparisons</button>
        </div>
    )
}

const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(Menu);