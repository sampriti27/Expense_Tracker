import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{ amount: 454, category: "Car", type: "Expense", date: "2022-09-18" }, { amount: 500, category: "Investments", type: "Income", date: "2022-09-18" }];
const initialTarget = 1542;
export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);
    const [targetExpense ] = useReducer(contextReducer, initialTarget);


    //Action Creators

    const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    const balance = transactions.reduce((acc, currVal) =>  currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount,0);
    
    const setGoals = (target) => dispatch({ type: 'SET_GOALS', payload: target });
    
    console.log(targetExpense);

    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            setGoals,
            transactions,
            balance,
            targetExpense
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}