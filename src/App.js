import React from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions/actions";
import { decrement } from "./actions/actions";
import { signIn } from "./actions/actions";
import { signOut } from "./actions/actions";

export default function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);

  return (
    <div className="App">
      {isLogged ? <h1>you are signed in</h1> : " "}

      <h1>Counter = {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <button onClick={() => dispatch(signIn())}>Sign In</button>
      <button onClick={() => dispatch(signOut())}>Sign out</button>
    </div>
  );
}
