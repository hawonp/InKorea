import logo from "./logo.svg";
import "./styles/App.css";
import Button from "@mui/material/Button";
import Heading from "./components/Heading";
import ConversationLeft from "./components/ConversationLeft";
import ConversationRight from "./components/ConversationRight";

function App() {
  return (
    <>
        <Heading/>
        <ConversationLeft/>
        <ConversationRight/>
    </>

  );
}

export default App;
