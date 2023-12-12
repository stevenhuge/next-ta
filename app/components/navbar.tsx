// components/Navbar.tsx
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
      <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold">
          <Link href="/" legacyBehavior>
            <a>HALO User !</a>
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/about" legacyBehavior>
            <a className="text-white">Kontak</a>
          </Link>
          <Link href="/" legacyBehavior>
            <a className="text-white">Tentang Kami</a>
          </Link>
          <div className="group relative">
            <Link href="/login">
            <button className="text-white focus:outline-none">
              Login
            </button>
            </Link>
           
          </div>
        </div>
      </div>
    </nav>
    );
  };
  
  export default Navbar;
  