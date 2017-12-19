import React from "react";
import PropTypes from "prop-types";

const COLORS = {
  disabled: "#E0E0E0",
  seen: "#7E57C2"
};

export default class SeenIcon extends React.PureComponent {
  static propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired
  };

  render() {
    const { disabled, onClick } = this.props;
    return (
      <span
        className="fa-layers fa-fw fa-2x"
        style={{
          color: disabled ? COLORS.disabled : COLORS.seen,
          cursor: "pointer"
        }}
        onClick={onClick}
      >
        <i className="far fa-circle" />
        <i className="fa fa-eye" data-fa-transform="shrink-7" />
      </span>
    );
  }
}
