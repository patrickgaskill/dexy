import PropTypes from "prop-types";
import gendersPropTypes from "./gendersPropTypes";

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  seen: PropTypes.bool.isRequired,
  regional: PropTypes.bool,
  legendary: PropTypes.bool,
  genders: gendersPropTypes.isRequired
});
