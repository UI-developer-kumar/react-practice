import React from 'react'

function JsxAssignments() {
    let n1 = "prem"
    let n2 = "kumar"

    let ar = [121, 22, 32, 4, 5,6]
    let ar2 = ["prem", "kumar", "premkumar"]
    let name = "prem"
    let num =200
    let num2 = 300
  return (
    <div>
        <h1>JsxAssignments</h1>
            <h1>{`my name is ${n1}${n2}`}</h1>
            <p>{ar}</p>
            <p>{ar2}</p>
            <p>{Math.sqrt(14)}</p>
            <p>{parseInt(134.42)}</p>
            <p>{name.toUpperCase()}</p>
            <p>{name.length}</p>
            <p>{name.split("").reverse().join("")}</p>
            <p>{num + num2}</p>
            <p>{num < num2 ? num : num2}</p>
            <p>prompt({num % 2 === 0  ? "even" : "odd"})</p>
            <ul>
                {
                    ar.map((a) => {
                        return <li>{Math.sqrt(a)}</li>
                    })
                }
            </ul>
            <ul>
                {
                    ar.map((a) => {
                        return <li><h1>{a}</h1></li>
                    })
                }
            </ul>
            
                {
                    ar.sort().map((a) => {
                        return <li>{a}</li>
                    })
                }
            
    </div>
  )
}

export default JsxAssignments