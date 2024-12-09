import "./styles.scss";
import React, { useEffect } from "react";
import getChromeDropdownContent from "../../../utils/helpers/getChromeDropdownContent";

export default function DropdownComponent({ selectedSection }) {
  const content = getChromeDropdownContent(selectedSection);


  const dropdownMenuRef = React.useRef(null); // Add this line

  function adjustDropdownMenu() {
    const dropdownMenu = dropdownMenuRef.current;
    if (!dropdownMenu) return;

    const rect = dropdownMenu.getBoundingClientRect();
    const viewportWidth =
      window.innerWidth || document.documentElement.clientWidth;

    // Check if the right side is outside of the viewport
    if (rect.right > viewportWidth) {
      // Calculate how much to adjust the dropdown menu by
      const adjustment = rect.right - viewportWidth;

      // Adjust the dropdown menu's position to the left
      dropdownMenu.style.left = `${
        parseFloat(getComputedStyle(dropdownMenu).left) - adjustment
      }px`;
    }

    // Check if the left side is outside of the viewport
    if (rect.left < 0) {
      // Adjust the dropdown menu's position to the right
      dropdownMenu.style.left = "0px";
    }

    // Check if the dropdown menu is wider than the viewport
    if (rect.width > viewportWidth) {
      // Adjust the width of the dropdown menu to fit the viewport
      dropdownMenu.style.width = `${viewportWidth}px`;
      // Align the dropdown menu with the left edge of the viewport
      dropdownMenu.style.left = "0px";
    }
  }

  useEffect(() => {
    adjustDropdownMenu();
  }, []);

  return (
    <div
      className={`dd dropdown-menu ${
        selectedSection === "logo"
          ? "dd-logo"
          : selectedSection === "chrome"
          ? "dd-chrome"
          : selectedSection === "file"
          ? "dd-file"
          : selectedSection === "edit"
          ? "dd-edit"
          : selectedSection === "view"
          ? "dd-view"
          : selectedSection === "chrome-history"
          ? "dd-chrome-history"
          : selectedSection === "chrome-bookmarks"
          ? "dd-chrome-bookmarks"
          : ""
      }`}
      ref={dropdownMenuRef}
    >
      {content.map((item, i) => {
        if (item.name === "divider") {
          return <div className="divider dd" />;
        }

        return (
          <div
            key={i}
            className={`dropdown-item dd ${
              selectedSection === "logo"
                ? "di-logo"
                : selectedSection === "chrome"
                ? "di-chrome"
                : selectedSection === "file"
                ? "di-file"
                : selectedSection === "edit"
                ? "di-edit"
                : selectedSection === "view"
                ? "di-view"
                : selectedSection === "chrome-history"
                ? "di-chrome-history"
                : selectedSection === "chrome-bookmarks"
                ? "di-chrome-bookmarks"
                : ""
            } ${item.available ? "selectable" : "unselectable"}`}
            style={{
              color: item.available ? "white" : "rgba(255, 255, 255, 0.55)",
            }}
            onClick={(e) => {
              if (item.name === "Restart") {
                localStorage.clear();
                window.location.reload();
              }
            }}
          >
            {!!item?.image ? (
              <a
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "default",
                }}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={item.image}
                  style={{
                    width: "16px",
                    height: "16px",
                    marginRight: "4px",
                    borderRadius: "3px",
                  }}
                  alt={item.name}
                />
                {item.name}
              </a>
            ) : (
              item.name
            )}
          </div>
        );
      })}
    </div>
  );
}
