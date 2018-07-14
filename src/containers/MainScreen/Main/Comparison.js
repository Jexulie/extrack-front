import React  from 'react';

import '../../../css/compare.css'

export default props => {

    let thisyeartotal;
    let thismonthtotal;
    let lastmonthtotal;
    let lastyeartotal;
    let thisyear;
    let lastyear;
    let thismonth;
    let lastmonth;
    let thisyearcard;
    let lastyearcard;
    let thismonthcard;
    let lastmonthcard;
    let comparemonths;
    let compareyears;
    let info;
    let yearsside;
    let monthside;
    let thisyearhighest;
    let lastyearhighest;
    let thismonthhighest;
    let lastmonthhighest;
    
    if(props.thisMonth.length === 0){
        info = (<h4 className="warn center">There Is No Expense To Compare!</h4>)
    }
    /* sorting stuff */
    let thisyearsorted = props.thisYear.sort((p, n) => {
        if(p.cost < n.cost){
          return 1
      }else if(p.cost > n.cost){
          return -1
      }else{
          return 0;
      }
    });
    thisyearhighest = thisyearsorted[0]

    let lastyearsorted = props.lastYear.sort((p, n) => {
        if(p.cost < n.cost){
          return 1
      }else if(p.cost > n.cost){
          return -1
      }else{
          return 0;
      }
    });
    lastyearhighest = lastyearsorted[0]

    let thismonthsorted = props.thisMonth.sort((p, n) => {
        if(p.cost < n.cost){
          return 1
      }else if(p.cost > n.cost){
          return -1
      }else{
          return 0;
      }
    });
    thismonthhighest = thismonthsorted[0]

    let lastmonthsorted = props.lastMonth.sort((p, n) => {
        if(p.cost < n.cost){
          return 1
      }else if(p.cost > n.cost){
          return -1
      }else{
          return 0;
      }
    });
    lastmonthhighest = lastmonthsorted[0]

    /* cards */
    if(props.thisMonth.length !== 0){
        if(props.lastYear.length !== 0){
            lastyear =  props.lastYear[0].year;
            lastyeartotal = (props.lastYear.reduce((p, n) => {
                return {cost: (p.cost + n.cost)}
            })).cost;
            lastyearcard = (
                <div className="card col s5">
                    <p className="center">{lastyear}</p>
                    <hr className="horizontal-bar"/>
                    <p className="center"><span className="label">TotaExpense: </span>{lastyeartotal}{props.currency}</p>
                    <p className="center"><span className="label">Last Year's Highest Expense: </span>{lastyearhighest.name} - {lastyearhighest.cost || 0 }{props.currency} in {lastyearhighest.month}</p>
                </div>
            )
        }
        if(props.thisYear.length !== 0){
            thisyear =   props.thisYear[0].year;
            thisyeartotal = (props.thisYear.reduce((p, n) => {
                return {cost: (p.cost + n.cost)}
            })).cost;
            if(props.lastYear.length !== 0){
                compareyears = lastyeartotal - thisyeartotal;
            }
            thisyearcard = (
                <div className="card col s5">
                    <p className="center">{thisyear}</p>
                    <hr className="horizontal-bar"/>
                    <p className="center"><span className="label">TotaExpense: </span>{thisyeartotal}{props.currency}</p>
                    <p className="center"><span className="label">This Year's Highest Expense: </span>{thisyearhighest.name} - {thisyearhighest.cost || 0 }{props.currency} in {thisyearhighest.month}</p>
                    <p className="center"><span className="label">Last Year Comparison:  </span>
                    {compareyears}{props.currency}
                    </p>
                </div>
            )
        }
        
        if(props.lastMonth.length !== 0){
            lastmonth = props.lastMonth[0].month;
            lastmonthtotal = (props.lastMonth.reduce((p, n) => {
                return {cost: (p.cost + n.cost)}
            })).cost;
            lastmonthcard = (
                <div className="card col s5">
                    <p className="center">{lastmonth}</p>
                    <hr className="horizontal-bar"/>
                    <p className="center"><span className="label">TotalExpense: </span>{lastmonthtotal}{props.currency}</p>
                    <p className="center"><span className="label">Last Month's Highest Expense: </span>{lastmonthhighest.name} - {lastmonthhighest.cost || 0 }{props.currency}.</p>
                </div>
            )
        }
        if(props.thisMonth.length !== 0){
            thismonth = props.thisMonth[0].month;
            thismonthtotal = (props.thisMonth.reduce((p, n) => {
                return {cost: (p.cost + n.cost)}
            })).cost;
            if(props.lastMonth.length !== 0){
                comparemonths = lastmonthtotal - thisyeartotal
            }
            thismonthcard = (
                <div className="card col s5">
                    <p className="center">{thismonth}</p>
                    <hr className="horizontal-bar"/>
                    <p className="center"><span className="label">TotaExpense: </span>{thismonthtotal}{props.currency}</p>
                    <p className="center"><span className="label">This Month's Highest Expense: </span>{thismonthhighest.name} - {thismonthhighest.cost || 0 }{props.currency}.</p>
                    <p className="center"><span className="label">Last Month Comparison: </span>
                    {comparemonths}{props.currency}
                    </p>
                </div>
            )
        }
        /* holders */
        if(props.lastMonth.length !== 0){
            monthside = (
                <div className="months-holder row">
                    <div className="lastmonth">
                        {lastmonthcard}
                    </div>
                    <div className="thismonth">
                        {thismonthcard}
                        
                    </div>
                </div>
            )
        }else{
            monthside = (<h5 className="warn center">There Is No Expense For Last Month.</h5>)
        }
        if(props.lastYear.length !== 0){
            yearsside = (
                <div className="years-holder row">
                    <div className="lastyear">
                        {lastyearcard}
                    </div>
                    <div className="thisyear">
                        {thisyearcard}
                    </div>
                </div>
            )
        }else{
            yearsside = (<h5 className="warn center">There Is No Expense For Last Year.</h5>)
        }
    }
    return(
        <div className="comparison">
            <div className="compare-holder">
                {info}
                {monthside}
                {yearsside}                
            </div>
        </div>
    )
}