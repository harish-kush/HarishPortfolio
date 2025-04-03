import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{fontFamily: 'fh1'}} className="bg-gray-900 text-white p-4 fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wider">
          <span className="text-blue-400">H</span>arish <span className="text-blue-400">K</span>ushwaha.
        </Link>

        {/* Desktop Menu */}
        <div style={{fontFamily:'fh2'}} className="hidden md:flex gap-6 text-lg">
          <Link onClick={()=>{
            window.scrollTo({top:0, behavior:'smooth'}); 
          }} to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link onClick={()=>{
            window.scrollTo({top:0, behavior:'smooth'}); 
          }} to="/about" className="hover:text-blue-400 transition">About</Link>
          <Link onClick={()=>{
            window.scrollTo({top:0, behavior:'smooth'}); 
          }} to="/projects" className="hover:text-blue-400 transition">Projects</Link>
          <Link onClick={()=>{
            window.scrollTo({top:0, behavior:'smooth'}); 
          }} to="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4 mt-2 rounded-lg">
          <Link to="/" className="block py-2 hover:text-blue-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block py-2 hover:text-blue-400" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/projects" className="block py-2 hover:text-blue-400" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/contact" className="block py-2 hover:text-blue-400" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
