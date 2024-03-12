const Header = (props) => {
  console.log('Hello from Header component.')
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log('Hello from Content component.')
  return (
    <div>
      <Part part={props.part1} exercise={props.exercises1}></Part>
      <Part part={props.part2} exercise={props.exercises2}></Part>
      <Part part={props.part3} exercise={props.exercises3}></Part>
    </div>
  )
}

const Part = (props) => {
  console.log('Hello from Part component.')
  return (
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}

const Total = (props) => {
  console.log('Hello from Total component.')
  return(
    <div>
      <p>{props.message} {props.total}</p>
    </div>
  )
}


const App = () => {
console.log('Init app.')
const course = 'Half Stack application development'
const part1 = 'Fundamentals of React:'
const exercises1 = 10
const part2 = 'Using props to pass data:'
const exercises2 = 7
const part3 = 'State of a component:'
const exercises3 = 14
const message = 'Number of exercises:'

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total message={message} total={exercises1 + exercises2 + exercises3}></Total>
    </div>
  )
}

export default App