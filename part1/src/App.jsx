import { useState } from "react";

//Components.
const Header = ({ text }) => <h1>{text}</h1>
const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>
const AnecdoteInfo = ({ text, amount }) => <div><p>{text}</p><p>has {amount} votes</p></div>

const Anecdote = ({ header, text, info }) => {
  console.log("Anecdote comp:", header, text, info);
  return(
    <div>
      <Header text={header}></Header>
      <AnecdoteInfo text={text} amount={info}></AnecdoteInfo>
    </div>
  )
};

const App = () => {

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const initialPoints = new Array(anecdotes.length).fill(0);

  const [points, setPoints] = useState(initialPoints);
  const [selected, setSelected] = useState(0);

  const generateAnecdote = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * anecdotes.length);
    } while (randomIndex === selected);
    setSelected(randomIndex);
  };

  const incrementVote = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
  };

  const getAnecdoteMostVotes = () => {
    const index = points.indexOf(getHighestValue());
    return anecdotes[index]
  }

  const getHighestValue = () => Math.max(...points)

  return (
    <div>
      <Anecdote header="Anecdote of the day" text={anecdotes[selected]} info={points[selected]}></Anecdote>
      <div>
        <Button text="Vote" onClick={incrementVote}></Button>
        <Button text="Generate anecdote" onClick={generateAnecdote}></Button>
      </div>
      <Anecdote header="Anecdote with most votes" text={getAnecdoteMostVotes()} info={getHighestValue()}></Anecdote>
    </div>
  );
};

export default App;