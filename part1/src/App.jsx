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
      <table>
        <tbody>
          <StatisticsLine text="good" total={good}></StatisticsLine>
          <StatisticsLine text="neutral" total={neutral}></StatisticsLine>
          <StatisticsLine text="bad" total={bad}></StatisticsLine>
          <StatisticsLine text="all" total={all}></StatisticsLine>
          <StatisticsLine text="average" total={average}></StatisticsLine>
          <StatisticsLine text="positive" total={positive + " %"}></StatisticsLine>
        </tbody>
      </table>
    </div>
  );
};

const StatisticsLine = ({text, total}) => {
  console.log("Paragraph comp:", text, total)
  return(
    <tr>
      <td>{text}</td>
      <td>{total}</td>
    </tr>
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
      {hasFeedback ? <Statistics text="statistics" good={good} neutral={neutral} bad={bad}></Statistics> : <StatisticsLine text="No feedback given"></StatisticsLine>}
    </div>
  )
}

export default App