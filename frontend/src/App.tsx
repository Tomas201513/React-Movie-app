// import { useState } from 'react'
import { useState } from "react";
import "./App.css";
// import { useState } from "react";
// import ListGroup from "./components/ListGroup";
// import Button from "./components/Button";
// import Alert from "./components/Alert";
// import Like from "./components/Like";
import ExpandableText from "./components/ExpandableText";

function App() {
  // const item = ["btn", "alert", "item3"];
  // const [alert, setAlert] = useState(false);
  // const [like, setLike] = useState(false);
  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: "john",
  //   },
  // });

  // const handleClick = () => {
  //   setGame({
  //     ...game,
  //     player: {
  //       ...game.player,
  //       name: "tom",
  //     },
  //   });
  // };

  return (
    <>
      {/* <ExpandableText maxChars={25}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
        voluptate quos quae ea autem officia omnis voluptatibus ipsam sapiente
        nemo error mollitia doloribus quas, accusamus provident ipsa facere
        voluptatem molestias?
      </ExpandableText> */}
      {/* {game.player.name}
      <button onClick={handleClick}>btn</button> */}
      {/* <Like
        like={like}
        onClick={() => {
          setLike(!like);
        }}
      />
     */}
      {/* {alert && (
        <Alert
          onClose={() => {
            setAlert(false);
          }}
        >
          <strong>{item[1]}</strong>`
        </Alert>
      )}
      <Button
        onClick={() => {
          setAlert(true);
        }}
      >
        {item[0]}
      </Button> *
      {/* <br />
      <ListGroup>
        {item[0]} <div>{item[1]}</div>
      </ListGroup> */}
    </>
  );
}

export default App;
