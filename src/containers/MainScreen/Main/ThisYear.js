import React  from 'react';
import { connect } from 'react-redux';

import '../../../css/thisyear.css'

export default  props => {

    let calcMonthly = month => {
        let filtered = props.thisYear.filter(m => m.month === month)
        return filtered.reduce((p, n) => {
            return {cost: p.cost + n.cost}
        })
    }

    let calcMonthHighest = month => {
        let filtered = props.thisYear.filter(m => m.month === month)
        let sorted = filtered.sort((p, n) => {
            if(p.cost < n.cost){
              return 1
          }else if(p.cost > n.cost){
              return -1
          }else{
              return 0;
          }
        });
        return sorted[0]
    }

    // Cheap Fix Sry
    let filterbyMonth = props.thisYear.filter((month, index, self) => 
        index === self.findIndex((t) => {
            return t.month === month.month
        })
    );

    let list;
    let total;
    let header;
    let yearshighest;
    
    if(props.thisYear.length !== 0){
        total = (props.thisYear.reduce((p, n) => {
            return {cost: (p.cost + n.cost)}
        })).cost;
        list = filterbyMonth.map(m => {
            return (
                <div className="card col s3" key={m.id}>
                    <p className="center">{m.month}</p>
                    <hr/>
                    <p className="center"><span className="label">This Month's Highest Expense: </span>{calcMonthHighest(m.month).name} - {calcMonthHighest(m.month).cost}{props.currency}</p>
                    <p className="center"><span className="label">Monthly Total: </span>{calcMonthly(m.month).cost}{props.currency}</p>
                </div>
            )
        })
        let sorted = props.thisYear.sort((p, n) => {
            if(p.cost < n.cost){
              return 1
          }else if(p.cost > n.cost){
              return -1
          }else{
              return 0;
          }
        });
        yearshighest = sorted[0]
    }

    if(props.thisYear.length !== 0){
        header = (<div>
            <h4 className="center">This Year Total: {total || 0}{props.currency}</h4>
            <h5 className="center">This Year's Highest Expense: {yearshighest.name} - {yearshighest.cost || 0 }{props.currency} in {yearshighest.month}</h5>
        </div>)
    }else{
        header = (<h4 className="warn center">There Is No Expense This Year.</h4>)
    }
    return(
        <div className="thisyear">
            {header}
            <div className="year-holder row">
                {list}
            </div>
        </div>
    )
}