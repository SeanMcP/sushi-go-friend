import React from "react";

import { StyledDiv } from "./styled";

import Header from "components/Header";
import Input from "components/Input";

function App(props) {
  const [players, setPlayers] = React.useState([]);
  function addPlayer(value) {
    const playersCopy = [...players];
    playersCopy.push({
      id: new Date().getTime(),
      name: value
    });
    setPlayers(playersCopy);
  }
  return (
    <StyledDiv>
      <Header />
      App
      <Input
        help="Start typing, then hit enter to add a player to the game"
        label="Add players"
        onKeyPress={e => {
          if (e.key === "Enter") {
            addPlayer(e.target.value);
            e.target.value = "";
          }
        }}
      />
      <ul>
        {players.map(player => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </StyledDiv>
  );
}

export default App;
