import React from 'react'

function JSXEventHandling() {

    const abc = (e) => {
        console.log(e);
        
    }

    const bbc = (e) => {
        console.log(e.target.innerHTML);
        
    }
    const cdc = (e) => {
        console.log(e.target.id);
        
    }

    const h1 = (e) => {
        console.log(e.target.innerHTML);
        
    }

    const handleInput = () => {
        const id = document.getElementById("text")
        console.log(id.value);
        
    }
    const handleValue = () => {
        const id = document.getElementById("dd")
        const h1 = document.getElementById("h1")
        h1.innerHTML= id.value.toUpperCase()
    }

    const kab = (e) => {
        var t1 = document.getElementById("t1")
        t1.innerHTML = e.target.value
    }
    const sab = (e) => {
        var t2 = document.getElementById("t2")
        t2.innerHTML = e.target.value
    }

    const clt = (e) => {
        const t3 = document.getElementById("t3")
        t3.innerHTML = ""
        const iv = document.getElementById("keyup2")
        iv.value = ""
    }

    const nab = (e) => {
        const t3 = document.getElementById("t3")
        t3.innerHTML = e.target.value
    }

    const multi = () => {
        const v1 = document.getElementById("value1")
        const v2 = document.getElementById("value2")
        const add = (+v1.value) * (+v2.value)
        const result = document.getElementById("addition")
        result.innerHTML = add
    }

    const div = () => {
        const v1 = document.getElementById("value1")
        const v2 = document.getElementById("value2")
        const add = (+v1.value) / (+v2.value)
        const result = document.getElementById("addition")
        result.innerHTML = add
    }

    const crty = (e) => {
        const radio = document.getElementById("radio")
        radio.innerHTML = e.target.value
    }
        var techs = []
    const valueChange = (e) => {
        const tag = document.getElementById("tag")
        if(e.target.value === false){
            var i = techs.indexOf(e.target.value);
            techs.splice(i,1)
            tag.innerHTML = techs
        }else {
            techs.push(e.target.value)
            tag.innerHTML = techs
        }
    }

    const date = (e) => {
        const date = document.getElementById("d1")
        date.innerHTML = e.target.value
    }

    const btn = (x) => {
        const tag3 = document.getElementById("tag3")
        tag3.innerHTML = x
    }

        let ar123 = ["prem", "kumar", "premkumar"]

        const arIndex = (a,i) => {
            const dh = document.getElementById("dh")
            dh.innerHTML = a + i
        }

        var students = [
            {
              firstname:"Praveen",
              lastname:"Gubbala",
              age:40,
              gender:'male'
            },
            {
              firstname:"Smrithi",
              lastname:"mandana",
              age:25,
              gender:'female'
            },
            {
              firstname:"mithali",
              lastname:"raj",
              age:39,
              gender:'female'
            },
            {
              firstname:"Rohit",
              lastname:"Sharma",
              age:35,
              gender:'male'
            },
            {
              firstname:"Sachin",
              lastname:"Tendulkar",
              age:50,
              gender:'male'
            },
        ]

        const dis = (i, s) => {
            const big = document.getElementById("big")
            const small = document.getElementById("small")
            big.innerHTML = i
            small.innerHTML = s
        }
  return (
    <div>
        <button onClick={()=>alert("clicked")}>click me</button>
        <button onClick={()=>console.log("clicked")
        }>see console</button>
        <button onClick={abc}>event in console</button>

        <div style={{width:"300px", height:"200px", border:"2px solid"}} onClick={abc}>see event</div>

        <div style={{width:"150px", height:"50px", border:"2px solid"}} onClick={bbc}>This is on console</div>

        <div style={{width:"150px", height:"50px", border:"2px solid"}} id="16" onClick={cdc}> id in console</div>

        <h1 onClick={h1}>This is H1</h1>

        <div>
        <input type="text" name="text" id="text" />
        <button onClick={handleInput}>see in console</button>
        </div>
        <div>
        <input type="text" name="text" id="dd" />
        <button onClick={handleValue}>clicke me</button>
            <h1 id='h1'></h1>
        </div>

        <div>
            <input type="text" id='keyup' onKeyUp={kab}/>
            <h1 id='t1'></h1>
        </div>
        <div>
            <input type="text" id='blur' onBlur={sab}/>
            <h1 id='t2'></h1>
        </div>

        <div>
            <input type="text" id='keyup2' onKeyUp={nab}/>
            <button onClick={clt}>clearText</button>
            <h1 id='t3'></h1>
        </div>

        <div>
            <input type="text" id='value1' />
            <input type="text" id='value2' />
            <button onClick={multi}>mul</button>
            <button onClick={div}>div</button>
            <h1 id='addition'></h1>
        </div>

        <div>
            <input name='crty' type="radio" value="india" onChange={crty}/>IND
            <input name='crty' type="radio" value="united states of america" onChange={crty} />USA
            <h1 id='radio'></h1>
        </div>

        <div >
            <input type="checkbox" name="name4" id="name4" value="Reactjs"  onChange={valueChange}/>Reactjs
            <input type="checkbox" name="name4" id="name4" value="Angular"  onChange={valueChange}/>Angular
            <input type="checkbox" name="name4" id="name4" value="Javascript"  onChange={valueChange}/>Javascript
            <input type="checkbox" name="name4" id="name4" value="Html" onChange={valueChange} />Html
            <h1 id='tag'></h1>
        </div>

        <div>
            <input type="date" onChange={date}/>
            <h1 id='d1'></h1>
        </div>

        <div>
            <button onClick={() =>{ btn(10)}}>btn 1</button>
            <button onClick={() =>{ btn(100)}}>btn 2</button>
            <button onClick={() =>{ btn(1000)}}>btn 3</button>
            <h1 id='tag3'></h1>
        </div>
        <div>
            {
                ar123.map((a,i) => {
                    return(
                        <li onClick={() => {arIndex(a, i)}}>{a}</li>
                    )
                })
            }
            <h1 id='dh'></h1>
        </div>

        <div>
            {
                students.map((s, i) => {
                    return(
                        <li onClick={() => {dis(i,s.lastname)}}>{s.firstname}</li>
                    )
                })
            }
            <h1 id='big'></h1>
            <h3 id='small'></h3>
        </div>
    </div>
  )
}

export default JSXEventHandling