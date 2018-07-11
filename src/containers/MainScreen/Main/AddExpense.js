import React from 'react';
import { connect } from 'react-redux';
import { addExpense, calcTotal } from '../../../actions';

import '../../../css/addexpense.css';

// TODO: change input field color

const AddExpense = props => {

    let category = "";
    let name = "";
    let cost = "";

    let activate = () => {
        props.dispatch(addExpense({category: category.value, cost: parseInt(cost.value), name: name.value}));
        props.dispatch(calcTotal())
    }

    return(
        <div className="addexpense">
            <div className="wrap">
            <h2 className="center">Add Expense</h2>
                <form className="form">
                    <div className="left-side">
                        <div className="input-field">
                            <input type="text" ref={i => {
                                category = i
                            }}/>
                            <label>Expense Category</label>
                        </div>
                        <div className="input-field">
                            <input type="text" ref={i => {
                                name = i 
                            }}/>
                            <label>Expense Name</label>
                        </div>
                        <div className="input-field">
                            <input type="number" placeholder="$" ref={i => {
                                cost = i 
                            }}/>
                            <label>Expense Cost</label>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="input-field vertical">
                            <button className="btn red darken-2 vertical-btn" onClick={e => {
                                e.preventDefault();
                                if(category.value !== "" || name.value !== "" || cost.value !== "" || cost.value !== NaN){
                                    activate();
                                    category.value = "";
                                    cost.value = "";
                                    name.value = "";
                                }
                            }}>Add</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(AddExpense);
