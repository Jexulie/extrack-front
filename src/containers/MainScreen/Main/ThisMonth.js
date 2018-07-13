import React from 'react';

import '../../../css/thismonth.css'

export default props => {
    // TODO: find highest expense -> sort for month aswell
    let list;
    let total;
    if(props.thisMonth.length){
        total = props.thisMonth.reduce((p, n) =>{
            return {cost: (p.cost + n.cost)}
        }).cost;
        list = props.thisMonth.map(m => {
            return (
                <div className="card col s3" key={m.id}>
                    <p className="center"><span className="label">Created At</span></p>
                    <p className="center">{m.fullDate}</p>
                    <p className="center">{m.day_name}</p>
                    <hr className="horizontal-bar"/>
                    <p className="center"><span className="label">Category: </span>{m.category}</p>
                    <p className="center"><span className="label">Expense: </span>{m.name}</p>
                    <p className="center"><span className="label">Cost: </span>{m.cost}{props.currency}</p>
                </div>
            )
        })
    }
    return(
        <div className="thismonth">
            <h4 className="center">This Month Total Expenses: {total|| 0}{props.currency}</h4>
            <h5 className="center">This Month's Highest Expense: {total|| 0}{props.currency}</h5>
            <div className="month-holder row">
                {list}
            </div>
        </div>
    )
}