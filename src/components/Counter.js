import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux/es/exports";

const Counter = () => {
  // 'useSelector()' will automatically be executed for us by 'react-redux'
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  console.log(counter);

  const incrementCounterHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const increaseBy = () => {
    dispatch({ type: "INCREASE_BY", amount: 10 });
  };

  const decrementCounterHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
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
