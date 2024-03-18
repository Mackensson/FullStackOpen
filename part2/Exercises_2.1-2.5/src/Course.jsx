const Course = ({ course, total }) => {
    console.log("Course:", course, total)
    return (
      <div>
        <Header2 text={course.name} />
        <Content parts={course.parts} />
        <p>
          <strong>Total of {total} exercises</strong>
        </p>
      </div>
    )
  }
  
  const Header2 = ({text}) => {
    console.log("Header:", text)
    return(
      <div>
        <h2>{text}</h2>
      </div>
    )
  }
  
  const Content = ({ parts }) => {
    console.log("Content:", parts)
    return parts.map((part) => (
      <Part key={part.id} name={part.name} amount={part.exercises} />
    ))
  }
  
  const Part = ({ name, amount }) => {
    console.log("Part:", name, amount)
    return (
      <div>
        <p>
          {name} {amount}
        </p>
      </div>
    )
  }

  export default Course