import './App.css'

function App() {

  return (
    <>
    <Todo title='Go to class' 
      description='Learn DSA'
      isDone={false} />
    </>
  )
}
interface TodoProp {
  title: string,
  description: string,
  isDone: boolean
}

function Todo(props: TodoProp){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
    <h3>{props.isDone}</h3>
  </div>
}

export default App
