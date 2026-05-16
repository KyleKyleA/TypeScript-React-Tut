
import './App.css'

type GreetingProps = {
  name: string;
  age?: number;
};


export function Greetings({name = "Kyle Angeles", age = 19}: GreetingProps){

  return (
    <div>
      <h2>Hello, {name}!</h2>
      {age !== undefined && <p>You are {age} years old</p>}
    </div>
  );
}

export default Greetings;

