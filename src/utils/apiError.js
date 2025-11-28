// src/utils/apiError.js
export function getApiErrorMessage(error) {
    // Backend cevap verdiyse
    if (error?.response) {
      const data = error.response.data;
  
      // Jira'da verilen formata uyum: { success, message, errors: {...} }
      if (data?.message) return data.message;
  
      // Daha detaylı istersen status ve text
      return `Request failed with status ${error.response.status}`;
    }
  
    // İstek gitti ama cevap gelmediyse (network / timeout)
    if (error?.request) {
      return "Network error. Please check your internet connection and try again.";
    }
  
    // Kod tarafında beklenmeyen bir hata
    return "Unexpected error occurred.";
  }
  