import React  from 'react';
import '../../css/main.css'

import AddExpense from './Main/AddExpense';
import ThisMonth from './Main/ThisMonth';
import ThisYear from './Main/ThisYear';
import Comparison from './Main/Comparison';

export default props => {

    let content;
    if(props.state.curMain === 'thisyear'){
        content = <ThisYear thisYear={props.state.profile.filterThisYear}/>
    }else if(props.state.curMain === 'thismonth'){
        content = <ThisMonth thisMonth={props.state.profile.filterThisMonth}/>
    }else if(props.state.curMain === 'addexpense'){
        content = <AddExpense/>
    }else if(props.state.curMain === 'comparison'){
        content = <Comparison 
                    thisYear={props.state.profile.filterThisYear} 
                    thisMonth={props.state.profile.filterThisMonth} 
                    lastYear={props.state.profile.filterLastYear} 
                    lastMonth={props.state.profile.filterLastMonth}
                    />
    }
    return(
        <div className="main">
            {content}
        </div>
    )
}