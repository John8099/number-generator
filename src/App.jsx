import logo from "./logo.svg";
import "./App.css";
import CountUp from "react-countup";
import PrimaryButton from "./components/PrimaryButton/index"
import { useState } from "react";

function App() {
  const maxNumber = 0;

  const [randomNum, setRandomNum] = useState();
  const [generatedNumber, setGeneratedNumber] = useState([])

  const handleStart = () => {
    while (true) {
      const rand = Math.floor(Math.random() * maxNumber) + 1;

      if (maxNumber === generatedNumber.length) {
        alert("All Done!");
        break;
      }
      else if (!generatedNumber.includes(rand)) {
        setRandomNum(rand)
        setGeneratedNumber([...generatedNumber, rand])
        console.log(generatedNumber)
        break;
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ position: "absolute", top: "20px", width: "30vw" }}>
          Generated Numbers
          <div style={{ padding: "0px 20px" }}>
            <span>{generatedNumber.slice(0, generatedNumber.length - 1).join(", ")}</span>
          </div>
        </div>
        <h1 style={{ marginBottom: 0, fontSize: "100px" }}>
          Lucky Number
        </h1>
        <CountUp
          start={0}
          end={randomNum}
          duration={5}
        >
          {({ countUpRef, start }) => (
            <>
              <h1 style={{ marginTop: 0, fontSize: "200px"}} ref={countUpRef}>0</h1>
              <PrimaryButton
                label="Start"
                onClick={() => {
                  handleStart()
                  start()
                }}
              />
            </>
          )}
        </CountUp>
      </header>
    </div>
  );
}

export default App;
