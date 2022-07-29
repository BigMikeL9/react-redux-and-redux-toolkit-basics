import { createSlice, configureStore } from "@reduxjs/toolkit";

// REDUX STORE

// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// 🟢 Redux Toolkit

const initialState = { counter: 0, showCounter: true };

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

/*  
    - 'counterActions' variable will contain automatically generated reducer methods from the reducer methods we created in 'counterSlice'. 
    - When dispatching actions, we call these reducer methods which will then create an 'Action Objects'. Thus these automatically generated methods are called 'Action Creators'
    - These 'Action Objects' can then be used in other components to dispatch actions. 
    - The created 'Action Objects' will contain unique identifiers that point to the reducer methods we created in 'counterSlice', along with any 'Action payloads' we might have included when dispatching an action. 
    - The dispatched action payload will be stored in a 'payload' property, which we can use in our reducer methods in 'counterSlice' inorder to access it and update our sttate accordingly. 
    
*/

// -- Make the 'actions' available to be imported in other components and used to dispatch 'actions' to the store.
export const counterActions = counterSlice.actions;

export default counterSlice;
