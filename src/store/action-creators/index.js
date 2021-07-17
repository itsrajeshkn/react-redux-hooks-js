export const depositMoney = account => {
  return dispatch => {
    dispatch({
      type: 'deposit',
      payload: account
    });
  };
};

export const withdrawMoney = account => {
  return dispatch => {
    dispatch({
      type: 'withdraw',
      payload: account
    });
  };
};
