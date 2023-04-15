import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Balance() {

    const context= useContext(GlobalContext);
    const transactions = context.transaction;
    const amounts = transactions.map(transaction=> transaction.amount);
    const total = amounts.reduce((acc, item)=> (acc += item),0);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id='balance'>${total}</h1>
    </div>
  )
}