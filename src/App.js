import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from './store/index';
import './style.css';

export default function App() {
  const state = useSelector(state => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div>
      <h1>Selected Room : {state.selectedRoom}</h1>
      <h1>Selected Floor : {state.selectedFloor}</h1>
      <button onClick={() => depositMoney(1000)}> Room 1 </button>
      <button onClick={() => withdrawMoney(1000)}> Room 2 </button>
    </div>
  );
}
