import Greeting from "./components/Greeting";



function App() {
  const name: string = "Benjamin";
  const age: number = 25;
  const isDeveloper: boolean = true;

  // Task 1: Array of strings
  const hobbies: string[] = ["Coding", "Gaming", "Reading", "Football", "Music"];

  // Task 2: Function that takes a string and returns a greeting string
  const greet = (personName: string): string => {
    return `Hello ${personName}! Welcome to the TypeScript world 🚀`;
  };
  //typescript basic syntax 
  interface Person {
  name: string;
  age: number;
  isDeveloper: boolean;
}

const benjamin:Person = {
  name:"Benjamin",
  age:22,
  isDeveloper:true,

}

  // Errors:
// const wrong: Person = {
//   name: "Ben",       // OK
//   age: "25",         // Error: Type 'string' is not assignable to 'number'
//   job: "Developer"   // Error: Object literal may only specify known properties
// };
  return (
    <div className="App" style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>{greet(name)}</h1>
      <p>Age: {age}</p>
      <p>Developer: {isDeveloper ? "Yes" : "No"}</p>

      {/* Task 3: Display hobbies in a list */}
      <h2>My Hobbies:</h2>

      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
     <Greeting
        name="Benjamin"
        age={25}
        hobbies={["Coding", "Gaming", "Football"]}
        isDeveloper={true}
      />

      {/* This would cause an error: */}
      {/* <Greeting name="Ben" hobbies={["Reading"]} /> */}
      {/* Missing isDeveloper (required) */}
    </div>
    </div>
  );
}

export default App;