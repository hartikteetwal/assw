export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Assignment
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          A Nextjs project Assignment
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This project demonstrates advanced concepts like
            Static Site Generation (SSG), Incremental Static
            Regeneration (ISR), Redux state management, and
            optimized UI design.
          </p>

          <h2 className="text-3xl font-semibold mt-8 mb-4">
            What This Project Shows
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li>✔ Dynamic product pages</li>
            <li>✔ Global cart with Redux</li>
            <li>✔ Modern responsive UI</li>
            <li>✔ Optimized rendering strategies</li>
            <li>✔ Clean project architecture</li>
          </ul>
        </div>

        {/* Image / Visual Section */}
        <div className="bg-white rounded-3xl p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">
             Tech Stack Used
          </h3>

          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-gray-100 p-4 rounded-xl">
              Next.js
            </div>
            <div className="bg-gray-100 p-4 rounded-xl">
              React
            </div>
            <div className="bg-gray-100 p-4 rounded-xl">
              Redux Toolkit
            </div>
            <div className="bg-gray-100 p-4 rounded-xl">
              Tailwind CSS
            </div>
          </div>
        </div>

      </section>

      {/* Footer Section */}
      <section className="bg-gray-900 text-white py-10 text-center">
        <p className="opacity-80">
          © 2026 My eCommerce Assignment Project. Built with ❤️ using Next.js.
        </p>
      </section>

    </div>
  )
}