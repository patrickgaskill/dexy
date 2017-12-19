import React from "react";
import PropTypes from "prop-types";
import { Grid, Label } from "semantic-ui-react";
import SeenIcon from "./SeenIcon";
import GenderIcon from "./GenderIcon";
import pokemonPropTypes from "./pokemonPropTypes";

export default class PokedexEntry extends React.Component {
  static propTypes = {
    pokemon: pokemonPropTypes.isRequired,
    onSeenClick: PropTypes.func.isRequired,
    onGenderClick: PropTypes.func.isRequired
  };

  formatNumber = id => `#${id.toString().padStart(3, "0")}`;

  render() {
    const {
      pokemon: { id, name, seen, regional, legendary, genders },
      onSeenClick,
      onGenderClick
    } = this.props;

    return (
      <Grid.Row className={"pokedex-entry"}>
        <Grid.Column width={4}>
          <div>
            <strong>{name}</strong>
          </div>
          <div>{this.formatNumber(id)}</div>
        </Grid.Column>
        <Grid.Column width={4}>
          {regional && <Label color="green">Regional</Label>}
          {legendary && <Label color="orange">Legendary</Label>}
        </Grid.Column>
        <Grid.Column width={8} textAlign="right">
          <SeenIcon disabled={!seen} onClick={onSeenClick} />
          {Object.keys(genders).map(g => (
            <GenderIcon
              key={g}
              gender={g}
              disabled={!genders[g]}
              onClick={() => onGenderClick(g)}
            />
          ))}
        </Grid.Column>
      </Grid.Row>
    );
  }
}
