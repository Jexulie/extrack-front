import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../../../actions'

// TODO: change input field color

const AddExpense = props => {
    console.log(expense)

    let expense = {
        category: "",
        cost: ""
    }

    return(
        <div className="addexpense">
            <div className="wrapper">
                <form className="col s12">
                    <div className="input-field">
                        <input type="text" ref={i => expense.category = i }/>
                        <label>Expense Category</label>
                    </div>
                    <div className="input-field">
                        <input type="text" ref={i => expense.cost = i }/>
                        <label>Expense Cost</label>
                    </div>
                    <div className="input-field vertical">
                        <button className="btn red darken-2">+</button>
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
