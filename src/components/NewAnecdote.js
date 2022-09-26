import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"

export default function NewAnecdote () {
    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        const {target} = event
        const content = target.anecdote.value
        target.anecdote.value= ''
        dispatch(createAnecdote(content))
    }

    return (
        <div>
            <h2>Create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name="anecdote"/> <button>Create</button></div>                
            </form>
        </div>
    )
}
