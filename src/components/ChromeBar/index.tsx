import "./styles.scss";

import React from "react";

import DropdownComponent from "./DropdownComponent";
import formatDate from "../../utils/helpers/formatDate";

export default function ({ isChromeBarExpanded, setIsChromeBarExpanded }) {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [formattedCurrentDate, setFormattedCurrentDate] = React.useState("");

  const [selectedSection, setSelectedSection] = React.useState(undefined);

  React.useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  React.useEffect(() => {
    setFormattedCurrentDate(formatDate(currentDate));
  }, [currentDate]);

  const dispatchAction = (e: React.MouseEvent<HTMLElement>) => {
    const selectedSection = e.target as HTMLElement;

    setSelectedSection(selectedSection.id);
  };

  const toggleMenu = () => {
    setIsChromeBarExpanded(!isChromeBarExpanded);
  };

  // Close dropdown function
  const closeDropdown = () => {
    setSelectedSection(undefined);
  };

  return (
    <div className="nav-bar">
      <div className="logo section" id="logo" onClick={dispatchAction}>
        <img
          alt="Apple Logo"
          className="apple"
          src={require("../../resources/images/apple.png")}
        />
        <div
          className={`${
            selectedSection === "logo"
              ? "selected-logo selected"
              : "not-selected"
          } bg`}
        ></div>
        {selectedSection === "logo" ? (
          <DropdownComponent
            selectedSection={selectedSection}
            closeDropdown={closeDropdown}
          />
        ) : null}
      </div>
      <i className="mobile-menu-icon fa fa-bars" onClick={toggleMenu}></i>
      <div className={`nav-bar-menu ${isChromeBarExpanded ? "open" : ""}`}>
        <div className="chrome section" id="chrome" onClick={dispatchAction}>
          Chrome
          <div
            className={`${
              selectedSection === "chrome"
                ? "selected-chrome selected"
                : "not-selected"
            }`}
          ></div>
          {selectedSection === "chrome" ? (
            <DropdownComponent
              selectedSection={selectedSection}
              closeDropdown={closeDropdown}
            />
          ) : null}
        </div>

        <div className="file section" id="file" onClick={dispatchAction}>
          File
          <div
            className={`${
              selectedSection === "file"
                ? "selected-file selected"
                : "not-selected"
            }`}
          ></div>
          {selectedSection === "file" ? (
            <DropdownComponent
              selectedSection={selectedSection}
              closeDropdown={closeDropdown}
            />
          ) : null}
        </div>

        <div className="edit section" id="edit" onClick={dispatchAction}>
          Edit
          <div
            className={`${
              selectedSection === "edit"
                ? "selected-edit selected"
                : "not-selected"
            }`}
          ></div>
          {selectedSection === "edit" ? (
            <DropdownComponent
              selectedSection={selectedSection}
              closeDropdown={closeDropdown}
            />
          ) : null}
        </div>

        <div className="view section" id="view" onClick={dispatchAction}>
          View
          <div
            className={`${
              selectedSection === "view"
                ? "selected-view selected"
                : "not-selected"
            }`}
          ></div>
          {selectedSection === "view" ? (
            <DropdownComponent
              selectedSection={selectedSection}
              closeDropdown={closeDropdown}
            />
          ) : null}
        </div>
        <div
          className="chrome-history section"
          id="chrome-history"
          onClick={dispatchAction}
        >
          History
          <div
            className={`${
              selectedSection === "chrome-history"
                ? "selected-chrome-history selected"
                : "not-selected"
            }`}
          ></div>
          {selectedSection === "chrome-history" ? (
            <DropdownComponent
              selectedSection={selectedSection}
              closeDropdown={closeDropdown}
            />
          ) : null}
        </div>

        <div
          className="chrome-bookmarks section"
          id="chrome-bookmarks"
          onClick={dispatchAction}
        >
          Bookmarks
          <div
            className={`${
              selectedSection === "chrome-bookmarks"
                ? "selected-chrome-bookmarks selected"
                : "not-selected"
            }`}
          ></div>
          {selectedSection === "chrome-bookmarks" ? (
            <DropdownComponent
              selectedSection={selectedSection}
              closeDropdown={closeDropdown}
            />
          ) : null}
        </div>

        <div className="right">
          <h3 className="date">{formattedCurrentDate}</h3>
        </div>
      </div>
    </div>
  );
}
