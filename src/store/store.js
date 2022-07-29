import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counterSlice";
import authSlice from "./authSlice";

// -----------------------------------------------------------------------------------------
// 🟢 Redux Toolkit

/* 

⭐⭐⭐  IMPORTANT: 
    - Even when we work with multiple state slices, we still only have ONE Redux Store. 
    - So we only call 'configureStore()' ONCE in an App  ⭐⭐⭐
    - And that store only has ONE root 'reducer' property, where we can register our state slices methods.
    - These registered state slices methods, in the 'reducer' property, are then merged together by Redux to form ONE main Reducer function that can be used in the store.   

*/

// - We register the reducer methods we created in each state slice, to the store.
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer, // ⭐⭐⭐ the property name 'counter' will be used in components 'useSelector' hook to access this state slice
    authentication: authSlice.reducer,
  },
});

export default store;

// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
/*
/🔴 STANDARD Redux  WITHOUT  Redux Toolkit

import { createStore } from "redux";

// 1. Create 'Reducer function'
const counterReducer = (state = initialState, action) => {
  // console.log(state);
  console.log(action);

  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "INCREASE_BY") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "TOGGLE_COUNTER") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

// 2. Create the Redux Store and pass in the 'Reducer function'
const counterStore = createStore(counterReducer);

// 3. Provide the Redux store to the React App. ie:  Connect the React app to the Redux store, so that components in this App can dispatch and listen to changes in the store.
// export default counterStore;
// -----------------------------------------------------------------------------------------
*/
