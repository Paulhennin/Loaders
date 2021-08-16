import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function EmptyCircleLoader() {
  return (
    <section className="section section-9">
      <span className="loader loader-empty-circle"></span>
      <span className="loading loading-empty-circle">
        Chargement...
      </span>
    </section>
  );
}

EmptyCircleLoader.propTypes = {

};
