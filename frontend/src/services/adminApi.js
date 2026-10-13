import { apiService } from './api.service';

export const adminApi = {
  async getUpcomingEvents() {
    try {
      const res = await apiService.get('/events/upcoming');
      return res || { posts: [] };
    } catch {
      return { posts: [] };
    }
  },

  async applyCertificate(payload) {
    return await apiService.post('/certificates/apply', payload);
  },
};

export default adminApi;
