const contextReducer = (state,action) => {
        let transactions;
    
    switch (action.type) {
        case 'DELETE_TRANSACTION':
             transactions = state.filter((t) => t.id !== action.payload);

             localStorage.setItem('transactions', JSON.stringify(transactions));

            return transactions;            
        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state];
            localStorage.setItem('transactions', JSON.stringify(transactions));

            return transactions;
        case 'SET_GOALS' :
            const targetExpense = action.payload;
            localStorage.setItem('targetExpense', JSON.stringify(targetExpense));
            return targetExpense;
        default:
            return state;
    }
}

export default contextReducer;