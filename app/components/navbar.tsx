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
            <a className="text-white">About</a>
          </Link>
          <Link href="/" legacyBehavior>
            <a className="text-white">Tentang Kami</a>
          </Link>
          <div className="group relative">
            <button className="text-white focus:outline-none">
              Services
            </button>
            <div className="hidden group-hover:block absolute bg-gray-700 p-2 mt-2 space-y-2">
              <Link href="/services/service1" legacyBehavior>
                <a className="block text-white">Service 1</a>
              </Link>
              <Link href="/services/service2" legacyBehavior>
                <a className="block text-white">Service 2</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    );
  };
  
  export default Navbar;
  