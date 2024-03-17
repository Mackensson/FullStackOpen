const Course = ({course}) => {
console.log("Course:", course)
return(
  <div>
    <Header text={course.name}></Header>
    <Content parts={course.parts}></Content>
  </div>
)}

const Header = ({text}) => {
  console.log("Header:", text)
  return (
   <div>
    <h1>{text}</h1>
   </div>
  )}

const Content = ({parts}) => {
  console.log("Content:", parts)
  return(
    parts.map(part => (
      <Part key={part.id} name={part.name} amount={part.exercises} />
    )))}

const Part = ({name, amount}) => {
  console.log("Part:", name, amount)
  return(
    <div>
      <p>{name} {amount}</p>
    </div>
  )}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
