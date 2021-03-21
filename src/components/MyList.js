import React, {useEffect, useState} from 'react'
import firebase from 'firebase'
import Form from './Form'

function MyList() {

    let [todoList, setTodoList] = useState([])
    let [title, setTitle] = useState();

    useEffect(() =>{
        firebase.database().ref('Todo').on('value', (snap) =>{
            console.log(snap.val());
            let todos = snap.val()
            let fetchedList = []

            for(let id in todos){
                fetchedList.push({id: id, ...todos[id], editable: false})
            }

            console.log(fetchedList);

            setTodoList(fetchedList)
        })
    },[])


    let listEditHandler = (list) => {
        console.log(list);
        setTitle(list.title)
        let newItem = { ...list,  editable: true}

        console.log(newItem);

        let index = todoList.findIndex((item) =>{
            return item.id === list.id
        })

        let newList = todoList.filter((item) =>{
            return item.id !== list.id
        })

        console.log(newList);
        console.log('id = ', index);

        newList.splice(index, 0, newItem)

        console.log(newList);

        setTodoList(newList)
    }

    let editChangeHandler = (e) =>{
        setTitle(e.target.value)
    }

    let editSubmitionHandler = (item) =>{
        console.log(item);

        firebase.database().ref('Todo').child(item.id).update({
            complete: item.complete,
            title: title
        })
    }

    let deleteHandler = (id) =>{
        firebase.database().ref('Todo').child(id).remove();
    }

    return (
        <div>
            <Form/>
            <h1>My List</h1>
            <hr/>
            {
                todoList.map((item, index) => {
                    return (
                        <div key={index}>
                            <fieldset>
                                {
                                    item.editable ? (
                                        <div>
                                            <input type="text" value={title} onChange={editChangeHandler}/>
                                            <button onClick={(e) => { e.preventDefault(); editSubmitionHandler(item) }}>submit</button>
                                        </div>
                                    ) : (
                                        <div>
                                            <p>{item.title}</p>
                                            <button onClick={(e) => { e.preventDefault(); listEditHandler(item); }}>Edit</button>
                                            <button style={{marginLeft: '10px'}} onClick={(e) => { e.preventDefault(); deleteHandler(item.id); }}>Delete</button>
                                        </div>
                                    )
                                }
                            </fieldset>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MyList
