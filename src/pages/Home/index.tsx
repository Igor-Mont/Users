import React, { useEffect, useState } from 'react';
import { MainResponsive } from '../../components/MainResponsive';
import searchPeopleSVG from '../../assets/search-people.svg';

// import { Container } from './styles';

type User = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  login: {
    uuid: string;
  };
  registered: {
    date: string;
    age: number;
  };
};

function Home(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    (async function getUser() {
      const response = await fetch('https://randomuser.me/api/?results=5');
      const data = await response.json();
      const { results } = data;
      setUsers(results);
    })();
  }, []);

  function transformDateBirth(birth: string): string {
    const date = new Date(birth);
    const year = date.getFullYear();
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.getMonth().toString().padStart(2, '0');

    return `${day}/${month}/${year}`;
  }

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
          <div className="table">
            <div className="table-header">
              <div className="h3">
                <h3>Name</h3>
              </div>
              <div className="h3">
                <h3>Gender</h3>
              </div>
              <div className="h3">
                <h3>Birth</h3>
              </div>
              <div className="h3">
                <h3>Actions</h3>
              </div>
            </div>
            {users.map(v => (
              <div key={v.login.uuid} className="table-body">
                <div className="line-body">
                  <p>{v.name.first}</p>
                </div>
                <div className="line-body">
                  <p>{v.gender}</p>
                </div>
                <div className="line-body">
                  <p>{transformDateBirth(v.registered.date)}</p>
                </div>
                <div className="line-body">
                  <p>Action</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </MainResponsive>
  );
}

export default Home;
