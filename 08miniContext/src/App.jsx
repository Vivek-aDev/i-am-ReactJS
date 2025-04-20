import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/userContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>React with Context api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
