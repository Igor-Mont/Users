import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);

  main {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 50px;
    z-index: 100;
    width: 400px;
    height: 400px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;

    button {
      padding: 8px 16px;
      border: none;
      border-radius: 8px;
      background-color: #9eadba;
      cursor: pointer;

      &:hover {
        background-color: #e1e3e5;
      }
    }
  }

  .content-top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      border-radius: 50%;
    }
  }

  .infos {
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
      display: flex;
    }
    span {
      font-weight: 300;
    }
  }
`;
