import { createSlice, configureStore } from "@reduxjs/toolkit";

// REDUX STORE

const initialState = { counter: 0, showCounter: true };

// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// 🟢 Redux Toolkit

/* A slice of our global store state. Can have multiple state slices.
    -- Add the State slices reducer methods (in its 'reducers' property) to the 'configureStore()' function 
    -- Redux Toolkit configureStore()' function will then combine all these reducer methods into ONE Reducer function for our store to use. 
    -- Because remember we can only have ONE store and ONE Reducer Function with Redux.
*/
const counterSlice = createSlice({
  name: "counter",
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
      console.log(action);
      state.counter = state.counter + action.payload.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer, // ---> ⭐⭐⭐ the property name 'counter' will be used in components 'useSelector' hook to access this state slice
  },
});

/*  
    - 'counterActions' variable will contain automatically generated reducer methods from the reducer methods we created in 'counterSlice'. 
    - When dispatching actions, we call these reducer methods which will then create an 'Action Objects'. Thus these automatically generated methods are called 'Action Creators'
    - These 'Action Objects' can then be used in other components to dispatch actions. 
    - The created 'Action Objects' will contain unique identifiers that point to the reducer methods we created in 'counterSlice', along with any 'Action payloads' we might have included when dispatching an action. 
    - The dispatched action payload will be stored in a 'payload' property, which we can use in our reducer methods in 'counterSlice' inorder to access it and update our sttate accordingly. 
    
*/

// -- Will be used in app components to dispatch action to the store
export const counterActions = counterSlice.actions;

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
