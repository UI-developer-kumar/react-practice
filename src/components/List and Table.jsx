import React from 'react'

function ListandTable() {

    const student = ["prem", "kumar", "premkumar", "santhosh"]

    const employ = [
        {
            name:"Rahul",
            age:34,
            gender: "male"
        },
        {
            name:"Rohith",
            age:24,
            gender: "male"
        },
        {
            name:"Sindhu",
            age:24,
            gender: "female"
        },

    ]

  return (
    <div>

        <h1>List</h1>

        <ul>
            {
                student.map((s) => {
                    return <li>{s}</li>
                })
            }
        </ul>

        <h1>Table</h1>
        <table border={2}>
            <thead>
                <tr>
                    <td>No</td>
                    <td>Name</td>
                    <td>Class</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Prem</td>
                    <td>10th</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>kumar</td>
                    <td>inter</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Premkumar</td>
                    <td>degree</td>
                </tr>
            </tbody>
        </table>

        <h1>Table 2</h1>

            <table border={2} align='center' width="50">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Gender</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        employ.map((s) => {
                            return(
                                <tr>
                                    <td>{s.name}</td>
                                    <td>{s.age}</td>
                                    <td>{s.gender}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        
    </div>
  )
}

export default ListandTable