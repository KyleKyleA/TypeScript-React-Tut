
import './App.css'

function MyButton({title }: {title: string}) {
 

  return (
   
      <button>{title}</button>


)
} 


export default function App() {

  return (
    <div>
      <h1>Welcome to my first ever typescript + react app</h1>
      <MyButton title="I'm a button"></MyButton>
    </div>
  )
}
