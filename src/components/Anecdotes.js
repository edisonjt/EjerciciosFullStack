import { useDispatch, useSelector } from "react-redux";
import { votesOf } from "../reducers/anecdoteReducer";

export default function Anecdotes() {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggleVotes = (id) => {
    dispatch(votesOf(id));
  };

  //   const vote = (id) => {
  //     console.log('vote', id)
  //   }

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => toggleVotes(anecdote.id)}>vote</button>
          </div>
          <br></br>
        </div>
      ))}
    </div>
  );
}
