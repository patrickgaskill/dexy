import React from "react";
import update from "immutability-helper";
import { Grid } from "semantic-ui-react";
import PokedexEntry from "./PokedexEntry";
import pokedexDefaults from "./pokedex.json";

export default class App extends React.Component {
  state = {
    pokedex: pokedexDefaults
  };

  handleSeenClick = id => {
    this.setState(prevState => {
      const index = prevState.pokedex.findIndex(p => p.id === id);
      return {
        pokedex: update(prevState.pokedex, { [index]: { $toggle: ["seen"] } })
      };
    });
  };

  handleGenderClick = id => gender => {
    this.setState(prevState => {
      const index = prevState.pokedex.findIndex(p => p.id === id);
      return {
        pokedex: update(prevState.pokedex, {
          [index]: { genders: { $toggle: [gender] } }
        })
      };
    });
  };

  render() {
    return (
      <Grid padded verticalAlign="middle">
        {this.state.pokedex
          .sort((a, b) => a.id - b.id)
          .map(p => (
            <PokedexEntry
              key={p.id}
              pokemon={p}
              onSeenClick={() => this.handleSeenClick(p.id)}
              onGenderClick={this.handleGenderClick(p.id)}
            />
          ))}
      </Grid>
    );
  }
}
