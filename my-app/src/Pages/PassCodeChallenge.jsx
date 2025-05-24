import React, { useState } from 'react'

function PassCodeChallenge() {
    const num=[0,1,2,3,4,5,6,7,8,9];
    const handleClick=()=>{
    }
    const [passcode,setpass]=useState("0000");
    // const passcode="0000";
  return (<>
        <div className="numbers-grid">
        {num.map((num) => (
          <button className="button" key={num} onClick={() => handleClick(num)}>
            {num}
          </button>
        ))}
        </div>
        <div>
        password is {passcode}
        </div>
        </>
  )
}

export default PassCodeChallenge
