import styled from 'styled-components';

export const MainResponsive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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

  @media (min-width: 1367px) {
    .bar {
      max-width: 1366px;
      background-color: aqua;
    }
  }
`;
