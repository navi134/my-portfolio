export default function Contact() {
  return (
    <section id="contact" className="px-8 py-16 bg-gray-800">
      <h3 className="text-3xl font-bold text-teal-400 mb-6">Contact</h3>
      
      <p className="text-gray-300">
        Email: <a href="mailto:nab22cs@cmrit.ac.in" className="text-teal-400">nab22cs@cmrit.ac.in</a>
      </p>

      <p className="text-gray-300 mt-2">
        LinkedIn: 
        <a 
          href="https://www.linkedin.com/in/naveen-b-26a88a33a/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-teal-400 ml-2"
        >
          View Profile
        </a>
      </p>

      <p className="text-gray-300 mt-2">
        GitHub: 
        <a 
          href="https://github.com/navi134" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-teal-400 ml-2"
        >
          Visit Repo
        </a>
      </p>

      <p className="text-gray-300 mt-2">
        Mobile No: 
        <a href="tel:+919353736271" className="text-teal-400 ml-2">
          +91 9353736271
        </a>
      </p>
    </section>
  )
}
