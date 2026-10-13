export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  TIMEOUT: 15000,
  ENDPOINTS: {
    HEALTH: '/health',
    AUTH: {
      LOGIN: '/auth/login',
      REGISTER: '/auth/register',
    },
    CONTACT: '/contact',
    BLOGS: '/blogs',
    GALLERY: '/gallery',
  },
};
