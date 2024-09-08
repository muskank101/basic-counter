import './App.css'
import {useState} from "react";
function App() {
  //state , component
  //here component is App and state is count
  // let state={
  //   count:0
  // }
  const [count,setCount]=useState(0);
  return(
    <div>
      <CustomButton count={count} setCount={setCount}> </CustomButton> 
    </div>
  )
}

function CustomButton(props){
  function buttonHandler(){
    props.setCount(props.count+1);
  }
  return(
    <button onClick={buttonHandler}>
      Counter {props.count}
    </button>
  )
}

export default App
