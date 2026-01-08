import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
  }
});

export const photoService = {
  listInitialPhotos: () => api.get('/photos?per_page=12'),
  
  searchPhotos: (query: string) => api.get(`/search/photos?query=${query}&per_page=12`)
};