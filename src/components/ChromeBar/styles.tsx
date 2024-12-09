import styled from "styled-components";

export const ChromeBarWrapper = styled.div`
  width: 100vw;
  height: 30px;
  z-index: 5000;
  position: absolute;
  top: 0;
  display: flex;
  background-color: rgba(0, 0, 0, 0.25);
  margin: 0;
  padding: 0;
  flex-direction: row;
  flex-wrap: wrap;

  // &::after {
  //   content: "";
  //   position: absolute;
  //   inset: 0.01%;
  //   height: inherit;
  //   width: inherit;
  //   z-index: -1;
  //   background-color: black;
  //   opacity: 0.075;
  // }

  .mobile-menu-icon {
    display: none;
  }
  .nav-bar-menu {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1 auto;
  }

  .right {
    display: flex;
    align-items: center;
    font-size: 0.825em;
    font-family: "SF Regular";
    margin-left: auto;

    .date {
      margin-right: 9px;
      color: white;
      opacity: 0.85;
      font-weight: 700;
    }

    .settings {
      height: 26px;
      fill: white;
      padding: 5px 8px;
      margin-right: 9px;
      cursor: url("../../resources/images/pointing.png"), auto;

      path {
        pointer-events: none;
      }
    }
  }

  .section {
    padding: 5px 10px;
    font-size: 13px;
    font-weight: 600;
    border: none;
    border-radius: 6px;
    font-family: "SF Regular";
    color: white;
    cursor: url("../../resources/images/pointing.png"), auto;
    background-position: 50% 50%;
    transition: 2s all;
    position: relative;
  }

  .not-selected {
    background-color: "";
    background-size: "5px 5px";
    width: 5px;
    height: 5px;
    border-radius: 6px;
    transition: 0.175s all;
    position: absolute;
    top: 45%;
    left: 45%;
  }

  .selected-logo {
    background-color: rgba(255, 255, 255, 0.25);
    width: 37px;
    border-radius: 6px;
    height: 29px;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.175s all;
    background-size: 29px 35px;
    pointer-events: none;
  }

  .selected-chrome {
    background-color: rgba(255, 255, 255, 0.25);
    width: 68px;
    border-radius: 6px;
    height: 29px;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.175s all;
    background-size: 29px 35px;
    pointer-events: none;
  }

  .selected-file {
    background-color: rgba(255, 255, 255, 0.25);
    width: 38px;
    border-radius: 6px;
    height: 29px;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.175s all;
    background-size: "29px 35px";
    pointer-events: none;
  }

  .selected-edit {
    background-color: rgba(255, 255, 255, 0.25);
    width: 39px;
    border-radius: 6px;
    height: 29px;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.175s all;
    background-size: "29px 35px";
    pointer-events: none;
  }

  .selected-view {
    background-color: rgba(255, 255, 255, 0.25);
    width: 46px;
    border-radius: 6px;
    height: 29px;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.175s all;
    background-size: "29px 35px";
    pointer-events: none;
  }

  .selected-chrome-history {
    background-color: rgba(255, 255, 255, 0.25);
    width: 58px;
    border-radius: 6px;
    height: 29px;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.175s all;
    background-size: "29px 35px";
    pointer-events: none;
  }

  .selected-chrome-bookmarks {
    background-color: rgba(255, 255, 255, 0.25);
    width: 82px;
    border-radius: 6px;
    height: 29px;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.175s all;
    background-size: "29px 35px";
    pointer-events: none;
  }

  .selected-help {
    background-color: rgba(255, 255, 255, 0.25);
    width: 44px;
    border-radius: 6px;
    height: 29px;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.175s all;
    background-size: "29px 35px";
    pointer-events: none;
  }

  .chrome {
    font-family: "SF Bold";
    margin-right: 4px;
  }

  .logo {
    padding: 5px 12px;
    margin-right: 0px;
  }

  .apple {
    height: 16px;
  }

  .not-selected {
    pointer-events: none;
  }

  // media query for mobile
  @media (max-width: 600px) {
    .nav-bar {
      flex-direction: column;
      flex-wrap: nowrap;
      height: 50px;

      top: 0;

      .logo {
        margin-top: 10px;
        .apple {
          height: 20px;
        }
      }

      .nav-bar-menu {
        flex-direction: column;
        flex-wrap: nowrap;
        background-color: rgba(0, 0, 0, 0.5);
        transition: 0.175s all;
        display: none;
        position: absolute;
        width: 100%;
        top: 50px;
        &.open {
          display: flex;
        }

        .right {
          display: none;
        }
        .section {
          padding: 10px 10px 20px 10px;
          padding-left: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.335);
          border-radius: 0px;
          margin-top: 10px;
        }
        .dropdown-menu {
          position: relative;
          left: 0 !important;
          top: 10px !important;
          border-radius: 0px;
          background-color: transparent;
          border: none;
          box-shadow: none;
          padding: 0;
          width: auto !important;

          &:after {
            content: "";
          }

          .dropdown-item {
            padding: 2px 0px;

            &:hover {
              padding-left: 20px;
            }

            // a > img{
            //     width:3px;
            //     border:3px solid red;
            // }
          }
        }
        .selected {
          width: 95%;
          margin-left: 10px;
          margin-top: 3px;
        }
      }

      .mobile-menu-icon {
        position: absolute;
        right: 5px;
        top: 0px;
        padding: 15px;
        color: #fff;
        cursor: url("../../resources/images/pointing.png"), auto;
        display: block;
        &:before {
          font-size: 20px;
        }
      }
    }
  }
`;
