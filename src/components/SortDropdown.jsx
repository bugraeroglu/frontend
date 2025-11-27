function SortDropdown({ onSort }) {
  const handleSort = (e) => {
    onSort(e.target.value);
  };

  return (
    <div style={styles.container}>
      <label style={styles.label}>Sort by:</label>

      <select onChange={handleSort} style={styles.select}>
        <option value="">Select...</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
        <option value="name_asc">Name: A to Z</option>
        <option value="name_desc">Name: Z to A</option>
        <option value="newest">Newest First</option>
      </select>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },

  label: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#222",
  },

  select: {
    padding: "0.9rem 1.4rem",
    minWidth: "220px",   // ⭐ Wider box to fit long text
    border: "2px solid #ccc",
    borderRadius: "10px",
    fontSize: "1.15rem", 
    fontWeight: "600",
    outline: "none",
    cursor: "pointer",
    backgroundColor: "white",
    transition: "all 0.25s ease",
  },
};

export default SortDropdown;
