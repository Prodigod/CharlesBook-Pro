import "./styles.scss";
import React, { useEffect, useRef } from "react";
import getChromeDropdownContent from "../../../utils/helpers/getChromeDropdownContent";

export default function DropdownComponent({ selectedSection, closeDropdown }) {
  const content = getChromeDropdownContent(selectedSection);
  const dropdownMenuRef = useRef(null);

  function adjustDropdownMenu() {
    const dropdownMenu = dropdownMenuRef.current;
    if (!dropdownMenu) return;

    const rect = dropdownMenu.getBoundingClientRect();
    const viewportWidth =
      window.innerWidth || document.documentElement.clientWidth;

    // Check if the right side is outside of the viewport
    if (rect.right > viewportWidth) {
      const adjustment = rect.right - viewportWidth;
      dropdownMenu.style.left = `${
        parseFloat(getComputedStyle(dropdownMenu).left) - adjustment
      }px`;
    }

    // Check if the left side is outside of the viewport
    if (rect.left < 0) {
      dropdownMenu.style.left = "0px";
    }

    // Check if the dropdown menu is wider than the viewport
    if (rect.width > viewportWidth) {
      dropdownMenu.style.width = `${viewportWidth}px`;
      dropdownMenu.style.left = "0px";
    }
  }

  useEffect(() => {
    adjustDropdownMenu();
  }, []);

  // Add click-outside detection
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownMenuRef.current && !dropdownMenuRef.current.contains(event.target)) {
        closeDropdown(); // Call the closeDropdown function passed as a prop
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeDropdown]);

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
