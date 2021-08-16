import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function FlipSquareLoader() {
  return (
    <section className="section section-7">
      <div className="loader-container">
        <span className="loader loader-flip-square"></span>
        <span className="loader loader-flip-square-2"></span>
        <span className="loader loader-flip-square-3"></span>
        <span className="loader loader-flip-square-4"></span>
      </div>
      <span className="loading loading-flip-square">
        Chargement...
      </span>
    </section>
);
}

FlipSquareLoader.propTypes = {

};
