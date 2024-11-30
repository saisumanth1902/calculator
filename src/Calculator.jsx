import { useEffect, useState } from 'react';
import './Calculator.css';
function Calculator(){
    const [input, setInput] = useState(""); // Stores the input expression
    const [result, setResult] = useState(""); // Stores the calculated result
    const handleClick = (value) => {
        if (value === "=") {
          try {
            if (input.trim() === "") {
              setResult("Error");
            } else {
              // Evaluate the expression using eval()
              const evaluation = eval(input); // BODMAS is applied here automatically
              setResult(evaluation === Infinity ? "Infinity" : evaluation);
            }
          } catch {
            setResult("Error");
          }
        } else if (value === "C") {
          setInput("");
          setResult("");
        } else {
          setInput((prev) => prev + value);
        }
      };
    return <>
        <h1>React Calculator</h1>
        <input
            type="text"
            value={input}
            readOnly
            placeholder="Enter expression"
        />
        <div>{result}</div>
        <div className="button-grid">
        {["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "C", "0", "=", "/"].map(
          (btn) => (
            <button key={btn} onClick={() => handleClick(btn)}>
              {btn}
            </button>
          )
        )}
      </div>
    
    </>
}

export default Calculator