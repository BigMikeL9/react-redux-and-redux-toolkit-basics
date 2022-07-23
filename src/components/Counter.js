import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux/es/exports";

const Counter = () => {
  // 'useSelector()' will automatically be executed for us by 'react-redux'
  // ⭐⭐ whenever the extracted data from the store changes ('state.counter') ,redux wil re-render/re-execute this component. ⭐⭐
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

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

  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE_COUNTER" });
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
