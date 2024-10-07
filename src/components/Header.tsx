import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-100 p-4 shadow-md flex justify-between items-center">
      <div className="text-xl font-semibold">Fullstack Blog</div>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/about"><a>Sobre</a></Link></li>
          <li><Link href="/posts"><a>Posts</a></Link></li>
          <li><Link href="/login"><a>Sair</a></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
