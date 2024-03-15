import { useState } from 'react'


//Components
const Header = ({name}) => {
  console.log("Header comp:", name)
  return(
    <div>
      <h1>{name}</h1>
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

const Content = ({text, total}) => {
  return(
    <div>
      <Paragraph text={text} total={total}></Paragraph>
    </div>
  )
}

const Paragraph = ({text, total}) => {
  console.log("Paragraph comp:", text, total)
  return(
    <div>
      <p>{text} {total}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

//EventListeners
const incrementGood = () => {
  setGood(good + 1)
}

const incrementNeutral = () => {
  setNeutral(neutral + 1)
}

const incrementBad = () => {
  setBad(bad + 1)
}

  return (
    <div>
      <Header name="give feedback" />
      <Button text="good" onClick={incrementGood}></Button>
      <Button text="neutral" onClick={incrementNeutral}></Button>
      <Button text="bad" onClick={incrementBad}></Button>
      <Header name="statistics"></Header>
      <Content text="good" total={good}></Content>
      <Content text="neutral" total={neutral}></Content>
      <Content text="bad" total={bad}></Content>
    </div>
  )
}

export default App