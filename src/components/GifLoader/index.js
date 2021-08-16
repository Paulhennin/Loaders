import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function GifLoader() {
  return (
    <section className="section section-8">
      <div className="gif-loader">
        <img src="https://i.pinimg.com/originals/60/ef/dd/60efddd3f6c4f52fe9df699d48c90615.gif" alt="gif" />
      </div>
    </section>
  );
}

GifLoader.propTypes = {

};
