import React, {createContext, useReducer} from "react";

const initialState = {
    transaction :[
        {id:1, text: 'Flower', amount: 80},
        {id:2, text: 'Card', amount: 200},
        {id:3, text: 'Dinner', amount: -20},
        {id:4, text: 'Chain', amount: -300},
    ]
}

export const GlobalContext= createContext(initialState);

const AppReducer = (state, action) => {
    console.log(action.type);
    console.log(state.transaction);
    switch(action.type) {
      case 'DELETE_TRANSACTION':
        return {
          ...state,
          transaction: state.transaction.filter(trans => trans.id !== action.payload)
        }
      case 'ADD_TRANSACTION':
        return {
          ...state,
          transaction: [action.payload, ...state.transaction]
        }
      default:
        return state;
    }
  }

export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransactions(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }

    function addTransactions(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        })
    }

    return (<GlobalContext.Provider value={{
        transaction: state.transaction,
        deleteTransactions,
        addTransactions
    }}>
        {children}
    </GlobalContext.Provider>
    )
}