import React, { useState, useReducer } from 'react'
import { initialState, reducer } from '../reducers/reducer'
import moment from 'moment'

const Todo = () => {
    // const [todo, setTodo] = useState(initialState.todos)
    // console.log(todo)
    const [state, dispatch] = useReducer(reducer, initialState)
    const [newTodo, setNewTodo] = useState('')




    // ````````Helpers`````````````
    const handleChanges = e => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setNewTodo('')
    }

//   console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    onChange={handleChanges}
                    value={newTodo}
                />

                <button onClick={() => { dispatch({ type: 'ADD_TODO', payload: newTodo }) }}>
                    Add
                    </button>

            </form>

            <div className='todoList'>

                {state.todos.map(item => {
                    return (
                        <div key={item.id}
                            onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload:  item.id} )}
                            style={{
                                textDecoration: `${item.completed ? 'line-through' : 'none'}`,
                                backgroundColor: `${item.completed ? '#d17d7c' : 'rgb(40, 41, 59, .4)'}`,
                                cursor: 'pointer',
                            }}
                        >
                            <p>  {item.item} </p>
                            {/* Stretch``` */}
                            <p> {item.completed && item.date > moment().startOf('day').fromNow() ? 'overdue' : ''} </p>
                            {/* ````` */}
                        </div>
                    )
                })}

                <button onClick={() => { dispatch({ type: 'CLEAR_COMPLETED' }) }} >Clear Completed</button>

            </div>
        </div>
    )
}

export default Todo;