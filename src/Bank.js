import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { bindActionCreators } from 'redux';
import { actionCreator } from './state/index'
const Bank = () => {
   const balance = useSelector((state) => state.amount);
   const mode = useSelector((state) => state.mode);
   const dispatch = useDispatch();
   return (
      <div className={`container my-5 rounded-2 text-center border border-${mode === 'light' ? 'dark' : 'light'} `}>
         <label className={`border-bottom border-${mode === 'light' ? 'dark' : 'light'} text-${mode === 'light' ? 'dark' : 'light'} fs-2 fw-bold my-3`}>State Bank Of Pakistan</label>
         <p className={`text-${mode === 'light' ? 'dark' : 'light'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium recusandae dicta repellat ipsum rerum. Temporibus exercitationem ea cupiditate suscipit at sapiente rerum voluptas facilis amet laboriosam iste ducimus a facere, veniam similique dolorum quisquam nobis necessitatibus cumque eligendi omnis minima? Provident placeat itaque nulla voluptates, numquam blanditiis repudiandae cum molestias cupiditate suscipit? Temporibus atque, quasi excepturi delectus facere inventore. Similique!</p>
         <p className={`text-${mode === 'light' ? 'dark' : 'light'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium recusandae dicta repellat ipsum rerum. Temporibus exercitationem ea cupiditate suscipit at sapiente rerum voluptas facilis amet laboriosam iste ducimus a facere, veniam similique dolorum quisquam nobis necessitatibus cumque eligendi omnis minima? Provident placeat itaque nulla voluptates, numquam blanditiis repudiandae cum molestias cupiditate suscipit? Temporibus atque, quasi excepturi delectus facere inventore. Similique!</p>
         <p className={`text-${mode === 'light' ? 'dark' : 'light'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium recusandae dicta repellat ipsum rerum. Temporibus exercitationem ea cupiditate suscipit at sapiente rerum voluptas facilis amet laboriosam iste ducimus a facere, veniam similique dolorum quisquam nobis necessitatibus cumque eligendi omnis minima? Provident placeat itaque nulla voluptates, numquam blanditiis repudiandae cum molestias cupiditate suscipit? Temporibus atque, quasi excepturi delectus facere inventore. Similique!</p>
         <button className={`btn btn-${mode === 'light' ? 'dark' : 'light'} mx-2 my-2`} onClick={() => { dispatch(actionCreator.WithdrawMoney(1000)) }}>-</button>
         <span className={`text-${mode === 'light' ? 'dark' : 'light'}`}>Add/Withdraw {balance} Money</span>
         <button className={`btn btn-${mode === 'light' ? 'dark' : 'light'} mx-2 my-2`} onClick={() => { dispatch(actionCreator.DepositMoney(1000)) }}>+</button>
      </div>
   )
}

export default Bank
