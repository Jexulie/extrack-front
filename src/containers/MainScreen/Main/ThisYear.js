import React  from 'react';

export default props => {
    // TODO: split by months and calc total from there + modals for months

    let calcMonthly = month => {
        let filtered = props.thisYear.filter(m => m.month === month)
        return filtered.reduce((p, n) => {
            return(p.cost + n.cost)
        })
    }

    let list;
    let total;
    
    if(props.thisYear.length){
        total = props.thisYear.reduce((p, n) =>  p.cost + n.cost);
        list = props.thisYear.map(m => {
            return (
                <li key={m.id}>
                    <div className="card">
                        <h4>Date: {m.fullDate} - {m.month}</h4>
                        <h6>Monthly Total: {calcMonthly(m.month)}</h6>
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