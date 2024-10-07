import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Fullstack Blog',
  description: 'Um blog de exemplo para a prática com Next.js e Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen">
        {/* Cabeçalho */}
        <header className="bg-gray-100 p-4 shadow-md flex justify-between items-center">
          <div className="text-xl font-semibold">Fullstack Blog</div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/">Home</a></li>
              <li><a href="/about">Sobre</a></li>
              <li><a href="/posts">Posts</a></li>
              <li><a href="/login">Sair</a></li>
            </ul>
          </nav>
        </header>

        {/* Conteúdo Principal */}
        <main className="flex-grow p-6 bg-white">
          {children}
        </main>

        {/* Rodapé */}
        <footer className="bg-gray-100 p-4 text-center mt-8">
          <div className="flex justify-between items-center">
            <div>Fullstack Blog © 2023</div>
            <div>
              <a href="#" className="hover:underline">Sobre</a> | 
              <a href="#" className="hover:underline">Sobre o Blog</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
