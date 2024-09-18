import React from 'react'

function EventHandling() {
    let c = 120
    const increment = () => {
         c++
        let result = document.getElementById("num")
        result.innerHTML = c
    }
    const decrement = () => {
         c--
        let result = document.getElementById("num")
        result.innerHTML = c
    }
    const reset = () => {
            c = c
        let result = document.getElementById("num")
        result.innerHTML = c
    }

    let ar = []
    const pushValue = () => {
        const id = document.getElementById("array").value
        const tag = document.getElementById("h1")
        tag.innerHTML = ''
        ar.push(id)
        ar.forEach((g) => {
            var k = document.createElement("li")
            k.innerHTML = g
            document.getElementById("h1").appendChild(k)
        })
    }

    let ar2 = []
    const handleSubmit = () => {
        const list = document.getElementById("list").innerHTML = ''
        ar2.forEach((l) =>{
            let li = document.createElement("li")
            li.innerHTML = l
            document.getElementById("list").appendChild(li)
            console.log(li);
            
        })
    }

    // const abc = () => {
    //     var date = new Date()
    //     var time = date.getHours() + ":" + date.getMinutes() + ":" +date.getSeconds()
    //     document.getElementById("dd").innerHTML = time
    // }
    // setInterval(()=>{
    //     abc()
    // }, 1000)
  return (
    <div>
        <div>
        <h1 id='num'>{c}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </div>

        <div>
            <input type="text" id='array' />
            <button onClick={pushValue}>push into array</button>
            <ul id='h1'></ul>
        </div>

        <div>
            <input type="text" id='name' />
            <button onClick={handleSubmit}>add todo</button>
            <ul id='list'></ul>
        </div>

        <div>
            <h1 id='dd'></h1>
        </div>
        
    </div>
    
  )
}

export default EventHandling