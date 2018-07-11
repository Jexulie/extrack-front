import React, { Component } from 'react';
import '../../css/main.css'

import AddExpense from './Main/AddExpense';
import ThisMonth from './Main/ThisMonth';
import ThisYear from './Main/ThisYear';
import Comparison from './Main/Comparison';

export default props => {
    console.log(props.state)

    let filterThisYear = [];
    let filterThisMonth = [];
    let filterLastYear = [];
    let filterLastMonth = [];

    if(props.state.profile.expenses.year !== undefined){
        filterThisYear = props.state.profile.expenses.filter(e => {
            e.year === new Date().getFullYear();
        });
        console.log(filterThisYear)
        filterThisMonth = props.state.profile.expenses.filter(e => {
            e.month === new Date().getMonth();
        });
        filterLastYear = props.state.profile.expenses.filter(e => {
            e.year === new Date().getFullYear() - 1;
        });
        filterLastMonth = props.state.profile.expenses.filter(e => {
            e.month === new Date().getMonth() - 1;
        });
    }

    let content;
    if(props.state.curMain === 'thisyear'){
        content = <ThisYear thisYear={filterThisYear}/>
    }else if(props.state.curMain === 'thismonth'){
        content = <ThisMonth thisMonth={filterThisMonth}/>
    }else if(props.state.curMain === 'addexpense'){
        content = <AddExpense/>
    }else if(props.state.curMain === 'comparison'){
        content = <Comparison thisYear={filterThisYear} thisMonth={filterThisMonth} lastYear={filterLastYear} lastMonth={filterLastMonth}/>
    }
    return(
        <div className="main">
            {content}
        </div>
    )
}