import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function IncomeExpense() {
    const context = useContext(GlobalContext);
    const transactions = context.transaction;
    const amounts = transactions.map( transaction => transaction.amount);
    const credits = amounts
                .filter(item => item > 0)
                .reduce((acc,item)=>(acc+=item),0);

    const debits = amounts
    .filter(item => item < 0)
    .reduce((acc,item)=>(acc+=item),0);
  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p id='money-plus'className='money plus'>{credits}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id='money-minus'className='money minus'>{-debits}</p>
      </div>
    </div>
  )
}
