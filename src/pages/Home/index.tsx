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
      <header>
        <div className="infos">
          <img src="https://github.com/Igor-Mont.png" alt="" />
          <h2>Company</h2>
        </div>
        <div className="user-avatar">
          <img src="https://github.com/Igor-Mont.png" alt="" />
        </div>
      </header>
      <main>
        <p />
        <div>
          <input type="text" />
          <div>
            <img src="" alt="" />
          </div>
        </div>
        {/* table of users */}
      </main>
    </MainResponsive>
  );
}

export default Home;
