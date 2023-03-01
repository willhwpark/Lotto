import React, {useState} from "react";
import "./App.css";

function App() {

  const [num, setNum] = useState(0);

  function Lottery() {
      let winningNumber = [];
      for (let i = 0; i < 7; i++) {
          let numberGenerator = Math.floor(Math.random() * 45) + 1;
          let noDuplicate = winningNumber.includes(numberGenerator);
          if (!noDuplicate) {
              winningNumber.push(numberGenerator);
          } else {
              while (noDuplicate) {
                  numberGenerator = Math.floor(Math.random() * 45) + 1;
                  noDuplicate = winningNumber.includes(numberGenerator);
                  if (!noDuplicate) {
                      winningNumber.push(numberGenerator);
                  }
              }
          }
      }
      winningNumber.sort(function (a,b) {
          if(a > b) return 1;
          if(a < b) return -1;
      });
      console.log(winningNumber);
      return winningNumber;
  }
  const handleClick = () => {
      setNum(Lottery());
  }
  return (
    <div className="App">
      <h1>World Wide Lottery</h1>
      <h1>Winning Number</h1>
      <h1>{num + " "}</h1>
      <button onClick={handleClick}>Generate</button>
    </div>
  );
}

export default App;
