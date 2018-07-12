import React from 'react';
import '../css/info.css'

export default props => {
    let info_class;
    if(!props.info){
        info_class = "info active"
    }else{
        info_class = "info hidden"
    }
    return(
        <div className={info_class}>
            <h6>{props.message}</h6>
        </div>
    )
}