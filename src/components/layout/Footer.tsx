export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-6 mt-12 bg-gray-50 border-t border-gray-200">
      <p className="text-center text-gray-500 text-sm">
        &copy; {currentYear} Galeria de Fotos. Todos os direitos reservados.
      </p>
    </footer>
  );
};