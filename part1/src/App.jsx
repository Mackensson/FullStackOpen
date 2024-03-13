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
  console.log('App Init..')
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React:',
      exercises: 10
    },
    {
      name: 'Using props to pass data:',
      exercises: 7
    },
    {
      name: 'State of a component:',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course}></Header>
      <Content part1={parts[0]} part2={parts[1]} part3={parts[2]}></Content>
      <Total message='Total exercises: ' total={parts[0].exercises + parts[1].exercises + parts[2].exercises}></Total>
    </div>
  )
}

export default App