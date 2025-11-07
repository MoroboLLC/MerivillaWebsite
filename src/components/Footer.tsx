export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-ocean text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-3 md:space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold">MERIVILLA</h3>
          <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
            Creating extraordinary living experiences in Mérida, Yucatán
          </p>
          <div className="pt-6 md:pt-8 border-t border-white/20 text-white/70 text-xs md:text-sm">
            <p>&copy; {currentYear} MERIVILLA. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
