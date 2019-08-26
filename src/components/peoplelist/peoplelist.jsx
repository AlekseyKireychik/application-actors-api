import React from 'react';
import PropTypes from 'prop-types';

import './peoplelist.css';

const PeopleList = ({name}) => (
  <li className="People">
    <div className="description">
      <span className="name">{name}</span>
    </div>
  </li>
);

PeopleList.propTypes = {
    name: PropTypes.string
}

PeopleList.defaultProps = {
    name: ''
}

export default PeopleList;