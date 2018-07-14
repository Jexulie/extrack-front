import React from 'react';
import { connect } from 'react-redux';
import { addExpense, calcTotal, showInfo, hideInfo, expenseAddMsg, saveExpense } from '../../../actions';

import '../../../css/addexpense.css';

const AddExpense = props => {

    let category = "";
    let name = "";
    let cost = "";

    let post = {
        facebookID: props.state.profile.id,
        data: {
            expenses: props.state.profile.expenses,
            filterThisYear: props.state.profile.filterThisYear,
            filterThisMonth: props.state.profile.filterThisMonth,
            filterLastYear: props.state.profile.filterLastYear,
            filterLastMonth: props.state.profile.filterLastMonth
        }
    }

    // TODO: Huge Problem -> doesnt add last item

    let activate = () => {
        props.dispatch(addExpense({category: category.value, cost: parseInt(cost.value,10), name: name.value}));
        props.dispatch(calcTotal())
        props.dispatch(expenseAddMsg('Expense Added!'))
        props.dispatch(showInfo())
        props.dispatch(saveExpense(post, props.dispatch))
        setTimeout(() => {
            props.dispatch(hideInfo())
        },5000)
    }

    return(
        <div className="addexpense">
            <div className="wrap">
            <h2 className="center">Add Expense</h2>
                <form className="form center">
                    <div className="left-side">
                        <div className="input-field">
                            <input id="category" type="text" ref={i => {
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
                            <input type="number" ref={i => {
                                cost = i 
                            }}/>
                            <label>Expense Cost</label>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="input-field vertical">
                            <button className="waves-effect waves-light btn red darken-2 vertical-btn" onClick={e => {
                                e.preventDefault();
                                if(category.value !== "" && name.value !== "" && cost.value !== ""){
                                    if(/\w/ig.test(cost.value)){
                                        activate();
                                        category.value = "";
                                        cost.value = "";
                                        name.value = "";
                                    }
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
