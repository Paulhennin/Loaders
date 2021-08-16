import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function BarLoader() {
  return (
    <section className="section section-5">
      <span className="loader loader-bar">
        <span></span>
      </span>
      <span className="loading">
        Chargement...
      </span>
    </section>
);
}

BarLoader.propTypes = {

};
