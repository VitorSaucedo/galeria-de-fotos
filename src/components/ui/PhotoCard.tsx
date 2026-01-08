import type { Photo } from '../../@types/photo';

interface PhotoCardProps {
  photo: Photo;
}

export const PhotoCard = ({ photo }: PhotoCardProps) => {
  return (
    <div className="group flex flex-col items-center">
      <div className="overflow-hidden rounded-lg shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
        <img
          src={photo.urls.small}
          alt={photo.alt_description}
          className="h-64 w-full object-cover transition-transform duration-500"
        />
      </div>
      <p className="mt-3 text-sm font-medium text-gray-600 text-center capitalize">
        {photo.description || photo.alt_description || "Sem título"}
      </p>
    </div>
  );
};