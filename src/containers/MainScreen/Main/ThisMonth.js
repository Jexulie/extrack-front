import React from 'react';

export default props => {
    // TODO: add currency to state
    console.log(props)
    let list;
    let total;
    
    if(props.thisMonth.length){
        total = props.thisMonth.reduce((p, n) =>{
            return(p.cost + n.cost)
        });
        list = props.thisMonth.map(m => {
            return (
                <li key={m.id}>
                    <div className="card">
                        <h4>Date: {m.fullDate} - {m.day_name}</h4>
                        <h6>Category: {m.category}</h6>
                        <h6>Expense: {m.name}</h6>
                        <h6>Cost: {m.cost}</h6>
                    </div>
                </li>
            )
        })
    }

    return(
        <div className="thismonth">
            <h2>This Month Total: {total}</h2>
            <ul>
                {list}
            </ul>
        </div>
    )
}