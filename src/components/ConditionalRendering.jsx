import React from 'react'

function ConditionalRendering() {

    var maleimage="https://i.pinimg.com/736x/2a/4e/8d/2a4e8dab6791ed643d5180bc72167f6d.jpg";
    var femaleimage="https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407_640.png";

    let ar = [1,2,3,4,5]
    let ar2 = ["prem", "kumar", "premkumar"]

    let obj = [
        {
            name:"prem",
            age:29,
            qualification:"degree",
            gender:"male"
        },
        {
            name:"padhu",
            age:24,
            qualification:"m-tech",
            gender:"female"
        },
        {
            name:"premkumar",
            age:29,
            qualification:"degree",
            gender:"male"
        }
    ]

    let name = "premkumar"
    let name2 = "Hello Recatjs"

    let c = 27;

  return (
    <div>
        <h1 style={{color:"red"}}>Premkumar</h1>
        <h1 style={{color:"red", background:"green"}}>Premkumar</h1>
        <ul style={{display:"flex"}}>
            {
                ar.map((f) => {
                    return(
                        <li style={{listStyle:"none", padding:"10px", border:"2px solid red", margin:"10px"}}>{f}</li>
                    )
                })
            }
        </ul>
        <ul style={{display:"flex"}}>
            {
                ar2.map((f2) => {
                    return (
                        <li style={{listStyle:"none", margin:"10px", border:"2px solid red", padding:"10px"}}>{f2}</li>
                    )
                })
            }
        </ul>
        <ul>
            {
                obj.map((pr) => {
                    return(
                        <div>
                        <li>name:{pr.name}</li>
                        <li>age:{pr.age}</li>
                        </div>
                    )
                })
            }
        </ul>
        <ul style={{display:"flex", listStyle:"none", }}>
            {
                obj.map((pr) => {
                    return(
                        <div style={{margin:"10px", padding:"10px", border:"2px solid red", background:"skyblue"}} >
                        <li>name:{pr.name}</li>
                        <li>age:{pr.age}</li>
                        </div>
                    )
                })
            }
        </ul>
        <div style={{display:"flex", listStyle:"none", }}>
            {
                obj.map((pr) => {
                    return(
                        <div style={{margin:"10px", padding:"10px", border:"2px solid red", background:"skyblue",width:"400px" }} >
                        <h3>name:{pr.name}</h3>
                        <h3>age:{pr.age}</h3>
                        <div style={{width:"100px"}}>
                            <img style={{width:"100%"}} src={pr.gender === "male" ? maleimage : femaleimage} alt="" />
                        </div>
                        </div>
                    )
                })
            }
        </div>

        <table border={2}>
            {
                obj.map((s)=> {
                    return(
                            <tr >
                                <td>{s.name}</td>
                                <td>{s.age}</td>
                                <td>{s.gender}</td>
                            </tr>
                    )
                })
            }
        </table>
        <table border={2}>
            {
                obj.map((s)=> {
                    return(
                            <tr style={s.gender === "female" ? {background:"lightpink"}:{background:"lightblue"}}>
                                <td>{s.name}</td>
                                <td>{s.age}</td>
                                <td >{s.gender}</td>
                            </tr>
                    )
                })
            }
        </table>

        <h1>{name}</h1>

        <h1 style={{color:"green"}}>{name2}</h1>
            <div>
            <h2 style={c%2==0?{color:"green"}:{color:"red"}}>{c}</h2>
            </div>

    </div>

  )
}

export default ConditionalRendering