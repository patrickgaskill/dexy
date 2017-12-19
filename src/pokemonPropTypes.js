import PropTypes from "prop-types";
import possibleGenders from "./possibleGenders";

const genderPropTypes = {};
for (const g of possibleGenders) {
  genderPropTypes[g] = PropTypes.bool;
}

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  seen: PropTypes.bool.isRequired,
  regional: PropTypes.bool,
  legendary: PropTypes.bool,
  genders: gendersPropTypes.isRequired
});
