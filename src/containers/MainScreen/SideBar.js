import React  from 'react';
import '../../css/sidebar.css'

import Profile from './Sidebar/Profile'
import Menu from './Sidebar/Menu'

export default props => {
    return(
        <div className="sidebar">
            <Profile state={props.state}/>
            <Menu/>
        </div>
    )
}