import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    // Debounce
    const timeoutId = setTimeout(() => {
      onSearch(value);
    }, 500);
    
    return () => clearTimeout(timeoutId);
  };

  return (
    <div style={styles.container}>
      <span style={styles.iconLeft}>🔍</span>
      <input
        type="text"
        placeholder="Search for T-shirts, Sweatshirts, Jeans..."
        value={searchTerm}
        onChange={handleSearch}
        style={styles.input}
      />
      {searchTerm && (
        <button 
          onClick={() => {
            setSearchTerm('');
            onSearch('');
          }}
          style={styles.clearBtn}
        >
          ✕
        </button>
      )}
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    width: '100%',
  },
  iconLeft: {
    position: 'absolute',
    left: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '1.2rem',
    color: '#999',
  },
  input: {
    width: '100%',
    padding: '0.9rem 3rem 0.9rem 3rem',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'all 0.3s ease',
    backgroundColor: '#fafafa',
  },
  clearBtn: {
    position: 'absolute',
    right: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    fontSize: '1.2rem',
    color: '#999',
    cursor: 'pointer',
    padding: '0.25rem',
  },
};

export default SearchBar;