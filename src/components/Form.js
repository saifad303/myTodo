import React, { useState, createContext } from 'react'
import firebase from '../firebase'

function Form({ item }) {
    let [title, setTitle] = useState('')

    let onSubmitHandler = (e) =>{
        e.preventDefault();
        let todoRef = firebase.database().ref('Todo')
        const todo = {
            title,
            complete: false
        }
        todoRef.push(todo)
        setTitle('')
    }

    return (
        <div>
            <form action="" onSubmit={onSubmitHandler}>
                <fieldset>
                    <label htmlFor="">Title: </label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
                </fieldset>
                <fieldset>
                    <button type='submit'>Submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Form
