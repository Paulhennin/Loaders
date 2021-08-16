import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function CircleLoader() {
  return (
    <section className="section">
      <span className="loader loader-quart">
      </span>
      <span className="loading">
        Chargement...
      </span>
    </section>
  );
}

CircleLoader.propTypes = {

};
