// src/context/ToastContext.jsx
import React, {
    createContext,
    useCallback,
    useContext,
    useState,
  } from "react";
  
  const ToastContext = createContext(null);
  
  export const useToast = () => useContext(ToastContext);
  
  export function ToastProvider({ children }) {
    const [toast, setToast] = useState(null); // { message, type }
  
    const showToast = useCallback((message, type = "success") => {
      setToast({ message, type });
      setTimeout(() => setToast(null), 2500);
    }, []);
  
    return (
      <ToastContext.Provider value={{ showToast }}>
        {children}
  
        {toast && (
          <div
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              padding: "12px 18px",
              borderRadius: "8px",
              fontSize: "14px",
              backgroundColor:
                toast.type === "error" ? "#dc2626" : "#16a34a",
              color: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              zIndex: 9999,
            }}
          >
            {toast.message}
          </div>
        )}
      </ToastContext.Provider>
    );
  }
  