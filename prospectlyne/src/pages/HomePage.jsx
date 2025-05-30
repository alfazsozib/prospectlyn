import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center justify-center text-white text-center">
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Job search background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-indigo-900 opacity-60"></div>
        </div>

        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Dream Job Today!</h1>
          <p className="mb-6 text-lg md:text-xl">Start your job search now and apply for top opportunities in your field.</p>
          <div className="flex justify-center space-x-4 mb-6 flex-wrap">
            <Link to="/signup" className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition">
              Sign Up Now
            </Link>
            <Link to="/login" className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition">
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="py-12 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-8">Featured Companies</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 px-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/2560px-Meta-Logo.png" alt="Company 1" className="h-12 object-contain" />
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Company 2" className="h-12 object-contain" />
          <img src="https://graphicsprings.com/wp-content/uploads/2023/07/image-58-1024x512.png" alt="Company 3" className="h-12 object-contain" />
          <img src="https://cdn.pixabay.com/photo/2021/12/06/13/50/tesla-6850411_640.png" alt="Company 4" className="h-12 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Bugatti_logo.svg/1200px-Bugatti_logo.svg.png" alt="Company 5" className="h-12 object-contain" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgjM1UVqAF7bhND_KZw5VO3vorvfOluckCJw&s" alt="Company 6" className="h-12 object-contain" />
        </div>
      </section>

      {/* Recent Job Circulars */}
      <section className="py-12 bg-gray-100">
        <h2 className="text-2xl font-semibold text-center mb-8">Recent Job Circulars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {[
            {
              title: "Software Developer Internship",
              company: "Tech Solutions",
              details: "Duration: 6 months | Location: Remote"
            },
            {
              title: "Data Analyst Intern",
              company: "DataX Inc.",
              details: "Duration: 3 months | Location: On-site"
            },
            {
              title: "UI/UX Designer Intern",
              company: "DesignHub",
              details: "Duration: 3 months | Location: Remote"
            }
          ].map((job, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <h3 className="font-semibold text-lg">{job.title}</h3>
              <p className="text-sm text-gray-500">Company: {job.company}</p>
              <p className="mt-2 text-gray-700">{job.details}</p>
              <Link to="/job-apply" className="mt-4 inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Employability Test */}
      <section className="py-12 bg-gradient-to-br from-indigo-600 to-purple-700 text-white text-center">
        <h2 className="text-2xl font-semibold mb-4">Test Your Employability</h2>
        <p className="mb-6">Assess your skills and improve your job readiness with our easy online tests.</p>
        <Link to="/test" className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full hover:bg-gray-100">
          Start Test
        </Link>
      </section>

      {/* Interview Questions */}
      <section className="py-12 bg-indigo-50 text-black">
        <h2 className="text-2xl font-semibold text-center mb-6">Common Job Interview Questions</h2>
        <div className="space-y-4 max-w-4xl mx-auto">
          {[
            { q: "1. Tell me about yourself", a: "A brief summary of your background, skills, and experiences." },
            { q: "2. Why should we hire you?", a: "Highlight your skills and experiences that make you the ideal candidate." },
            { q: "3. Where do you see yourself in 5 years?", a: "Share your long-term goals and how they align with the company’s mission." }
          ].map((item, i) => (
            <details key={i} className="bg-white p-6 rounded-lg shadow-md">
              <summary className="font-medium text-lg">{item.q}</summary>
              <p className="mt-2 text-sm text-gray-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
          {[
            {
              name: "Sarah Ahmed",
              image: "https://plus.unsplash.com/premium_photo-1677368597077-009727e906db?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0",
              review: "This platform helped me land my first internship. The interface is easy and the job updates are timely!"
            },
            {
              name: "Rafiq Hasan",
              image: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
              review: "Excellent platform! I especially liked the employability test that gave me a confidence boost."
            },
            {
              name: "Nusrat Jahan",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0",
              review: "Simple, user-friendly, and effective! I found three job opportunities within a week."
            }
          ].map((user, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <img src={user.image} alt={user.name} className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" />
              <h4 className="font-semibold text-lg">{user.name}</h4>
              <div className="flex justify-center text-yellow-400 my-2">
                {'★★★★★'.split('').map((_, j) => <span key={j}>★</span>)}
              </div>
              <p className="text-sm text-gray-600 mt-2">“{user.review}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-violet-100 text-center">
        <div className="bg-white max-w-2xl mx-auto p-10 shadow-lg border border-gray-200 rounded-2xl">
          <h2 className="text-3xl font-bold mb-3 text-indigo-800">Join Our Newsletter</h2>
          <p className="mb-6 text-gray-600">
            Get the latest job openings, tips, and career advice directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full sm:w-80 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-4">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
