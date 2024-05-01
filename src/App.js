import logo from './logo.svg';
import './App.css';
import { ButtonComponent}  from './ButtonComponent';
import { useState } from 'react';
function App() {
  const buttonTypes = ["Add","Subtract","Multiply"]
  const [intialValue,setInitialValue] = useState(2)

  const handleOperation = (operationType)=>{
     console.log(operationType,"operationType")
  }
 
  return (
    <div className="App">
    <>
      The Number :
    </>
     {buttonTypes.map((type,index)=>{
      return(
        <ButtonComponent id={index} handleSomthing={handleOperation}  operationType={type}/>
      ) 
     })}
    </div>
  );
}

export default App;
