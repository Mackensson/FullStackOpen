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
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises}></Part>
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises}></Part>
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises}></Part>
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
      <p>{props.message} {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}


const App = () => {
  console.log('App Init..')
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  
  return (
    <div>
      <Header course={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total message='Total exercises: ' parts={course.parts}></Total>
    </div>
  )
}

export default App