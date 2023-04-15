import React, { useContext } from 'react'
import ReactDOM from 'react-dom';   
import { GlobalContext } from '../context/GlobalState'
import Transactions from './Transactions';

export default function TransactionList() {
  const context= useContext(GlobalContext);
  console.log(context.transaction);

  const transactions= context.transaction;
  transactions.map( transaction => (
    console.log(transaction.text)
  ))
  return (
      <>
      <h3>History</h3>  
      <ul id='list' className='list'>
        { transactions.map( transaction => (
           <Transactions key={transaction.id} transaction={transaction}/>
        ))}
      </ul>
      </>
  )
}
