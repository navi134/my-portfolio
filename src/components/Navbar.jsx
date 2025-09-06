export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-800 shadow-md fixed w-full z-50">
      <h1 className="text-2xl font-bold text-teal-400">Naveen</h1>
      <ul className="flex gap-6">
        <li><a href="#about" className="hover:text-teal-400">About</a></li>
        <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
      </ul>
    </nav>
  )
}
