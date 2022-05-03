import logo from "./logo.svg";
import "./styles/App.css";
import Button from "@mui/material/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="contained">Hello World</Button>
      </header>
    </div>
  );
}

export default App;
