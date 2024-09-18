import React, { useEffect, useState } from 'react'

function TodolistWithDltBtn() {
    const [todo, setTodo] = useState('')
    const [list, setList] = useState([])
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)
    const [value, setValue] = useState(10)
    const [count, setCount] = useState(0)
    const [ar, setAr] = useState(["prem","premkumar"])
    const [blur, setBlur] = useState()
    const [firstvalue, setFirstvalue] = useState()
    const [secondvalue, setSecondvalue] = useState()
    const [result, setResult] =useState()
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTime(new Date().toLocaleTimeString())
    //     }, 1000)
    //     return () => clearInterval(interval)
    // }, [])
    const handleSubmit = () => {
        setList([...list, todo])
        setTodo('')
    }
    const handleDelete = (i) => {
        let temp = list.splice(i, 1)
        setList([temp])
    }

    const handleClick = (l,i) => {
        let id = document.getElementById("dh")
        let id2 = document.getElementById("ef")
        id.innerHTML = l 
        id2.innerHTML = i
    }
    const handleBlur = (e) => {
        setBlur(e.target.value)
    }
    const handleSubstract = () => {
        setResult(firstvalue - secondvalue)
    }
  return (
    <div>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button onClick={handleSubmit}>add</button>
        <ul>
            {
                list.map((t) => {
                    return(
                        <div>
                            <li>{t}</li>
                            <button onClick={handleDelete}>del</button>
                        </div>
                    )
                })
            }
        </ul>
        <div>
            <h1 >{time}</h1>
        </div>
        <div>
                <h1>Like:{like}</h1>
                <h1>Dislike:{dislike}</h1>
                <button onClick={()=>setLike(like + 1)}>like</button>
                <button onClick={() =>setDislike(dislike + 1)}>dislike</button>
        </div>
            <div>
                <h1>{value}</h1>
                <button onClick={() => {setValue(value + 1)}}>increment</button>
            </div>
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>increment</button>
            <button onClick={() => {setCount(count - 1)}}>decrement</button>
            <button onClick={() => {setCount(0)}}>reset</button>
        </div>
        <div>
            <ul>
                {
                    ar.map((l,i) => {
                        return(
                            <li onClick={()=>{alert(l)}}>{l}</li>
                        )
                    })
                }
            </ul>
        </div>
        <div>
            <ul>
                {
                    ar.map((l,i) => {
                        return(
                            <li>{l} <button onClick={()=>handleClick(l,i)}>see</button></li>
                        )
                    })
                }
            </ul>
            <h1 id='dh'></h1>
            <h2 id='ef'></h2>
        </div>
        <div>
            <input type="text" onBlur={handleBlur} placeholder='on blur event'/>
            <h1>{blur}</h1>
        </div>
        <div>
            <input type="text" value={firstvalue} onChange={(e)=>setFirstvalue(+e.target.value)}/>
            <input type="text" value={secondvalue} onChange={(e)=>setSecondvalue(+e.target.value)}/>
            <button onClick={handleSubstract}>substract</button>
            <h1>{result}</h1>
        </div>
    </div>
  )
}

export default TodolistWithDltBtn