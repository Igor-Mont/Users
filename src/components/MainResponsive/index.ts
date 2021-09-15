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
    background-color: #9eadba;
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
        background-color: #8f9eac;
      }
    }
  }

  header {
    width: 100%;
    height: 70px;
    padding: 8px 32px;
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

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f7f9fa;
    width: 100%;
    height: auto;
    padding: 64px 0;

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
      width: 70%;
      padding: 16px;
      background-color: #f7f9fa;

      .input-box {
        width: 80%;
        display: flex;
        flex-direction: row;
        > input {
          width: 90%;
          height: 30px;
          outline: 0;
          padding: 0 8px;
          border: 1px solid black;
          border-right: none;
        }
        > div {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 10%;
          height: 30px;
          border: 1px solid black;
          padding: 4px;
          background-color: white;
          border-left: none;
        }
      }

      .table {
        width: 80%;
        display: flex;
        flex-direction: column;

        .table-header {
          > div {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 30px;
            width: 25%;
            border: 1px solid blue;
            text-align: center;
          }
          display: flex;
          justify-content: space-between;
        }

        .table-body {
          display: flex;
          text-align: center;

          .line-body {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 25%;
            height: 25px;
            border: 1px solid yellow;
          }
        }
      }
    }
  }

  @media (min-width: 1367px) {
    max-width: 1366px;
  }
`;
