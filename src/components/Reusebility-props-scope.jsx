import React, { useState }  from "react";
import Practice2 from "./Reusebility";

const Practice1 = (props) => {

    const [c, setC] = useState(props.value)

    const inc = () => {
        setC(c + props.step)
    }
    const dec = () => {
        setC(c - props.step)
    }

    const reset = () => {
        setC(props.value)
    }

    return(
        <div style={{border: "2px solid red", marginBottom:"16px"}}>
            <h1>{props.children}Count: {c}</h1>
            <button onClick={() => {inc()}}>Increment</button>
            <button onClick={() => {dec()}}>Decrement</button>
            <button onClick={() => {reset()}}>Reset</button>
            <Practice2 />
        </div>
    )
}

export default Practice1