import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    userName: "vivek",
    age: 26,
  };

  return (
    <>
      <h1 className="text-6xl text-amber-300 font-bold underline mb-4">
        I am react
      </h1>
      <div className="flex">
        <Card username="Ram" btnText="click me" />
        <Card username="Krishna" />
        <Card username="Krishna" />
      </div>
    </>
  );
}

export default App;
