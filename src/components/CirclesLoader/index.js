import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function CirclesLoader() {
  return (
    <section className="section section-3">
      <span className="loader loader-circles">
      </span>
      <span className="loading">
        Chargement...
      </span>
    </section>
  );
}

CirclesLoader.propTypes = {

};
