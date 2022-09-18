import React, {useReducer, createContext} from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{amount: 454, category: "Car", type: "Expense", date: "2022-09-18"},{amount: 500, category: "Investments", type: "Income", date: "2022-09-18"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    //Action Creators

     const deleteTransaction = (id) => dispatch({type: 'DELETE_TRANSACTION', payload: id});
     const addTransaction = (transaction) => dispatch({type: 'ADD_TRANSACTION', payload: transaction });

     const balance = transactions.reduce((acc, currVal) =>  currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount,0);

     return(
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}