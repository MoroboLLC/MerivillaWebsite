export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-ocean text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-bold">McCarthy Development</h3>
          <p className="text-white/80 max-w-2xl mx-auto">
            Creating extraordinary living experiences in Mérida, Yucatán
          </p>
          <div className="pt-8 border-t border-white/20 text-white/70">
            <p>&copy; {currentYear} McCarthy Development. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
