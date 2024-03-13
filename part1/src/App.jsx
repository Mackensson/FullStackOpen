const Header = (props) => {
  console.log('Header component: ', props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log('Content component: ', props)
  return (
    <div>
      <Part name={props.part1.name} exercises={props.part1.exercises}></Part>
      <Part name={props.part2.name} exercises={props.part2.exercises}></Part>
      <Part name={props.part3.name} exercises={props.part3.exercises}></Part>
    </div>
  )
}

const Part = (props) => {
  console.log('Part component: ', props)
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  console.log('Total component: ', props)
  return(
    <div>
      <p>{props.message} {props.total}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}></Header>
      <Content part1={part1} part2={part2} part3={part3}></Content>
      <Total total={part1.exercises + part2.exercises + part3.exercises}></Total>
    </div>
  )
}

export default App