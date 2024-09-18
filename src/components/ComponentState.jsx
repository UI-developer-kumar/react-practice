import React, { useState } from 'react'

function ComponentState() {
    const [x, setX] = useState("prem")
    const [y, setY] = useState("kumar")
    const [z, setZ] = useState()
    const [ar, setAr] =useState([1,2,3,4,5])
    const [br, setBr] =useState(["prem", "kumar", "santhosh"])
    const [cr, setCr] = useState("prem")
    const [dr, setDr] = useState(3)
    const [er, setEr] = useState(7)
    const [fr, setFr] = useState(540)
    const [gr, setGr] = useState(970)
    var h = +prompt("enter a number")
    const [i, setI] = useState(h)
    const [jr, setJr] = useState(["dog","cat","pig","mouse"])
    var [kr, setKr] = useState([12, 23, 19, 293, 488, 39]);
    var [lr, setLr] = useState([100, 200, 150, 230, 120]);
  return (
    <div>
        <h1>{x + y}</h1>

        <div>{true &&"prem"}</div>
        <div>
            {
                ar.map((eachItem) => {
                    return(
                        <li style={{listStyle:"none"}}>{eachItem}</li>
                    )
                })
            }
        </div>

        <div>
            <h1>
                {
                    br.map((a) => {
                        return(
                            <li style={{listStyle:"none"}}>{a.slice(0,2)}</li>
                        )
                    })
                }
            </h1>
        </div>

        <div>
            <h1>{Math.sqrt(14)}</h1>
        </div>
        <div>
            <h2>{parseInt(134.42)}</h2>
        </div>

        <div>
            <h2>{cr.toUpperCase()}</h2>
        </div>
        <div>
            <h2>{cr.length}</h2>
        </div>
        <div>
            <h2>{cr.split("").reverse().join("")}</h2>
        </div>
        <div>
            <h2>{dr + er}</h2>
        </div>
        <div>
            <h2>{fr > gr ? fr : gr}</h2>
        </div>
        {/* <div>
            <h1>{h >=0 ? "positive" : "negative"}</h1>
        </div> */}
        <div>
            <h2>{h%2===0 ? (<h3>even</h3>) : (<h3>odd</h3>)}</h2>
        </div>
        <div>
            
            <ol>
                {
                    jr.map((o) => {
                        return <li>{o.toUpperCase()}</li>
                    })
                }
            </ol>
            <ul>
                {
                    jr.map((o) => {
                        return <li>{o.toLowerCase()}</li>
                    })
                }
            </ul>
        </div>
        <div>
            <ul>
                {
                    ar.map((na) => {
                        return(
                            <li style={{listStyle:"none"}}>{Math.SQRT2.na}</li>
                        )
                    })
                }
            </ul>
        </div>
        <div>
            {
                kr.concat(lr).map((cr) => {
                    return(
                        <li>{cr}</li>
                    )
                })
            }
        </div>
        <div>
            {
                kr.concat(lr).sort((a,b) =>{return a>b?1:-1}).map((cr) => {
                    return(
                        <li>{cr}</li>
                    )
                })
            }
        </div>
        <div style={{border:"2px solid", marginBottom:"10px"}}>
            {
                kr.map((cr) => {
                    return(
                        <li>
                            {cr%2 ===0 ? <i>{cr}</i> : <b>{cr}</b>}
                        </li>
                    )
                })
            }
        </div>
        <div style={{border:"2px solid"}}>
            {
               kr.reduce((a,b) => {return a + b}, 0)
            }
        </div>
        <div>
            {
                jr.map((le) => {
                    return(
                        <li>{le.length}</li>
                    )
                })
            }
        </div>
        <div>
            <table border={2}>
                {
                    br.map((s) => {
                        return(
                            <tr>
                                <td>{s}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    </div>
  )
}

export default ComponentState