// == Import npm
import React from 'react';

// == Import
import CircleLoader from '../CircleLoader';
import CirclesLoader from '../CirclesLoader';
import DoubleLoader from '../DoubleLoader';
import BallInBarLoader from '../BallInBarLoader';
import FlipSquareLoader from '../FlipSquareLoader';
import EmptyCircleLoader from '../EmptyCircleLoader';
import GifLoader from '../GifLoader';
import BarsLoader from '../BarsLoader';
import BarLoader from '../BarLoader';
import LightCircleGradientLoader from '../LightCircleGradientLoader';

import './styles.css';
// == Composant
const App = () => (
  <>
    <CircleLoader />
    <CirclesLoader />
    <DoubleLoader />
    <BarsLoader />
    <BarLoader />
    <BallInBarLoader />
    <FlipSquareLoader />
    <GifLoader />
    <EmptyCircleLoader />
    <LightCircleGradientLoader />
  </>
);

// == Export
export default App;
