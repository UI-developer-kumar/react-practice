import React, { useState } from 'react'

function EventHandlingInComponent() {
      const [c, setC] = useState()
      const [text, setText] = useState('')
      const [add, setAdd] = useState()
      const [mul, setMul] = useState()
      const [result, setResult] = useState()
      const [country, setCountry] = useState()
      const [option, setOption] = useState()
      const [check, setCheck] = useState([])
      const [arg, setArg] = useState()
      const [date, setDate] = useState()
      const [par,setPar] = useState([])
      const [inputValue, setInputValue] = useState('')
      const [push, setPush] = useState([])
   const seeConsole = () => {
    console.log("clicked");
    
  }
  const eventInConsole = (e) => {
    console.log(e);
  }
  const divEvent = (e) => {
    console.log(e);
    
  }
  const clientEvent = (e) => {
    console.log(e.clientX);
    console.log(e.clientY);
    
  }
  const textEvent = (e) => {
    console.log(e.target.innerHTML);
    
  }
  const idEvent = (e) => {
    console.log(e.target.id);
    
  }
  const h1Tage = (e) => {
    console.log(e.target.innerHTML);
    
  }
  const labelEvent = (e) => {
    console.log(e.target.innerHTML);
    
  }
  const inputHandle = () => {
    const textBox = document.getElementById("in")
    console.log(textBox.value);
    
  }
  const handleChange = (e) => {
    setC(e.target.value)
  }
  const handleChangeTwo = (e) => {
    setC(e.target.value)
  }
  const handleClick = () => {
    setC(c.toUpperCase())
  }
  const changeText = (e) => {
    setText(e.target.value.toUpperCase())
  }
  const clearText = () => {
    setText('')
  }
  const addNum = (e) => {
      setAdd(e.target.value)
  }
  const addMul = (e) => {
    setMul(e.target.value)
  }
  const handleAddition = () => {
    let addition = add + mul
    setResult(addition)
  }
  const handleMulti = () => {
    let multiplication = add * mul
    setResult(multiplication)
  }
  const handleRadioChange = (e) => {
    setCountry(e.target.value)
  }
  const handleOption = (e)=> {
    setOption(e.target.value)
  }
  const handleCheck = (e) => {
    if(e.target.chacked === false){
        let updatedCheck = check.filter((check) => check !== e.target.value)
        setCheck(updatedCheck)
    }else{
      setCheck([...check, e.target.value])
    }
  }
  const handleDate = (e) => {
    setDate(e.target.value)
  }
  const pushArray = () => {
    let pId = document.getElementById('pr').value
    setPar(prevAr => [...prevAr, pId])
  }
  const pushingValues = () => {
      setPush([...push, inputValue])
      setInputValue('')
  }
  return (
    <div>
        <button onClick={() =>{alert()}}>click me</button>
        <button onClick={seeConsole}>see in console</button>
        <button onClick={eventInConsole}>event in console</button>
        <div onClick={divEvent} style={{width:"300px", height:"200px", border:"2px solid"}}>this is div</div>
        <div onClick={clientEvent} style={{width:"300px", height:"200px", border:"2px solid"}}>clientX and clientY</div>
        <div onClick={textEvent} style={{width:"300px", height:"200px", border:"2px solid"}}>clientX and clientY</div>
        <div id='123' onClick={idEvent} style={{width:"150px", height:"75px", border:"2px solid"}}>clientX and clientY</div>
        <h1 onClick={h1Tage}>This is H1</h1>
        <label onClick={labelEvent}>This is label</label>
        <div>
          <input type="text" id='in'/>
          <button onClick={inputHandle}>see in console</button>
        </div>
        <div>
          
            <input type="text" value={c} onChange={handleChange}/>
            <button onClick={()=>alert("value")}>clicke me</button>
            <h1>{c}</h1>
          
        </div>
        <div>
          <input type="text" value={c} onChange={handleChangeTwo} />
          <button onClick={handleClick}>see in capital</button>
          <h1>{c}</h1>
        </div>
        <div>
          <input type="text" value={text} onChange={changeText}/>
          <h1>{text}</h1>
          <button onClick={clearText}>Clear Text</button>
        </div>
        <div>
            <input type="text"  id='ad1' value={add} onChange={(e)=>{setAdd(+e.target.value)}}/>
            <input type="text"  id='mu1' value={mul} onChange={(e)=>{setMul(+e.target.value)}}/>
            <button onClick={handleAddition}>addi</button>
            <button onClick={handleMulti}>multi</button>
            <h1>{result}</h1>
        </div>
        <div>
          <input type="radio" name="name"  value="india" onChange={handleRadioChange}/>IND
          <input type="radio" name="name"  value="united states of america" onChange={handleRadioChange}/>USA
          <h1>{country}</h1>
        </div>
        <div>
          <select  onChange={handleOption}>
            <option value="india" >india</option>
            <option value="usa" >usa</option>
            <option value="america">america</option>
          </select>
          <h1>{option}</h1>
        </div>
        <div>
          <input type="checkbox" onClick={handleCheck} value="Reactjs"/> :Reactjs
          <input type="checkbox" onClick={handleCheck} value="JavaScript"/> :JavaScript
          <input type="checkbox" onClick={handleCheck} value="Redux"/> :Redux
          <h1>{check.join(',')}</h1>
        </div>
        <div>
          <button onClick={()=>{setArg(10)}}>btn1</button>
          <button onClick={()=>{setArg(20)}}>btn2</button>
          <button onClick={()=>{setArg(30)}}>btn3</button>
          <h1>{arg}</h1>
        </div>
        <div>
          <input type="date" onChange={handleDate} />
          <h1>{date}</h1>
        </div>
        <div>
          <input type="text" id='pr'/>
          <button onClick={pushArray}>add to ar</button>
          <h1>{par}</h1>
        </div>
        <div>
          <input type="text" id='dd' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
          <button onClick={pushingValues}>push</button>
          {
            push.map((a) => {
              return(
                <li>{a}</li>
              )
            })
          }
        </div>
    </div>
  )
}

export default EventHandlingInComponent