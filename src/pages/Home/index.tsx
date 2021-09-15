import React from 'react';
import { MainResponsive } from '../../components/MainResponsive';
import searchPeopleSVG from '../../assets/search-people.svg';

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
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            consequatur, animi dicta dolorem sapiente ullam fugit vel doloremque
            inventore aliquam veritatis velit distinctio possimus fugiat quos,
            dolores hic quod eveniet.
          </p>
          <div className="input-box">
            <input type="text" placeholder="Searching" />
            <div>
              <img src={searchPeopleSVG} alt="" />
            </div>
          </div>
          {/* table of users */}
        </div>
      </main>
    </MainResponsive>
  );
}

export default Home;
