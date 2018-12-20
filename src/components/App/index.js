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
  function removePlayer(id) {
    const filteredPlayers = players.filter(player => player.id !== id);
    setPlayers(filteredPlayers);
  }
  function removeAllPlayers() {
    setPlayers([]);
  }
  return (
    <StyledDiv>
      <Header />
      <Input
        help="Start typing, then hit enter to add a player to the game"
        label="Add players"
        onKeyPress={e => addPlayer(e.target.value)}
      />
      {players.length > 0 && (
        <React.Fragment>
          <ul>
            {players.map(player => (
              <li key={player.id} tabIndex={0}>
                {player.name}
                <button type="button" onClick={() => removePlayer(player.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button type="button" onClick={removeAllPlayers}>
            Remove all
          </button>
        </React.Fragment>
      )}
    </StyledDiv>
  );
}

export default App;
