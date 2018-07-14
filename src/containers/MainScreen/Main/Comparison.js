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

    if(props.thisMonth.length === 0){
        info = (<h4 className="center">There Is No Expense To Compare!</h4>)
    }

    if(props.thisMonth.length !== 0){
        if(props.thisYear.length !== 0){
            thisyear =   props.thisYear[0].year;
            thisyeartotal = (props.thisYear.reduce((p, n) => {
                return {cost: (p.cost + n.cost)}
            })).cost;
            if(props.lastYear.length !== 0){
                compareyears = lastyeartotal - thisyeartotal;
            }
            thisyearcard = (
                <div className="card col s6">
                    <p className="center">{thisyear}</p>
                    <hr className="horizontal-bar"/>
                    <p className="center"><span className="label">TotaExpense:</span>{thisyeartotal}{props.currency}</p>
                    <p className="center"><span className="label">Last Year Comparison:</span>
                    {compareyears}
                    </p>
                </div>
            )
        }
        if(props.lastYear.length !== 0){
            lastyear =  props.lastYear[0].year;
            lastyeartotal = (props.lastYear.reduce((p, n) => {
                return {cost: (p.cost + n.cost)}
            })).cost;
            lastyearcard = (
                <div className="card col s6">
                    <p className="center">{lastyear}</p>
                    <hr className="horizontal-bar"/>
                    <p className="center"><span className="label">TotaExpense:</span>{lastyeartotal}{props.currency}</p>
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
                <div className="card col s6">
                    <p className="center">{thismonth}</p>
                    <hr className="horizontal-bar"/>
                    <p className="center"><span className="label">TotaExpense:</span>{thismonthtotal}{props.currency}</p>
                    <p className="center"><span className="label">Last Month Comparison:</span>
                    {comparemonths}
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
                <div className="card col s6">
                    <p className="center">{lastmonth}</p>
                    <hr className="horizontal-bar"/>
                    <p className="center"><span className="label">TotaExpense:  </span>{lastmonthtotal}{props.currency}</p>
                </div>
            )
        }
    }
    return(
        <div className="comparison">
            <div className="compare-holder">
                {info}
                <div className="months-holder">
                    <div className="lastmonth row">
                        {lastmonthcard}
                    </div>
                    <div className="thismonth row">
                        {thismonthcard}
                        
                    </div>
                </div>
                <div className="years-holder">
                    <div className="lastyear row">
                        {lastyearcard}
                    </div>
                    <div className="thisyear row">
                        {thisyearcard}
                    </div>
                </div>
            </div>
        </div>
    )
}