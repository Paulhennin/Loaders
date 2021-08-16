// == Import npm
import React from 'react';

// == Import
import CircleLoader from 'src/components/CircleLoader';
import CirclesLoader from 'src/components/CirclesLoader';
import DoubleLoader from 'src/components/DoubleLoader';
import BallInBarLoader from 'src/components/BallInBarLoader';
import FlipSquareLoader from 'src/components/FlipSquareLoader';
import GifLoader from 'src/components/GifLoader';
import BarsLoader from '../BarsLoader';
import BarLoader from '../BarLoader';

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
  </>
);

// == Export
export default App;
