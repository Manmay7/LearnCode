import React, { useState } from 'react'
import "./PassCode.css";
function PassCodeChallenge() {
    const num=[0,1,2,3,4,5,6,7,8,9];
    const [passcode,setPass]=useState("0000");
    const [,setCount]=useState(0);
    function replaceCharAt(str, index, replacement) {
      if (index < 0 || index >= str.length) return str; // index out of range
      return str.substring(0, index) + replacement + str.substring(index + 1);
    }    
    const handleClick = (digit) => {
      setCount(prevCount => {
        let newCount = prevCount + 1;
        let newPass = replaceCharAt(passcode, prevCount, digit);
        
        if (prevCount === 4) {
          setPass("0000");
          return 0;
        } else {
          setPass(newPass);
          return newCount;
        }
      });
    };
    // const passcode="0000";
  return (<>
        <div className="numbers-grid">
          <div className='number-button'> 
        {num.map((num) => (
          <button className="button" key={num} onClick={() => handleClick(num)}>
            {num}
          </button>
        ))}
        </div>
        <div>
        password is {passcode}
        </div>
        </div>
        
        </>
  )
}

export default PassCodeChallenge
