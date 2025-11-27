// src/pages/Products.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropdown";

const MOCK = [
  { id: 1, name: "Denim Jacket", price: 89.9, quantity: 8, category_name: "Jackets", image_url: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format" },
  { id: 2, name: "Wide Jeans", price: 69.9, quantity: 0, category_name: "Jeans", image_url: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=800&auto=format" },
  { id: 3, name: "Sweatshirt", price: 49.9, quantity: 14, category_name: "Sweatshirts", image_url: "https://images.unsplash.com/photo-1520975940209-6c92867fd0f0?q=80&w=800&auto=format" },
  { id: 4, name: "T-Shirt", price: 24.9, quantity: 30, category_name: "T-Shirts", image_url: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format" },
  { id: 5, name: "Chino Pants", price: 59.9, quantity: 6, category_name: "Pants", image_url: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=800&auto=format" },
  { id: 6, name: "Zip Hoodie", price: 54.9, quantity: 10, category_name: "Sweatshirts", image_url: "https://images.unsplash.com/photo-1520975940209-6c92867fd0f0?q=80&w=800&auto=format" },
];

export default function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openFilter, setOpenFilter] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => {
      setProducts(MOCK);
      setFilteredProducts(MOCK);
      setLoading(false);
    }, 150);
    return () => clearTimeout(t);
  }, []);

  const toggleSection = (section) =>
    setOpenFilter(openFilter === section ? null : section);

  const handleSearch = (term) => {
    if (!term) return setFilteredProducts(products);
    const q = term.toLowerCase();
    setFilteredProducts(
      products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category_name?.toLowerCase().includes(q)
      )
    );
  };

  if (loading) return <div style={{ padding: "4rem" }}>Loading...</div>;

  return (
    <div style={styles.page}>
      {/* HEADER */}
      <div style={styles.header}>
        <h1 style={styles.title}>PREMIUM COLLECTION</h1>
        <p style={styles.subtitle}>Discover our curated selection of fashion essentials</p>
      </div>

      <div style={styles.layout}>
        {/* FILTER SIDEBAR */}
        <div style={styles.sidebar}>
          <h2 style={styles.filterTitle}>FİLTRELER</h2>

          {/* Gender */}
          <div style={styles.filterSection}>
            <div style={styles.filterHeader} onClick={() => toggleSection("gender")}>
              <span>Cinsiyet</span>
              <span style={styles.plus}>+</span>
            </div>
            {openFilter === "gender" && (
              <div style={styles.filterItems}>
                <div style={styles.filterItem}>Women</div>
                <div style={styles.filterItem}>Men</div>
                <div style={styles.filterItem}>Unisex</div>
              </div>
            )}
          </div>

          {/* Category */}
          <div style={styles.filterSection}>
            <div style={styles.filterHeader} onClick={() => toggleSection("category")}>
              <span>Ürün Grubu</span>
              <span style={styles.plus}>+</span>
            </div>
            {openFilter === "category" && (
              <div style={styles.filterItems}>
                <div style={styles.filterItem}>Jackets</div>
                <div style={styles.filterItem}>Jeans</div>
                <div style={styles.filterItem}>Sweatshirts</div>
                <div style={styles.filterItem}>T-Shirts</div>
                <div style={styles.filterItem}>Pants</div>
              </div>
            )}
          </div>

          {/* Size */}
          <div style={styles.filterSection}>
            <div style={styles.filterHeader} onClick={() => toggleSection("size")}>
              <span>Beden</span>
              <span style={styles.plus}>+</span>
            </div>
            {openFilter === "size" && (
              <div style={styles.filterItems}>
                <div style={styles.filterItem}>XS</div>
                <div style={styles.filterItem}>S</div>
                <div style={styles.filterItem}>M</div>
                <div style={styles.filterItem}>L</div>
                <div style={styles.filterItem}>XL</div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div style={styles.right}>
          <div style={styles.topBar}>
            <SearchBar onSearch={handleSearch} />
            <SortDropdown />
          </div>

          <p style={styles.countText}>{filteredProducts.length} products found</p>

          {/* PRODUCT GRID */}
          <div style={styles.grid}>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.06)";
                }}
                onClick={() =>
                  navigate(`/products/${product.id}`, { state: { p: product } })
                }
              >
                <div style={styles.imageBox}>
                  {product.quantity === 0 && (
                    <div style={styles.outOfStockBadge}>OUT OF STOCK</div>
                  )}
                  <img
                    src={product.image_url}
                    alt={product.name}
                    style={styles.image}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.07)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>

                <div style={styles.info}>
                  <div style={styles.category}>{product.category_name}</div>
                  <div style={styles.name}>{product.name}</div>
                  <div style={styles.price}>${product.price.toFixed(2)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------ */
/* STYLES                               */
/* ------------------------------------ */
const styles = {
  page: { background: "#fafafa", minHeight: "100vh", width: "100%" },

  header: {
    background: "#1a1a1a",
    padding: "3rem 1rem",
    color: "white",
    textAlign: "center",
  },

  title: {
    fontSize: "3rem",
    fontWeight: 800,
  },

  subtitle: {
    fontSize: "1.1rem",
    color: "#b5b5b5",
    marginTop: ".4rem",
  },

  layout: {
    display: "flex",
    gap: "2rem",
    padding: "2rem",
    width: "100%",
    boxSizing: "border-box",
  },

  /* FILTER SIDEBAR */
  sidebar: {
    width: "340px",
    background: "white",
    padding: "2.5rem",
    borderRadius: "16px",
    boxShadow: "0 4px 18px rgba(0,0,0,0.10)",
    position: "sticky",
    top: "130px",
    height: "fit-content",
    transform: "scale(1.05)",
  },

  filterTitle: {
    fontSize: "2rem",
    fontWeight: 900,
    marginBottom: "2rem",
  },

  filterSection: {
    marginBottom: "2.2rem",
    borderBottom: "1px solid #ddd",
    paddingBottom: "1.2rem",
  },

  filterHeader: {
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "1.3rem",
  },

  plus: {
    fontSize: "1.6rem",
    fontWeight: 700,
  },

  filterItems: {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: ".8rem",
  },

  filterItem: {
    fontSize: "1.2rem",
    cursor: "pointer",
    color: "#333",
  },

  /* RIGHT SIDE */
  right: { flex: 1 },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1.5rem",
    gap: "1rem",
  },

  countText: { marginBottom: "1rem", color: "#555" },

  /* PRODUCT GRID — FIXED 4 PER ROW */
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(240px, 1fr))",
    gap: "2rem",
  },

  /* PRODUCT CARD */
  card: {
    background: "white",
    borderRadius: "14px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "0.25s ease",
    boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
    border: "1px solid #eee",
  },

  imageBox: {
    height: "260px",
    position: "relative",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform .3s ease",
  },

  outOfStockBadge: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    background: "#d9534f",
    padding: ".3rem .7rem",
    borderRadius: "4px",
    color: "white",
    fontSize: ".7rem",
    fontWeight: 700,
  },

  info: { padding: "1rem" },

  category: {
    fontSize: ".8rem",
    color: "#777",
    textTransform: "uppercase",
    marginBottom: ".2rem",
  },

  name: {
    fontSize: "1.1rem",
    fontWeight: 600,
    marginBottom: ".3rem",
  },

  price: {
    fontSize: "1.15rem",
    fontWeight: 800,
  },
};

