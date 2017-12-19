import PropTypes from "prop-types";
import possibleGenders from "./possibleGenders";

const genderPropTypes = {};
for (const g of possibleGenders) {
  genderPropTypes[g] = PropTypes.bool;
}

export default PropTypes.shape(genderPropTypes);
