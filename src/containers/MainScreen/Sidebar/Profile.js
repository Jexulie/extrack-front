import React  from 'react';
import '../../../css/profile.css'

export default props => {
    return(
        <div className="profile">
            <div className="avatar center">
                <img src={props.state.profile.avatarUrl}    className="circle" alt="avatar"/>
            </div>
            <div className="title center">
                <span>Welcome,     {props.state.profile.fullName}</span>
            </div>
        </div>
    )
}


