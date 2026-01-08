import { useState, useEffect } from 'react';
import { photoService } from '../services/api';
import type { Photo } from '../@types/photo';

export const usePhotos = (searchTerm: string) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        if (searchTerm.trim() === '') {
          const response = await photoService.listInitialPhotos();
          setPhotos(response.data);
        } else {
          const response = await photoService.searchPhotos(searchTerm);
          setPhotos(response.data.results);
        }
      } catch (err) {
        setError('Ocorreu um erro ao carregar as fotos. Verifique sua conexão ou chave de API.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchPhotos();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  return { photos, isLoading, error };
};