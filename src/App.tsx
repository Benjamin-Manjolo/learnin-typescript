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
    </div>
  );
}

export default App;