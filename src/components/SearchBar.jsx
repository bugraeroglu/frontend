import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [expanded, setExpanded] = useState(false);
  let debounceTimer;

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => onSearch(value), 400);
  };

  return (
    <div
      style={{
        ...styles.container,
        width: expanded ? "100%" : "54px",
        paddingLeft: expanded ? "3.2rem" : "0rem",
        background: expanded ? "#fff" : "transparent",
        justifyContent: expanded ? "flex-start" : "center",
      }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => {
        if (!searchTerm) setExpanded(false);
      }}
    >
      {/* Magnifying Glass */}
      <FiSearch
        style={{
          ...styles.icon,
          fontSize: expanded ? "1.6rem" : "2.4rem", // bigger icon
          color: expanded ? "#333" : "#000",
          left: expanded ? "1rem" : "unset",
        }}
      />

      {/* Input Field */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder={
          expanded ? "Search for T-shirts, Sweatshirts, Jeans..." : ""
        }
        style={{
          ...styles.input,
          opacity: expanded ? 1 : 0,
          pointerEvents: expanded ? "auto" : "none",
        }}
      />

      {/* Clear Button */}
      {expanded && searchTerm && (
        <button
          onClick={() => {
            setSearchTerm("");
            onSearch("");
          }}
          style={styles.clearBtn}
        >
          <FiX />
        </button>
      )}
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    height: "54px",
    border: "2px solid #e0e0e0",
    borderRadius: "14px",
    transition: "all 0.35s ease",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    overflow: "hidden",
  },

  icon: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    transition: "all 0.3s ease",
  },

  input: {
    width: "100%",
    height: "100%",
    border: "none",
    outline: "none",
    background: "transparent",
    transition: "opacity .3s ease",
    fontSize: "1.15rem",       // bigger placeholder and text
    color: "#222",
    paddingRight: "2.5rem",

    "::placeholder": {
      fontSize: "1.15rem",
      color: "#555",
    },
  },

  clearBtn: {
    position: "absolute",
    right: "1rem",
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    color: "#444",
    fontSize: "1.4rem",
    cursor: "pointer",
  },
};

export default SearchBar;
