import styled from "styled-components";

export const DockWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1), 0px 12px 15px rgba(0, 0, 0, 0.1),
    0px 40px 70px rgba(0, 0, 0, 0.1);
  height: 71px !important;
  gap: 1px;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 18px;
  margin-top: 50px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 9px;
  backdrop-filter: blur(20px);
  /* overflow-y: hidden !important;
  overflow-x: auto; */
  max-width: 90vw;
  padding: 0px 10px;
  z-index: 3000;

  @media (max-width: 550px) {
    flex-direction: column;
    left: 0%;
    top: 50%;
    transform: translate(0%, -50%);
    overflow-x: hidden;
    padding: 30px 5px;
    align-items: flex-start;
    height: fit-content !important;
  }

  .dock-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5px;
    margin-top: 4px;
    transition: 0.175s all ease-in-out;
    position: relative;

    @media (max-width: 550px) {
      margin-top: 0px;
      margin-bottom: 4px;
    }

    .tool-tip {
      position: absolute;
      top: -40px;
      border-radius: 6px;
      background-color: rgba(0, 0, 0, 0.4);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2px 8px 3px 8px;
      border: 1px solid #707272;
      backdrop-filter: blur(20px);
      transition: 0.2s all;
      opacity: 0;
      visibility: hidden;
    }
  }

  .no-point {
    margin-bottom: 9px;

    @media (max-width: 550px) {
      display: none;
    }
  }

  .dock-icon {
    height: 3.59rem;
    cursor: url("../../resources//images/pointing.png"), auto;
    transition: 0.175s all ease-in-out;

    @media (max-width: 600px) {
      height: 2.6rem;
    }
  }

  .division {
    width: 1px;
    height: 62px;
    background-color: rgb(85, 84, 84);
    margin-left: 2px;
    margin-right: 2px;
  }

  .dock-item:hover {
    margin-bottom: 35px;

    // media query for small
    @media (max-width: 600px) {
      margin-bottom: 0px;
    }

    &:hover {
      .tool-tip {
        opacity: 1;
        visibility: visible;
      }

      .dock-icon {
        height: 3.59rem;
        // media query for small
        @media (min-width: 600px) {
          height: 90px;
          width: 88px;
        }
      }
    }
  }

  .distance-1 {
    margin-bottom: 22px !important;

    .dock-icon {
      height: 70px;
      width: 69px;
    }
  }

  .distance-1.no-point {
    margin-bottom: 25px !important;
  }

  .distance-2 {
    margin-bottom: 14px !important;

    .dock-icon {
      height: 62px;
      width: 61px;
    }
  }

  .hovered.no-point {
    margin-bottom: 40px !important;
  }

  .point {
    height: 4px;
    width: 4px;
    border-radius: 9999px;
    background-color: white;
    justify-self: center;
    margin-right: 2px;

    @media (max-width: 550px) {
      display: none;
    }
  }
`;
