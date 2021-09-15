import styled from 'styled-components';

export const MainResponsive = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;

  .bar {
    height: 30px;
    width: 100%;
    background-color: grey;
    display: flex;
    justify-content: flex-start;
    padding: 0 8px;

    .box-balls {
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .ball {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: black;
      }
    }
  }

  header {
    width: 100%;
    height: 70px;
    padding: 8px 32px;
    background-color: blue;
    display: flex;
    justify-content: space-between;

    .infos {
      display: flex;
      align-items: center;
      gap: 16px;
      > img {
        width: 54px;
        height: 54px;
      }
    }

    .user-avatar {
      > img {
        width: 54px;
        height: 54px;

        border-radius: 50%;
      }
    }
  }

  @media (min-width: 1367px) {
    max-width: 1366px;
    background-color: red;
  }
`;
