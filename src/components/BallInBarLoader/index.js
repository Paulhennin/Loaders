import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function BallInBarLoader() {
  return (
    <section className="section section-6">
      <span className="loader loader-ball-loader">
      </span>
      <span className="loading">
        Chargement...
      </span>
    </section>
  );
}

BallInBarLoader.propTypes = {

};
