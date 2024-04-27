const FirebaseReducer = (state, action) => {
    switch (action.type) {
      case 'SET_APPOINTMENTS':
        return { ...state, appointment: action.payload };
      default:
        return state;
    }
  };
 
  export default FirebaseReducer;