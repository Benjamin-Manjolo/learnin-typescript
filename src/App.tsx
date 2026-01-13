import Greeting from "./components/Greetings";
import UserCard from "./components/UserCard";

function App() {
  const handleClick = () => {
    alert("User card clicked! 👋");
  };

  // Basic TypeScript variables
  const name: string = "Benjamin";
  const age: number = 25;
  const isDeveloper: boolean = true;

  // Task 1: Array of strings
  const hobbies: string[] = ["Coding", "Gaming", "Reading", "Football", "Music"];

  // Task 2: Function that takes a string and returns a string
  const greet = (personName: string): string => {
    return `Hello ${personName}! Welcome to the TypeScript world 🚀`;
  };

  // TypeScript interface
  interface Person {
    name: string;
    age: number;
    isDeveloper: boolean;
  }



  return (
    <>
      <div className="App" style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>{greet(name)}</h1>
        <p>Age: {age}</p>
        <p>Developer: {isDeveloper ? "Yes" : "No"}</p>

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

        {/* ❌ This would cause a TypeScript error */}
        {/* <Greeting name="Ben" hobbies={["Reading"]} /> */}
      </div>

      <div style={{ padding: "20px", fontFamily: "system-ui, sans-serif" }}>
        <h1>User Cards Demo</h1>

        <UserCard
          user={{
            name: "Benjamin Manjolo",
            email: "benjamin@example.com",
            avatarUrl: "https://i.pravatar.cc/150?u=benjamin"
          }}
          onClick={handleClick}
        />

        <UserCard
          user={{
            name: "Sarah Johnson",
            email: "sarah.j@example.com"
          }}
          onClick={handleClick}
        />
      </div>
    </>
  );
}

export default App;
