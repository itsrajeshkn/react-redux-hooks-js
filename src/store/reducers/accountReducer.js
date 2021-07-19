const reducer = (state = { selectedRoom: '', selectedFloor: '' }, action) => {
  switch (action.type) {
    case 'deposit':
      return { ...state, selectedFloor: 'FirstFloor', selectedRoom: 'Room1' };
    case 'withdraw':
      return { ...state, selectedFloor: 'SecondFloor', selectedRoom: 'Room2' };
    default:
      return { ...state };
  }
};

export default reducer;
