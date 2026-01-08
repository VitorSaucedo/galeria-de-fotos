import { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { SearchBar } from './components/ui/SearchBar';
import { PhotoCard } from './components/ui/PhotoCard';
import { usePhotos } from './hooks/usePhotos';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const { photos, isLoading, error } = usePhotos(searchTerm);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 container mx-auto px-4 pb-12">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />

        {/* Feedback de Erro */}
        {error && (
          <div className="text-center p-6 bg-red-50 text-red-600 rounded-lg max-w-md mx-auto">
            {error}
          </div>
        )}

        {/* Feedback de Carregamento (Skeleton simples) */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 opacity-50">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-64 bg-gray-200 animate-pulse rounded-lg" />
            ))}
          </div>
        ) : (
          <>
            {/* Grid de Fotos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {photos.map((photo) => (
                <PhotoCard key={photo.id} photo={photo} />
              ))}
            </div>

            {/* Mensagem: Nenhuma foto encontrada */}
            {!isLoading && photos.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-gray-500 font-medium">Nenhuma foto encontrada para "{searchTerm}"</p>
                <p className="text-gray-400">Tente usar palavras-chave mais genéricas.</p>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;