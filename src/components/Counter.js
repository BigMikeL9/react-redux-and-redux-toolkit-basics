import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux/es/exports";

import { counterActions } from "../store/counterStore";

const Counter = () => {
  // 'useSelector()' will automatically be executed for us by 'react-redux'
  // ⭐⭐ whenever the extracted data from the store changes ('state.counter'), redux wil re-render/re-execute this component. ⭐⭐
  const counterStore = useSelector((state) => state.counter);

  const { counter, showCounter } = counterStore;

  console.log(counterStore);

  // --- used to dispatch actions to the store and update the state
  const dispatch = useDispatch();

  // console.log(counter);

  const incrementCounterHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseBy = () => {
    dispatch(counterActions.increase_By({ amount: 10 })); // passing an 'Action Payload' with a property name, in an object, as an argument.
  };

  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div className={classes["buttons-container"]}>
        <button onClick={incrementCounterHandler}>+</button>
        <button onClick={increaseBy}>Increase by 10</button>
        <button onClick={decrementCounterHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
