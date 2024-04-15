import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { action_one } from './action';

function App() {
  const counter=useSelector((a)=>a)
  const dispatch=useDispatch()
  return (
    <div className="App">
    <h1>Curretn counter is{counter}</h1>
    <button onClick={()=>dispatch(action_one)}>Increase counter</button>
    <button>Async counter</button>
    </div>
  );
}

export default App;
