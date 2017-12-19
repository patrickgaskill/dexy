import React from "react";
import PropTypes from "prop-types";
import possibleGenders from "./possibleGenders";

const COLORS = {
  male: "#42A5F5",
  female: "#EF5350",
  genderless: "#616161",
  unown: "#616161",
  disabled: "#E0E0E0",
  shiny: "#FFA726"
};

export default class GenderIcon extends React.Component {
  static propTypes = {
    gender: PropTypes.oneOf(possibleGenders).isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired
  };

  shouldComponentUpdate(nextProps) {
    if (nextProps.gender !== this.props.gender) {
      return true;
    }

    if (nextProps.disabled !== this.props.disabled) {
      return true;
    }

    return false;
  }

  render() {
    const { gender, disabled, onClick } = this.props;
    switch (gender) {
      case "male":
        return (
          <span
            className="fa-layers fa-fw fa-2x"
            style={{
              color: disabled ? COLORS.disabled : COLORS.male,
              cursor: "pointer"
            }}
            onClick={onClick}
          >
            <i className="fas fa-circle" />
            <i
              className="fas fa-mars fa-inverse"
              data-fa-transform="shrink-4"
            />
          </span>
        );

      case "maleShiny":
        return (
          <span
            className="fa-layers fa-fw fa-2x"
            style={{
              color: disabled ? COLORS.disabled : COLORS.male,
              cursor: "pointer"
            }}
            onClick={onClick}
          >
            <i className="fas fa-circle" />
            <i
              className="fas fa-mars fa-inverse"
              data-fa-transform="shrink-4"
            />
            <span style={{ color: disabled ? COLORS.disabled : COLORS.shiny }}>
              <i
                className="fas fa-circle"
                data-fa-transform="shrink-8 right-6 down-6"
              />
              <i
                className="fas fa-star fa-inverse"
                data-fa-transform="shrink-12 right-6 down-6"
              />
            </span>
          </span>
        );

      case "female":
        return (
          <span
            className="fa-layers fa-fw fa-2x"
            style={{
              color: disabled ? COLORS.disabled : COLORS.female,
              cursor: "pointer"
            }}
            onClick={onClick}
          >
            <i className="fas fa-circle" />
            <i
              className="fas fa-venus fa-inverse"
              data-fa-transform="shrink-4"
            />
          </span>
        );

      case "femaleShiny":
        return (
          <span
            className="fa-layers fa-fw fa-2x"
            style={{
              color: disabled ? COLORS.disabled : COLORS.female,
              cursor: "pointer"
            }}
            onClick={onClick}
          >
            <i className="fas fa-circle" />
            <i
              className="fas fa-venus fa-inverse"
              data-fa-transform="shrink-4"
            />
            <span style={{ color: disabled ? COLORS.disabled : COLORS.shiny }}>
              <i
                className="fas fa-circle"
                data-fa-transform="shrink-8 right-6 down-6"
              />
              <i
                className="fas fa-star fa-inverse"
                data-fa-transform="shrink-12 right-6 down-6"
              />
            </span>
          </span>
        );

      case "genderless":
        return (
          <span
            className="fa-layers fa-fw fa-2x"
            style={{
              color: disabled ? COLORS.disabled : COLORS.genderless,
              cursor: "pointer"
            }}
            onClick={onClick}
          >
            <i className="fas fa-circle" />
            <i className="fas fa-genderless fa-inverse" />
          </span>
        );

      case "genderlessShiny":
        return (
          <span
            className="fa-layers fa-fw fa-2x"
            style={{
              color: disabled ? COLORS.disabled : COLORS.genderless,
              cursor: "pointer"
            }}
            onClick={onClick}
          >
            <i className="fas fa-circle" />
            <i className="fas fa-genderless fa-inverse" />
            <span style={{ color: disabled ? COLORS.disabled : COLORS.shiny }}>
              <i
                className="fas fa-circle"
                data-fa-transform="shrink-8 right-6 down-6"
                style={{ color: disabled ? COLORS.disabled : COLORS.shiny }}
              />
              <i
                className="fas fa-star fa-inverse"
                data-fa-transform="shrink-12 right-6 down-6"
              />
            </span>
          </span>
        );

      default:
        // Unown
        return (
          <span
            className="fa-layers fa-fw fa-2x"
            style={{
              color: disabled ? COLORS.disabled : COLORS.unown,
              cursor: "pointer"
            }}
            onClick={onClick}
          >
            <i className="fas fa-circle" />
            <span
              className="fa-layers-text fa-inverse"
              data-fa-transform="shrink-6 up-0.5"
            >
              {gender.toUpperCase()}
            </span>
          </span>
        );
    }
  }
}
