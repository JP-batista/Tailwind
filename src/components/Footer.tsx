const Footer = () => {
  return (
    <footer className="bg-gray-100 p-4 text-center mt-8">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <div>Fullstack Blog © 2023</div>
        <div>
          <a href="#" className="hover:underline">Sobre</a> | 
          <a href="#" className="hover:underline">Sobre o Blog</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
