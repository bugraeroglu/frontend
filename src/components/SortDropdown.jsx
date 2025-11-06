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
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    label: {
      fontSize: '0.9rem',
      fontWeight: '600',
      color: '#333',
    },
    select: {
      padding: '0.5rem 1rem',
      border: '2px solid #e0e0e0',
      borderRadius: '8px',
      fontSize: '0.9rem',
      outline: 'none',
      cursor: 'pointer',
      backgroundColor: 'white',
    },
  };
  
  export default SortDropdown;