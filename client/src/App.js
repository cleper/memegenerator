import React from 'react';
import Reset from './components/reset/index';
import LandingView from './components/landingView/index';
import CssVariables from './components/cssVariables/index';

function App() {
  return (
    <React.Fragment>
      <Reset/>
      <CssVariables/>
      <LandingView/>
    </React.Fragment>
  );
}

export default App;
