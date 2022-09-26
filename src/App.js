import Anecdotes from './components/Anecdotes'
import NewAnecdote from './components/NewAnecdote'

const App = () => {
  
  return (
    <div>
      <h2>Anecdotes</h2>
      <NewAnecdote /><br></br>
      <Anecdotes />
      
    </div>
  )
}

export default App