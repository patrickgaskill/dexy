import PropTypes from "prop-types";
import GendersPropTypes from "./GendersPropTypes";

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  seen: PropTypes.bool.isRequired,
  regional: PropTypes.bool,
  legendary: PropTypes.bool,
  genders: GendersPropTypes.isRequired
});
