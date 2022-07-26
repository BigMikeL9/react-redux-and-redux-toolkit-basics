import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

// REDUX STORE

const initialState = { counter: 0, showCounter: true };

// ---------------------------------------------------------
// ----- REDUX Toolkit -----
createSlice({
  name: "counter",
  initialState, // --> 📝 Remember ES6+ syntax that is same as writing 'initialState: initialState,'
  reducers: {
    increment(state, action) {
      // --> 👆👆👆 📝 Remember ES6+ object methods syntax that is the same as writing 'increment: function() {....},'

      state.counter++;
      // --> ⭐ even tho it seems we are DIRECTLY mutating state property, 'IMMER' package updates the new state in an IMMUTABLE manner behind the scenes. See notes.
    },

    decrement(state, action) {
      state.counter--;
    },

    increaseBy(state, action) {
      state.counter = state.counter + action.amount;
    },

    toggleCounter(state, action) {
      state.showCounter = !state.showCounter;
    },
  },
});
// ---------------------------------------------------------

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

export default counterStore;
