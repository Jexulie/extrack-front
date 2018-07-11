import React  from 'react';
import { connect } from 'react-redux';

export default  props => {
    console.log(props.state)
    // TODO: split by months and calc total from there + modals for months

    let calcMonthly = month => {
        let filtered = props.thisYear.filter(m => m.month === month)
        return filtered.reduce((p, n) => {
            return {cost: p.cost + n.cost}
        })
    }

    let list;
    let total;
    
    if(props.thisYear.length !== 0){
        total = (props.thisYear.reduce((p, n) => {
            return {cost: (p.cost + n.cost)}
        })).cost;
        list = props.thisYear.map(m => {
            
        calcMonthly(m.month)
            return (
                <li key={m.id}>
                    <div className="card">
                        <h4>Date: {m.fullDate} - {m.month}</h4>
                        <h6>Monthly Total: {calcMonthly(m.month).cost}</h6>
                    </div>
                </li>
            )
        })
    }
    return(
        <div className="thisyear">
            <h2>This Year Total: {total}</h2>
            <ul>
                {list}
            </ul>
        </div>
    )
}