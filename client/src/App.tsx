import { Button, ButtonGroup } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <ButtonGroup>
      <Button onClick={() => console.log("button1")} colorScheme="blue">
        Button1
      </Button>
      <Button onClick={() => console.log("button2")} colorScheme="blue">
        Button2
      </Button>
      <Button onClick={() => console.log("button3")} colorScheme="blue">
        Button3
      </Button>
    </ButtonGroup>
  );
}

export default App;
