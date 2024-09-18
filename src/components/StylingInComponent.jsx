import React, { useState } from 'react'

function StylingInComponent() {
    const [students, setStudents] = useState([
        {
            name:"prem",
            age:29,
            place:"kng",
            gender:"male"
        },
        {
            name:"padhu",
            age:24,
            place:"ogl",
            gender:"female"
        },
        {
            name:"premkumar",
            age:29,
            place:"hyd",
            gender:"male"
        }
    ])
    const [number, setNumber] = useState([29])
    const maleimage = "https://i.pinimg.com/736x/2a/4e/8d/2a4e8dab6791ed643d5180bc72167f6d.jpg";
    const femaleimage = "https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407_640.png";

    const [string, setString] = useState("premkumar")
    const [numbers, setNumbers] = useState([1,2,3,4,5])
    let obj = {
        color : "blue"
    }

    let ar = ["prem", "premkumar", "kumar"]
    let ar2 = [
        {
            name:"prem",
            age:29,
            place:"kng"
        }
       
    ]
    let ar3 = [
        {
            name:"prem",
            age:29,
            place:"kng"
        },
        {
            name:"kumar",
            age:29,
            place:"ogl"
        },
        {
            name:"premkumar",
            age:29,
            place:"hyd"
        }
       
    ]
  return (
    <div>
        <h1 style={{color:"red"}}>Hello React</h1>
        <h1 style={{color:"red", background:"green"}}>Hello React</h1>
        <h1 style={{color:obj.color}}>Premkumar</h1>
        <div style={{display:"flex"}}>
            {
                ar.map((n) => {
                    return(
                        <div style={{padding:"10px", border:"2px solid", margin:"10px"}}>{n}</div>
                    )
                })
            }
        </div>
        <div>
            {
                ar2.map((d) => {
                    return(
                        <div style={{border:"2px solid", listStyle:"none"}}>
                        <li>Name:{d.name}</li>
                        <li>Age:{d.age}</li>
                        <li>Place:{d.place}</li>
                        </div>
                    )
                })
            }
        </div>
        <div >
            {
                ar3.map((nd) => {
                    return(
                        <div style={{border:"2px solid red",margin:"10px", padding:"10px", background:"lightpink",display:"inline-block"}}>
                            <h3>Name:{nd.name}</h3>
                            <h3>Age:{nd.age}</h3>
                            <h3>Place:{nd.place}</h3>
                        </div>
                    )
                })
            }
        </div>
        <div style={{display:"inline-flex", flexDirection:"column"}}>
            {
                students.map((s) =>{
                    const {name, age, place, gender} = s
                    return(
                        <div style={{display:"inline-flex", border:"2px solid",margin:"10px", alignItems:"center"}}>
                            <div style={{padding:"5px"}}>
                            <h3>{name}</h3>
                            <h3>{age}</h3>
                            <h3>{place}</h3>
                            <h3>{gender}</h3>
                            </div>
                            <div style={{padding:"5px"}}>
                                <img src={gender === "male"? maleimage : femaleimage} style={{width:"150px"}} alt="" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div>
            <h2 style={number%2==0?{background:"green"} : {background:"red"}}>{number}</h2>
        </div>
        <div>
            <table border="2px">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>place</th>
                    </tr>
                </thead>
                {
                    students.map((s) => {
                        const {name,age,place} = s
                        return(
                            <tbody>
                                <tr>
                                    <td>{name}</td>
                                    <td>{age}</td>
                                    <td>{place}</td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </div>
        <div>
            <h2 style={number>=0?{color:"green"}:{color:"red"}}>{number}</h2>
        </div>
        <div>
            <table border="2px">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>place</th>
                        <th>gender</th>
                    </tr>
                </thead>
                {
                    students.map((s) => {
                        const {name,age,place,gender} = s
                        return(
                            <tbody>
                                <tr style={gender==="female"?{background:"lightpink"}:{}}>
                                    <td>{name}</td>
                                    <td>{age}</td>
                                    <td>{place}</td>
                                    <td>{gender}</td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </div>
        <div>
            <h2 style={string.length%2===0?{color:"green"}:{color:"red"}}>{string}</h2>
        </div>
        <div>
            <table border="2px">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>place</th>
                        <th>gender</th>
                    </tr>
                </thead>
                {
                    students.map((s) => {
                        const {name,age,place,gender} = s
                        return(
                            <tbody>
                                <tr style={gender==="female"?{background:"lightpink"}:{background:"blue"}}>
                                    <td>{name}</td>
                                    <td>{age}</td>
                                    <td>{place}</td>
                                    <td>{gender}</td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </div>
        <div>
            {
                numbers.map((li) => {
                    return(
                        <li style={li%2===0?{color:"green"}:{color:"red"}}>{li}</li>
                    )
                })
            }
        </div>
    </div>
  )
}

export default StylingInComponent