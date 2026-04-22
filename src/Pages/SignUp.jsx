import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const courses = [
  {
    title: "Professional Certification in Data Analytics with GenAI",
    institute: "IITM Pravartak, TIH IIT Madras",
    duration: "6 months",
    tags: ["Certification with IIT"],
    banner: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=200&fit=crop",
  },
  {
    title: "Professional Certification in Data Analytics with GenAI",
    institute: "IIT Mandi - TIH (Technology & Innovation Hub)",
    duration: "6 months",
    tags: ["Certification with IIT", "Enrolment closed"],
    banner: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=200&fit=crop",
  },
  {
    title: "Professional Certification in Data Analytics with GenAI",
    institute: "Vishlesan i-hub, IIT Patna",
    duration: "6 months",
    tags: ["Certification with IIT", "Enrolment closed"],
    banner: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=200&fit=crop",
  },
  {
    title: "Full Stack Web Development Bootcamp",
    institute: "Coding Ninjas Institute",
    duration: "6 months",
    tags: ["Certification"],
    banner: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=200&fit=crop",
  },
  {
    title: "Data Science & Machine Learning",
    institute: "Coding Ninjas Institute",
    duration: "4 months",
    tags: ["Certification"],
    banner: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
  },
  {
    title: "DSA & Competitive Programming",
    institute: "Coding Ninjas Institute",
    duration: "3 months",
    tags: ["Certification"],
    banner: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop",
  },
];

const filters = ["All", "Data Analytics", "Generative AI", "Software Development", "Data Science"];

const scrollingStats = [
  { icon: "🎓", color: "bg-purple-500", value: "1.5 Lac+", label: "learners", sub: "cracked dream roles at top tech companies" },
  { icon: "👔", color: "bg-green-500", value: "1,400 Alumni", label: "in MAANG", sub: "& more in 103/111 Unicorns" },
  { icon: "₹", color: "bg-pink-500", value: "1 Cr+", label: "highest CTC", sub: "after completing the course" },
  { icon: "📈", color: "bg-blue-500", value: "128%", label: "average hike", sub: "via our placement cell" },
];

const comparisonFeatures = [
  "Structured + problem solving based",
  "Fastest 1:1 doubt support",
  "Integrated prep platform",
  "Profiles highlighted on Naukri",
];

const testimonials = [
  { name: "Twisam", role: "Full Stack Developer", text: "From optometrist to IT pro, thanks to Coding Ninjas. Their lessons help me excel in projects. CN transformed my journey, giving me clarity and optimization skills!", from: "Coding Ninjas", to: "Cogent e Private Ltd" },
  { name: "Onkar Lapate", role: "SDE-1", text: "Chose Coding Ninjas for structured, high-quality learning. Top-notch mentors, quick TAs, and a supportive community. Best decision ever.", from: "Coding Ninjas", to: "Bombay Softwares" },
  { name: "Durgesh Chaubey", role: "SDE-1", text: "Coding Ninjas exceeded my college experience. After the course, I transitioned from a consultant to an SDE-1. Exceptional faculty, including alumni from Stanford and IIT.", from: "Coding Ninjas", to: "Mastercard" },
];

const mediaItems = [
  { source: "CXOtoday.com", text: "Coding Ninjas Unconventional Approach Upskills 1L Students, Yields 2.2x Salary Increase" },
  { source: "Hindustan Times", text: "Sustainable development through upskilling: India's engineering renaissance" },
  { source: "The Hindu", text: "Women in tech earn 7% more than men on average but men snag the highest salaries" },
  { source: "The Economic Times", text: "Tech grads sign up for 'bootcamps' to be more employable" },
  { source: "The Times of India", text: "Young professionals must embrace continuous upskilling in the age of AI" },
  { source: "moneycontrol", text: "Generative AI courses in hot demand as more Indians flock to upskilling platforms" },
];

const courseResults = {
  "Full Stack Development": {
    title: "Full Stack Development Job Bootcamp",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=200&fit=crop",
    features: ["Job ready AI-infused curriculum", "12+ real world case studies", "95% placement rate"],
  },
  "Data Science": {
    title: "Data Science & ML Bootcamp",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
    features: ["Hands-on ML projects", "Industry mentors", "Interview preparation included"],
  },
  "Machine Learning": {
    title: "Machine Learning with AI Bootcamp",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop",
    features: ["Build real AI models", "Live doubt support", "Certificate on completion"],
  },
  "Data Analytics": {
    title: "Data Analytics Job Bootcamp with GenAI",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=200&fit=crop",
    features: ["Job ready AI-infused curriculum", "12+ real world case studies", "95% placement rate"],
  },
  "Interview Preparation": {
    title: "Interview Prep & DSA Mastery",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=200&fit=crop",
    features: ["500+ DSA problems", "Mock interviews", "Top company placements"],
  },
};

function ScrollStat({ stat }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { setVisible(entry.isIntersecting); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transition: "opacity 0.7s ease, transform 0.7s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(60px)",
      }}
      className="flex flex-col items-center text-center py-16 border-t border-gray-800"
    >
      <div
        style={{ transition: "transform 0.7s ease", transform: visible ? "scale(1)" : "scale(0.5)" }}
        className={`${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl mb-6`}
      >
        {stat.icon}
      </div>
      <h3
        style={{ transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}
        className="text-6xl font-extrabold text-gray-100 mb-2"
      >
        {stat.value} <span className="text-gray-300">{stat.label}</span>
      </h3>
      <p
        style={{ transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
        className="text-gray-500 text-lg mt-2"
      >
        {stat.sub}
      </p>
    </div>
  );
}

export default function SignUp() {
  const [experience, setExperience] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeStory, setActiveStory] = useState("Non tech to tech");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [topic, setTopic] = useState("");
  const navigate = useNavigate();

  const courseResult = courseResults[topic] || courseResults["Data Analytics"];

  const handleFindCourse = () => {
    setSubmitted(true);
    setLoading(true);
    setTimeout(() => setLoading(false), 2500);
  };

  return (
    <div className="min-h-screen bg-gray-950">

      {/* Top Banner */}
      <div className="bg-gradient-to-r from-pink-100 to-blue-100 text-center py-2 text-sm">
        ✨ Become AI ready —{" "}
        <span className="underline font-semibold cursor-pointer">check our AI courses</span>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-4 bg-white border-b sticky top-0 z-50">
        <Link to="/"><h1 className="text-2xl font-bold text-orange-500">coding<span className="text-gray-900">ninjas</span></h1></Link>
        <Link to="/classroom">
          <button className="border border-gray-800 px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-100">My Classroom</button>
        </Link>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-24 py-16 gap-10">
        <div className="text-white max-w-lg">
          <p className="text-green-400 font-semibold mb-3">Restricted by opportunities?</p>
          <h2 className="text-5xl font-bold leading-tight mb-10">Get the tech career you deserve. Faster.</h2>
          <div className="flex flex-col gap-6">
            {[
              { bold: "128% average hike", rest: " via our placement cell" },
              { bold: "1.5 Lac+ learners", rest: " cracked top tech companies" },
              { bold: "1,400+ alumni in MAANG", rest: " & 103 unicorn startups" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 border-b border-gray-700 pb-4 last:border-0">
                <span className="text-green-400 text-2xl">✅</span>
                <p className="text-gray-300"><span className="text-white font-bold">{item.bold}</span>{item.rest}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== FORM / RESULT ===== */}
        {!submitted ? (
          <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl">
            <h3 className="text-xl font-bold mb-6">Let's find the right course for you</h3>
            <p className="text-sm font-medium text-gray-700 mb-3">Experience</p>
            <div className="flex flex-col gap-2 mb-5">
              {["Working Professional - Technical Roles", "Working Professional - Non Technical", "College Student - Final Year", "College Student - 1st to Pre-final Year", "Others"].map((option) => (
                <label key={option} className="flex items-center gap-3 text-sm cursor-pointer">
                  <input type="radio" name="experience" value={option} checked={experience === option} onChange={() => setExperience(option)} className="accent-orange-500" />
                  {option}
                </label>
              ))}
            </div>
            <p className="text-sm font-medium text-gray-700 mb-2">Select topic of interest</p>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 text-sm text-gray-500 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Select your options/choices</option>
              <option value="Full Stack Development">Full Stack Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="Data Analytics">Data Analytics with GenAI</option>
              <option value="Interview Preparation">Interview Preparation</option>
            </select>
            <p className="text-sm font-medium text-gray-700 mb-2">Name</p>
            <input type="text" placeholder="Your name" onChange={(e) => setUserName(e.target.value)} className="w-full border rounded-lg px-4 py-3 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            <p className="text-sm font-medium text-gray-700 mb-2">Phone Number</p>
            <input type="tel" placeholder="Your phone number" className="w-full border rounded-lg px-4 py-3 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            <p className="text-sm font-medium text-gray-700 mb-2">Email</p>
            <input type="email" placeholder="Your email" className="w-full border rounded-lg px-4 py-3 text-sm mb-6 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            <button onClick={handleFindCourse} className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition">Find your course</button>
            <p className="text-xs text-gray-400 mt-3 text-center">I authorise Coding Ninjas to contact me with course updates & offers via Email/SMS/WhatsApp/Call.</p>
          </div>

        ) : loading ? (
          /* Loading Screen */
          <div className="bg-white rounded-2xl w-full max-w-md shadow-xl flex flex-col items-center justify-center" style={{ minHeight: "500px" }}>
            <div className="relative mb-6">
              <div className="w-16 h-16 rounded-full border-4 border-orange-100 border-t-orange-500 animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center text-orange-400 text-xl">🔍</div>
            </div>
            <p className="text-gray-400 text-sm text-center px-8">Just a moment, we're finding the right course for you...</p>
          </div>

        ) : (
          /* Result Card */
          <div className="bg-white rounded-2xl w-full max-w-md shadow-xl overflow-hidden border-2 border-yellow-400" style={{ minHeight: "500px" }}>
            <div className="px-6 pt-5">
              <button
                onClick={() => { setSubmitted(false); setLoading(false); }}
                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 text-lg"
              >
                ‹
              </button>
            </div>
            <div className="px-6 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Hey {userName || "there"},</h3>
              <p className="text-gray-500 text-sm mb-5">We've found just the course for you!</p>
              <div className="relative rounded-xl overflow-hidden mb-5">
                <img src={courseResult.image} alt={courseResult.title} className="w-full h-44 object-cover" />
                <div className="absolute bottom-3 left-3 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">C</div>
              </div>
              <span className="inline-block border border-gray-300 text-gray-600 text-xs px-3 py-1 rounded-full mb-3">Recommended</span>
              <h4 className="font-bold text-gray-900 text-lg mb-4">{courseResult.title}</h4>
              <div className="flex flex-col gap-2 mb-6">
                {courseResult.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-green-500">✅</span> {f}
                  </div>
                ))}
              </div>
              <button onClick={() => navigate("/courses")} className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 mb-4">
                Visit course page
              </button>
              <p className="text-center text-sm">
                <span className="text-orange-500 font-semibold cursor-pointer hover:underline">Book a free webinar</span>
                <span className="text-gray-400"> to learn more</span>
              </p>
            </div>
          </div>
        )}
      </section>

      {/* ===== SCROLLING STATS ===== */}
      <section className="bg-gray-950 text-white py-6 border-t border-gray-800">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-16 px-10">10 years of transforming tech careers</h2>
        {scrollingStats.map((stat, i) => (<ScrollStat key={i} stat={stat} />))}
        <div className="flex justify-center py-10">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 flex items-center gap-2">Explore offerings ⬆</button>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="bg-gray-950 text-white px-10 md:px-24 py-20 relative">
        <h2 className="text-7xl font-extrabold text-transparent text-center mb-16" style={{ WebkitTextStroke: "1px #374151" }}>WHY US</h2>
        <div className="flex flex-col md:flex-row items-center gap-12 justify-center">
          <div className="bg-gray-800 rounded-2xl p-6 w-80 relative">
            <div className="absolute top-3 right-3 bg-gray-700 rounded-full px-3 py-1 text-xs">🔊</div>
            <div className="bg-gray-600 h-48 rounded-xl mb-4 flex items-center justify-center text-gray-400">
              <span className="text-5xl">👨‍💼</span>
            </div>
            <p className="text-sm text-gray-300 mb-3">with one of our 500+ teaching assistants.</p>
            <p className="text-orange-400 font-semibold">Ankush Singla</p>
            <p className="text-gray-400 text-xs">Co-Founder of Coding Ninjas | Mentor</p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { icon: "👥", color: "bg-green-800", text: "Fastest 1:1 doubt support" },
              { icon: "🎓", color: "bg-purple-800", text: "Stanford/IIT/MAANG faculty" },
              { icon: "💼", color: "bg-orange-800", text: "Placement assistance" },
            ].map((item, i) => (
              <div key={i} className={`${item.color} flex items-center gap-4 px-6 py-4 rounded-xl w-80`}>
                <span className="text-2xl">{item.icon}</span>
                <span className="font-semibold text-white">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPARISON TABLE ===== */}
      <section className="bg-gray-950 text-white px-10 md:px-24 py-16">
        <p className="text-center text-blue-400 font-semibold mb-8">The Coding Ninjas advantage</p>
        <div className="bg-gray-900 rounded-2xl p-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-4 text-center mb-6">
            <div></div>
            <div className="flex justify-center"><div className="bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center font-bold">C</div></div>
            <div className="text-gray-400 text-sm font-medium pt-2">Free resources</div>
            <div className="text-gray-400 text-sm font-medium pt-2">Other courses</div>
          </div>
          {comparisonFeatures.map((feature, i) => (
            <div key={i} className="grid grid-cols-4 text-center py-4 border-t border-gray-800 items-center">
              <div className="text-left text-gray-300 text-sm">{feature}</div>
              <div className="text-green-400 text-xl">✅</div>
              <div className="text-red-400 text-xl">✕</div>
              <div className="text-gray-400 text-xl">{i === 0 ? "✓" : "✕"}</div>
            </div>
          ))}
          <div className="mt-8 border-t border-gray-700 pt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-orange-400">codingninja</span>
              <span className="text-xs text-orange-400">Your dream role, faster and with confidence! ⚡</span>
            </div>
            <div className="w-full bg-gradient-to-r from-pink-500 to-orange-400 h-1 rounded-full mb-4"></div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Others</span>
              <span className="text-xs text-gray-500">Average role, under-confident</span>
            </div>
            <div className="w-3/4 bg-gray-600 h-1 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* ===== PLACEMENT COMPANIES ===== */}
      <section className="bg-white px-10 md:px-24 py-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-lg font-semibold text-gray-800">Our Ninjas at top tech companies</h3>
          <span className="text-orange-500 text-sm cursor-pointer hover:underline">⬇ Download placement report</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {["Microsoft", "Persistent", "media.net", "PayPal", "Google"].map((company, i) => (
            <div key={i} className="border rounded-xl p-4 flex flex-col items-center gap-2 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-600">{company[0]}</div>
              <p className="font-semibold text-sm text-gray-800">{company}</p>
              <p className="text-xs text-gray-400">CS/IT</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-gray-950 text-white px-10 md:px-24 py-16">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-white text-orange-500 rounded-lg p-2 text-xl">❝</div>
            <h3 className="text-xl font-semibold">Stories from people like you</h3>
          </div>
          <span className="text-orange-400 text-sm cursor-pointer hover:underline">Read all success stories ↗</span>
        </div>
        <div className="flex gap-3 mb-8 flex-wrap">
          {["Non tech to tech", "Service to product", "Tier 2/3 colleges", "Job Bootcamp", "Upskilling Courses"].map((tab) => (
            <button key={tab} onClick={() => setActiveStory(tab)} className={`px-4 py-2 rounded-full text-sm border transition ${activeStory === tab ? "bg-white text-gray-900 border-white" : "border-gray-600 text-gray-300 hover:border-gray-400"}`}>{tab}</button>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-900 rounded-2xl p-6 flex flex-col gap-4">
              <div className="text-gray-600 text-3xl">❝❝</div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold text-lg mb-2">{t.name[0]}</div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-gray-400 text-sm">{t.role}</p>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{t.text}</p>
              <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-700 pt-4 mt-auto">
                <span>{t.from}</span><span>»»</span><span>{t.to}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 flex items-center gap-2">Explore offerings ⬆</button>
        </div>
      </section>

      {/* ===== TRUSTED BY LEARNERS ===== */}
      <section className="bg-gray-900 text-white px-10 md:px-24 py-12 text-center">
        <h3 className="text-xl font-bold mb-2">Trusted by learners</h3>
        <p className="text-gray-400 text-sm mb-8">1,00,000+ Coding Ninjas alumni from 1,100+ companies & 4,400+ colleges working in top product companies</p>
        <div className="flex justify-center gap-12 flex-wrap">
          {[{ icon: "📘", rating: "4.9", reviews: "700+ reviews" }, { icon: "🔍", rating: "4.7", reviews: "2300+ reviews" }, { icon: "⭐", rating: "4.8", reviews: "Course rating" }].map((r, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-2xl">{r.icon}</span>
              <div className="text-left">
                <p className="font-bold">{r.rating} ⭐</p>
                <p className="text-gray-400 text-xs">{r.reviews}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 3 STAGE LEARNING MODEL ===== */}
      <section className="bg-white px-10 md:px-24 py-16">
        <p className="text-gray-700 font-semibold mb-8 flex items-center gap-2"><span>🚀</span> A 3-stage learning model to turn you into a Coding Ninja</p>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            {[
              { title: "Learn", desc: "Experience seamless learning with problem solving modules, leaderboard and awards.", active: true },
              { title: "Excel", desc: "Track your skill level and make meaningful progress for you to grow", active: false },
              { title: "Standout", desc: "Standout to recruiters, showcase ratings, get feedback and interview insights.", active: false },
            ].map((stage, i) => (
              <div key={i} className={`border-l-4 pl-4 ${stage.active ? "border-orange-500" : "border-gray-200"}`}>
                <p className={`font-semibold text-lg ${stage.active ? "text-gray-900" : "text-gray-400"}`}>{stage.title}</p>
                <p className="text-gray-500 text-sm mt-1">{stage.desc}</p>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2 bg-gray-50 rounded-2xl p-6 text-sm text-gray-600">
            <div className="flex gap-2 mb-4 flex-wrap">
              {["Java", "Programming fundamentals", "Data structures & algorithms"].map((t, i) => (
                <span key={i} className={`px-3 py-1 rounded-full text-xs ${i === 1 ? "bg-orange-100 text-orange-600 font-semibold" : "bg-gray-200 text-gray-600"}`}>{t}</span>
              ))}
            </div>
            {["Loops", "Binary indexed tree", "Hash table", "Linked list", "Segment trees"].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <span>{item} — 7 problems solved</span>
                <div className="w-4 h-4 rounded-full bg-orange-400"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DOUBT SUPPORT ===== */}
      <section className="bg-gray-950 text-white px-10 md:px-24 py-16">
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-white text-red-500 rounded-lg p-2">❤</div>
          <span className="text-gray-300 font-medium">Always available when you get stuck</span>
        </div>
        <div className="cursor-default">
          <p className="text-4xl text-gray-600 mb-6 transition-colors duration-500 hover:text-orange-300">
            Resolve doubts any time through chat, voice notes or calling.
          </p>
        </div>
        <div className="cursor-default">
          <h2 className="text-5xl font-bold text-orange-400 mb-4 transition-all duration-500 hover:text-orange-300 hover:scale-105 origin-left inline-block">
            500+ dedicated Teaching Assistants to resolve your doubts quickly
          </h2>
        </div>
        <div className="cursor-default">
          <p className="text-4xl text-gray-600 transition-colors duration-500 hover:text-orange-300">
            5/5 rating for 90% doubt resolutions
          </p>
        </div>
      </section>

      {/* ===== MENTORSHIP SESSIONS ===== */}
      <section className="bg-white px-10 md:px-24 py-16">
        <div className="flex items-center gap-3 mb-2">
          <span>👥</span>
          <h3 className="text-xl font-semibold">1:1 Mentorship sessions</h3>
        </div>
        <p className="text-gray-500 text-sm mb-8">Personalised guidance to prepare you for your interview needs</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Mock interview", desc1: "Nail coding assessments and technical challenges", desc2: "Gain insights into problem-solving and algorithmic thinking", bg: "bg-orange-50" },
            { title: "Profile review", desc1: "Get your profile & resume reviewed by industry leaders", desc2: "Focus on different aspects of your job search", bg: "bg-teal-50" },
            { title: "Project guidance", desc1: "Career counselling with industry experts", desc2: "Get assistance on how to build real time projects", bg: "bg-pink-50" },
          ].map((item, i) => (
            <div key={i} className="border rounded-2xl overflow-hidden hover:shadow-lg transition">
              <div className={`${item.bg} h-36 flex items-center justify-center text-4xl`}>💻</div>
              <div className="p-5">
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm mb-1">{item.desc1}</p>
                <p className="text-gray-500 text-sm">{item.desc2}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== MEDIA SPOTLIGHT ===== */}
      <section className="bg-white px-10 md:px-24 py-16">
        <div className="flex items-center gap-2 mb-8">
          <span>⭐</span>
          <h3 className="text-lg font-semibold">Coding Ninjas in spotlight</h3>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="bg-red-50 rounded-2xl p-8 flex flex-col items-center justify-center w-full md:w-80 text-center">
            <p className="text-red-600 font-bold text-2xl mb-2">TEDx</p>
            <p className="text-gray-700 font-medium text-sm">Demand, Supply, Run! | Ankush Singla | TEDxBVCOE</p>
            <button className="mt-4 bg-white border px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-50">▶ Play video</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-1">
            {mediaItems.map((item, i) => (
              <div key={i} className="border rounded-xl p-4 hover:shadow-md transition cursor-pointer">
                <p className="font-bold text-gray-800 text-sm mb-2">{item.source}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NSDC PARTNERSHIP ===== */}
      <section className="bg-white px-10 md:px-24 py-10">
        <div className="border rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="bg-blue-50 rounded-xl p-6 flex items-center justify-center w-48 h-36 text-center text-blue-800 font-bold text-sm">
            NSDC<br />Certificate of Partnership
          </div>
          <p className="text-gray-700 text-lg font-medium max-w-lg">
            We are an approved training partner of NSDC under their scheme for market led fee-based services
          </p>
        </div>
      </section>

      {/* ===== COURSES SECTION ===== */}
      <section className="bg-white px-10 md:px-24 py-16">
        <h2 className="text-center text-7xl font-extrabold text-gray-200 tracking-widest uppercase mb-10">Our Courses</h2>
        <h3 className="text-lg font-semibold text-gray-800 mb-5">For working professionals</h3>
        <div className="flex gap-3 flex-wrap mb-10">
          {filters.map((f) => (
            <button key={f} onClick={() => setActiveFilter(f)} className={`px-5 py-2 rounded-full border text-sm font-medium transition ${activeFilter === f ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-700 border-gray-300 hover:border-gray-500"}`}>{f}</button>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <div key={i} className="border rounded-2xl overflow-hidden hover:shadow-xl transition cursor-pointer">
              <img src={course.banner} alt={course.title} className="w-full h-44 object-cover" />
              <div className="p-5">
                <h4 className="font-semibold text-gray-900 mb-1 text-sm leading-snug">{course.title}</h4>
                <p className="text-gray-500 text-xs mb-3">{course.institute}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.tags.map((tag) => (
                    <span key={tag} className={`text-xs px-3 py-1 rounded-full font-medium ${tag === "Enrolment closed" ? "bg-orange-100 text-orange-600" : "bg-gray-100 text-gray-700"}`}>{tag}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-gray-400 text-xs border-t pt-3">
                  <div className="flex gap-2"><span>⚡</span><span>🔷</span><span>📊</span></div>
                  <span className="font-medium text-gray-600">{course.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-500 text-center py-6 text-sm border-t border-gray-800">
        © 2026 Coding Ninjas Clone. Built with React & Tailwind.
      </footer>

    </div>
  );
}