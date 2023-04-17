import { useSelector, useDispatch } from "react-redux";
import {
  // countSelector,
  decrement,
  increment,
} from "../../redux/reducers/Counter/CounterReducer";

function Counter() {
  const dispatch = useDispatch();

  let count = useSelector((state: any) => {
    return state.countReducer.count;
    // state.[keyName for a reducer that is specified during creation of root Reducer].[stateName]
  });

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default Counter;
