// 1. Define the interface for props
interface GreetingProps {
  name: string;
  age?: number;
  hobbies: string[];
  isDeveloper: boolean;
}

// 2. Use it in the component
const Greeting: React.FC<GreetingProps> = ({
  name,
  age,
  hobbies,
  isDeveloper,
}) => {
  return (
    <div style={{ border: "2px solid #61dafb", padding: "20px", margin: "20px" }}>
      <h2>Hello {name}!</h2>
      {age && <p>Age: {age}</p>}
      <p>Developer: {isDeveloper ? "Yes 🚀" : "No"}</p>

      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby, i) => (
          <li key={i}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default Greeting;