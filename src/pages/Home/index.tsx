import React from 'react';
import { MainResponsive } from '../../components/MainResponsive';

// import { Container } from './styles';

function Home(): JSX.Element {
  return (
    <MainResponsive>
      <div className="bar">
        <div className="box-balls">
          <div className="ball" />
          <div className="ball" />
          <div className="ball" />
        </div>
      </div>
    </MainResponsive>
  );
}

export default Home;
