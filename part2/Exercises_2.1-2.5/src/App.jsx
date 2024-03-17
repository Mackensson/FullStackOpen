const Course = ({course, total}) => {
console.log("Course:", course, total)
return(
  <div>
    <Header text={course.name}/>
    <Content parts={course.parts}/>
    <p><strong>Total of {total} exercises</strong></p>
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

    const total = course.parts.reduce((s, p) => s + p.exercises, 0)

  return(
    <Course course={course} total={total}/>
  )
}

export default App