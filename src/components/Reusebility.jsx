import React, { useState } from "react";
import Todo from "./Todo";

const Practice2 = (props) => {
    const [list, setList] = useState([])
    const [todo, setTodo] = useState(
        {
        name:"",
        id: "", 
        }
    )
    const [editingItem, setEditingItem] = useState({
        id:"",
        isEditing: false
    })
    
    const changeTodo = (e) => {
        setTodo({
            ...todo,
            name:e.target.value
        })
    }

    const addTodo = (e) => {
        e.preventDefault()
        let newTodo ={
            name : todo.name,
            id: new Date().getTime().toString()
        } 
        setList([...list, newTodo])
        setTodo({
            name:"",
            id:""
        })
    }

    const handleDelete = (id) => {
        let newTodos = list.filter((eachItem) => {
            return eachItem.id !== id
        })
        setList([...newTodos])
    }

    const handleEditState = (id) => {
        setEditingItem({
            ...editingItem,
            id:id,
            isEditing:true
        })
             let editableItem = list.find((eachItem) => eachItem.id === id)
            setTodo({
                ...todo,
                name: editableItem.name,
                id:editableItem.id
            })
    }

    const handleEdit = (e) => {
        e.preventDefault()
        let newList = list.map((eachItem) => {
            if(eachItem.id === editingItem.id) {
                return {
                    name : todo.name,
                    id: editingItem.id
                }
            }else{
                return eachItem
            }
        })
        setList(newList)
        setTodo({
            name:"",
            id:""
        })
        setEditingItem({
            id:"",
            isEditing:false
        })
    }

    return(
        <div style={{border: "2px solid red", marginBottom:"16px"}}>
            <input type="text" name="name" value={todo.name} onChange={changeTodo} />
            {
                editingItem.isEditing ? <button onClick={handleEdit}>update Todo</button> : <button onClick={addTodo}>Add Todo</button>
            }
            
            <ul>
                {
                    list.map((t) => {
                        const {name, id} = t
                        return (
                                <li key={id}>
                                    <Todo name={name}/>
                                    <button onClick={() => handleEditState(id)}>edit</button>
                                    <button onClick={() => handleDelete (id)}>del</button>
                                </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Practice2