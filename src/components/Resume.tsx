export default function Resume() {
  return (
    <section id="resume" className="py-16 px-4 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 text-white">Resume</h2>
      <p className="mb-4 text-gray-300">Download or view my resume for more details about my experience and skills.</p>
      <a
        href="/resume.pdf" // Ensure this is the correct path to your resume file
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 transition-all"
      >
        View / Download Resume
      </a>
    </section>
  );
}
