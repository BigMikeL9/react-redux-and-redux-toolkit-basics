import { createSlice, configureStore } from "@reduxjs/toolkit";

// REDUX STORE

const initialState = { counter: 0, showCounter: true };

// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// 🟢 Redux Toolkit

const counterSlice = createSlice({
  name: " counter",
  initialState, // --> 📝 Remember ES6+ syntax that is same as writing 'initialState: initialState,'
  reducers: {
    increment(state, action) {
      // --> 👆👆👆 📝 Remember ES6+ object methods syntax that is the same as writing 'increment: function() {....},'
      state.counter++;
      // --> 👆👆👆 ⭐ even tho it seems we are DIRECTLY mutating state property, 'IMMER' package updates the new state in an IMMUTABLE manner behind the scenes by returning a new state object that overrides the previous one. See How STANDARD Redux without Redux Toolkit is setup below and see notes.
    },
    decrement(state, action) {
      state.counter--;
    },
    increase_By(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

console.log(counterSlice);

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

console.log(counterStore);

export default counterStore;
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------

/*
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
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
