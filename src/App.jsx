import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { IncNum } from "./state/action/action";
import { DecNum } from "./state/action/action";

function App() {
  const state = useSelector((state) => state.Reducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>React Redux</h1>
      <h1>{state}</h1>
      <button onClick={() => dispatch(IncNum())}>+</button>
      <button onClick={() => dispatch(DecNum())}>-</button>
    </div>
  );
}

export default App;
