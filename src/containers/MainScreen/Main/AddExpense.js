import React from 'react';
import { connect } from 'react-redux';
import { addExpense, calcTotal, showInfo, hideInfo, expenseAddMsg, saveExpense } from '../../../actions';

import '../../../css/addexpense.css';

const AddExpense = props => {

    let category = "";
    let name = "";
    let cost = "";

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November']
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] 

    

    let activate = () => {
        props.dispatch(addExpense({category: category.value, cost: parseInt(cost.value,10), name: name.value}));
        props.dispatch(calcTotal())
        props.dispatch(expenseAddMsg('Expense Added!'))
        props.dispatch(showInfo())
        let postExpense = props.state.profile.expenses
        postExpense = [...postExpense, {
            id: Math.floor(Math.random() * 1e16),
            name: name.value,
            cost: cost.value,
            category: category.value,
            fullDate: new Date().toLocaleString(),
            year: new Date().getFullYear(),
            month: monthNames[new Date().getMonth()],
            day: new Date().getDate(),
            day_name: dayNames[new Date().getDay()],
        }];
        let postFilterThisYear = postExpense.filter(e => {
            if(e.year === new Date().getFullYear()){
                return e;
            }
        });
        let postFilterThisMonth = postExpense.filter(e => {
            if(e.month === monthNames[new Date().getMonth()]){
                return e;
            }
        });
        let postFilterLastYear = postExpense.filter(e => {
            if(e.year === new Date().getFullYear() - 1){
                return e;
            }
        });
        let postFilterLastMonth = postExpense.filter(e => {
            if(e.month === monthNames[new Date().getMonth() - 1]){
                return e;
            }
        });
        let post = {
            facebookID: props.state.profile.id,
            data: {
                expenses: postExpense,
                filterThisYear: postFilterThisYear,
                filterThisMonth: postFilterThisMonth,
                filterLastYear: postFilterLastYear,
                filterLastMonth: postFilterLastMonth
            }
        }
        props.dispatch(saveExpense(post, props.dispatch))
        setTimeout(() => {
            props.dispatch(hideInfo())
        },1500)
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
