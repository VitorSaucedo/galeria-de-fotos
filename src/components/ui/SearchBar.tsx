import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative max-w-2xl mx-auto my-8 px-4">
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Pesquisar fotos pelo nome..."
          className="w-full px-5 py-3 pr-12 text-gray-700 bg-white border-2 border-gray-200 rounded-full focus:border-brand focus:outline-hidden transition-all"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <button 
          className="absolute right-2 p-2 bg-brand text-white rounded-full hover:opacity-90 transition-opacity"
          aria-label="Buscar"
        >
          <Search size={20} />
        </button>
      </div>
    </div>
  );
};