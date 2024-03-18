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

const Header = ({ text }) => {
  console.log("Header:", text)
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const Header2 = ({text}) => {
  console.log("Header2", text)
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

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  function getTotalExercises(course) {
    console.log(course);
    const total = course.parts.reduce(
      (total, part) => total + part.exercises,
      0
    )
    return total;
  }

  return (
    <div>
      <Header text="Web development curriculum"></Header>
      {courses.map((course) => (
        <Course
          key={course.id}
          course={course}
          total={getTotalExercises(course)}
        />
      ))}
    </div>
  )
}

export default App;
