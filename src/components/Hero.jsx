export default function Hero() {
  return (
    <header className="flex flex-col items-center justify-center text-center py-32 bg-gray-900">
      {/* Profile Picture */}
      <img
        src="/profile.jpg" // Replace with your actual image path
        alt="Naveen B"
        className="w-32 h-32 rounded-full border-4 border-teal-400 shadow-lg mb-6"
      />

      {/* Greeting */}
      <h2 className="text-5xl font-extrabold text-teal-400 animate-fadeIn">
        Hi, I'm Naveen B 👋
      </h2>

      {/* Short Description */}
      <p className="mt-4 text-lg text-gray-300 max-w-xl leading-relaxed animate-fadeIn delay-200">
        Full Stack Developer | React & Tailwind Enthusiast | I build responsive and interactive web applications.
      </p>

      {/* Call-to-Action Button */}
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition transform hover:scale-105"
      >
        View My Work
      </a>
    </header>
  )
}
