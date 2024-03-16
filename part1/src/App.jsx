import { useState } from 'react'


//Components.
const Header = ({text}) => {
  console.log("Header comp:", text)
  return(
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const Button = ({text, onClick}) => {
  console.log("Button comp:", text, onClick)
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Statistics = ({ text, good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;
  return (
    <div>
      <Header text={text}></Header>
      <Part text="good" total={good}></Part>
      <Part text="neutral" total={neutral}></Part>
      <Part text="bad" total={bad}></Part>
      <Part text="all" total={all}></Part>
      <Part text="average" total={average}></Part>
      <Part text="positive" total={positive + " %"}></Part>
    </div>
  );
};

const Part = ({text, total}) => {
  console.log("Paragraph comp:", text, total)
  return(
    <div>
      <p>{text} {total}</p>
    </div>
  )
}

const App = () => {
  // Save clicks of each button to its own state.
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

//EventListeners.
const incrementGood = () => {
  setGood(good + 1)
}

const incrementNeutral = () => {
  setNeutral(neutral + 1)
}

const incrementBad = () => {
  setBad(bad + 1)
}

//bool to check if there are any given stats.
const hasFeedback = good + neutral + bad > 0

  return (
    <div>
      <Header text="give feedback"></Header>
      <Button text="good" onClick={incrementGood}></Button>
      <Button text="neutral" onClick={incrementNeutral}></Button>
      <Button text="bad" onClick={incrementBad}></Button>
      {hasFeedback ? <Statistics text="statistics" good={good} neutral={neutral} bad={bad}></Statistics> : <Part text="No feedback given"></Part>}
    </div>
  )
}

export default App