import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function DoubleLoader() {
  return (
    <section className="section section-2">
      <span className="loader loader-double">
      </span>
      <span className="loading">
        Chargement...
      </span>
    </section>
  );
}

DoubleLoader.propTypes = {

};
