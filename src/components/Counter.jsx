import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
// import { persistor } from "../store";

// const handleClearState = () => {
//   persistor.purge(); // Clears the persisted state
//   window.location.reload(); // Optional: Reload the app to reset state in memory
// };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
