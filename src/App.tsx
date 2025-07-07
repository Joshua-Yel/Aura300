import React,{ useState, useEffect, useRef } from 'react'
// import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { 
  Phone, 
  MessageCircle, 
  Users, 
  Calendar, 
  ShoppingBag,
  Star,
  Menu,
  X,
  Check
} from 'lucide-react'

import glassAsset from "./assets/glass-asset.png"; 
import emma from "./assets/emma.png";
import yuki from "./assets/yuki.png";
import nami from "./assets/nami.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (sectionRef.current) {
      const rect = (sectionRef.current as HTMLDivElement).getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // const createRipple = (e) => {
  //   const rect = sectionRef.current.getBoundingClientRect();
  //   const x = e.clientX - rect.left;
  //   const y = e.clientY - rect.top;
    
  //   const newRipple = {
  //     id: Date.now(),
  //     x,
  //     y,
  //     size: 0,
  //   };
    
  //   setRipples(prev => [...prev, newRipple]);
    
  //   // Animate the ripple
  //   setTimeout(() => {
  //     setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
  //   }, 1000);
  // };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'pricing', 'about', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const features = [
    {
      icon: Phone,
      title: "Answer Every Call",
      description: "Never miss a client opportunity with 24/7 AI receptionist"
    },
    {
      icon: MessageCircle,
      title: "Smart Messaging",
      description: "Automated WhatsApp, Facebook, and Instagram engagement"
    },
    {
      icon: Users,
      title: "Client Re-engagement",
      description: "Automatically re-engage lapsed clients with personalized outreach"
    },
    {
      icon: Calendar,
      title: "Fill White Space",
      description: "AI-driven appointment booking to maximize your calendar"
    },
    {
      icon: ShoppingBag,
      title: "Upsell Products",
      description: "Intelligent product recommendations to boost revenue"
    },
    {
      icon: Star,
      title: "Marketing Campaigns",
      description: "AI-powered marketing to attract new clients"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Salon Owner",
      content: "Aura 300 filled our white space and grew revenue by 27% in just 60 days!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Hair Stylist",
      content: "The AI receptionist never misses a call and books appointments instantly.",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Beauty Salon Manager",
      content: "Our client re-engagement has increased dramatically since using Aura 300.",
      rating: 5
    }
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "month",
      features: [
        "AI Receptionist",
        "Basic Call Handling",
        "Appointment Booking",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$199",
      period: "month",
      features: [
        "Everything in Starter",
        "Multi-channel Messaging",
        "Client Re-engagement",
        "Marketing Campaigns",
        "Priority Support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "month",
      features: [
        "Everything in Professional",
        "Custom AI Training",
        "Advanced Analytics",
        "Dedicated Support",
        "API Access"
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <h1 className="text-2xl font-bold text-gradient">Aura300</h1>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Salon Growth', 'How it Works', 'Grow your business', 'Why Us', 'Contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-colors duration-200 ${
                    activeSection === section 
                      ? 'text-purple-600' 
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="btn-primary hidden md:block"
            >
              Book Demo
            </motion.button>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['Salon Growth', 'How it Works', 'Grow your business', 'Why Us', 'Contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left px-3 py-2 capitalize font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md"
                  >
                    {section}
                  </button>
                ))}
                <button className="btn-primary w-full mt-4">
                  Book Demo
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
    <section 
      ref={sectionRef}
      id="Salon Growth" 
      className="relative pt-20 pb-16 h-[949px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(225,190,255,1)_0%,rgba(255,255,255,1)_100%)] flex flex-col items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating AI Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-300 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-purple-500 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-30"></div>
      </div>

      {/* Interactive Ripple Effect */}
      {isHovering && (
        <div 
          className="absolute pointer-events-none"
          style={{
            left: mousePosition.x - 50,
            top: mousePosition.y - 50,
            width: '100px',
            height: '100px',
          }}
        >
          <div className="absolute inset-0 rounded-full bg-purple-500 opacity-20 animate-ping"></div>
          <div className="absolute inset-2 rounded-full bg-purple-400 opacity-30 animate-ping animation-delay-75"></div>
          <div className="absolute inset-4 rounded-full bg-purple-300 opacity-40 animate-ping animation-delay-150"></div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 relative group transition-all duration-500 hover:scale-105"
          >
            <span className="relative inline-block">
              The AI Growth Engine for{' '}
              <span className="text-gradient bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Salons
              </span>
              
              {/* Animated underline on hover */}
              <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-700 group-hover:w-full rounded-full shadow-lg shadow-purple-500/50"></div>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto transition-all duration-300 hover:text-gray-700">
            Turn missed calls, lapsed clients, and empty chairs into real revenue — 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="relative group bg-white text-black text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300 overflow-hidden border-2 border-purple-600">
              {/* Button Text */}
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Book your free Demo
              </span>

              {/* Animated gradient background growing from center */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center z-0"></div>

              {/* Optional ripple effect */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping rounded-full z-0"></div>
            </button>

          </div>

          <div className="mt-12">
            <p className="text-gray-500 mb-4 transition-all duration-300 hover:text-gray-600">
              Built By Salon Experts. Trusted By Growing Salons.
            </p>
            <div className="flex justify-center items-center space-x-8 text-gray-400">
              <span className="relative group cursor-pointer transition-all duration-300 hover:text-purple-600">
                ✓ 24/7 AI Support
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></div>
              </span>
              <span className="relative group cursor-pointer transition-all duration-300 hover:text-purple-600">
                ✓ Proven Revenue Growth
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></div>
              </span>
              <span className="relative group cursor-pointer transition-all duration-300 hover:text-purple-600">
                ✓ Salon Industry Experts
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></div>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating AI Circuit Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 Q200,50 400,100 T800,100"
            stroke="url(#circuit-gradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0,200 Q300,150 600,200 T1200,200"
            stroke="url(#circuit-gradient)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '0.5s' }}
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animation-delay-75 {
          animation-delay: 0.075s;
        }
        .animation-delay-150 {
          animation-delay: 0.15s;
        }
        .text-gradient {
          background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>

      {/* Features Section */}
<section id="Grow your business" className="relative py-16 bg-white overflow-hidden">
  {/* Background Decorative Glass Image */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating AI Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-300 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-purple-500 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-30"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
  <svg className="absolute top-0 left-0 w-full h-full opacity-10">
    <defs>
      <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#EC4899" />
      </linearGradient>
    </defs>

    {/* Top Left to Bottom Right */}
    <path
      d="M0,100 Q200,50 400,100 T800,100"
      stroke="url(#circuit-gradient)"
      strokeWidth="2"
      fill="none"
      className="animate-pulse"
    />
    <path
      d="M0,200 Q300,150 600,200 T1200,200"
      stroke="url(#circuit-gradient)"
      strokeWidth="1"
      fill="none"
      className="animate-pulse"
      style={{ animationDelay: '0.5s' }}
    />

    {/* Bottom Left to Top Right (Flipped Curve) */}
    <path
      d="M0,600 Q300,550 600,600 T1200,600"
      stroke="url(#circuit-gradient)"
      strokeWidth="1"
      fill="none"
      className="animate-pulse"
      style={{ animationDelay: '1s' }}
    />
    <path
      d="M0,700 Q250,650 500,700 T1000,700"
      stroke="url(#circuit-gradient)"
      strokeWidth="1"
      fill="none"
      className="animate-pulse"
      style={{ animationDelay: '1.5s' }}
    />

    {/* Diagonal from bottom-left to top-right */}
    <path
      d="M0,800 Q400,400 800,0"
      stroke="url(#circuit-gradient)"
      strokeWidth="1"
      fill="none"
      className="animate-pulse"
      style={{ animationDelay: '2s' }}
    />

    {/* Diagonal from top-left to bottom-right */}
    <path
      d="M0,0 Q400,400 800,800"
      stroke="url(#circuit-gradient)"
      strokeWidth="1"
      fill="none"
      className="animate-pulse"
      style={{ animationDelay: '2.5s' }}
    />
  </svg>
</div>

  <img
    src={glassAsset}
    alt="Glass"
    className="hidden sm:block absolute top-0 left-[-100px] w-94 opacity-90 z-0 pointer-events-none"
  />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Column - Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-regular text-gray-900 mb-6 leading-tight">
          Supercharge your <br /> Salon Growth
        </h2>
        <p className="text-lg text-gray-700 max-w-md">
          Aura 300 isn't just an AI receptionist — it's your <br />
          new business partner, working day and night to:
        </p>
      </motion.div>

      {/* Right Column - Features List */}
      <div className="space-y-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              boxShadow: ' 0 8px 24px rgba(174,110,231,0.4)',
            }}
            className="bg-purple-100/60 backdrop-blur-md border border-purple-200 rounded-[30px] p-6 shadow-[0_0_20px_rgba(168, 85, 247, 0.4) ] transition-all duration-300 ease-in-out cursor-pointer hover:shadow-[0_12px_32px_rgba(174,110,231,0.5)]"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-700">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>


     {/* How It Works Section */}
<section className="py-20 gradient-bg relative overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
  </div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl p-10 md:p-16 border border-white/20 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50 rounded-3xl"></div>
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-purple-700 font-medium text-sm mb-6">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
            AI-Powered Salon Management
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent mb-6">
            How Aura 300 Works
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Meet your AI-powered dream team. Three specialized agents working 24/7 to transform your salon into a client-attracting, revenue-generating powerhouse.
          </p>
        </motion.div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">1</div>
              <span className="text-gray-700 font-medium">Setup & Integration</span>
            </div>
            <div className="w-8 h-px bg-gradient-to-r from-purple-300 to-blue-300"></div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">2</div>
              <span className="text-gray-700 font-medium">AI Agents Activate</span>
            </div>
            <div className="w-8 h-px bg-gradient-to-r from-purple-300 to-blue-300"></div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">3</div>
              <span className="text-gray-700 font-medium">Results & Growth</span>
            </div>
          </div>
        </motion.div>

        {/* Agent Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              src: emma,
              name: "Emma",
              role: "AI Receptionist",
              description: "Never miss a call again. Emma handles appointment bookings, rescheduling, and customer inquiries with human-like conversation.",
              features: ["24/7 availability", "Instant booking", "Multi-language support"],
              color: "from-pink-500 to-rose-500",
              bgColor: "from-pink-50 to-rose-50"
            },
            {
              src: yuki,
              name: "Yuki",
              role: "AI Sales Manager",
              description: "Transform lost clients into loyal customers. Yuki re-engages dormant clients with personalized outreach and irresistible offers.",
              features: ["Client retention", "Personalized campaigns", "Smart follow-ups"],
              color: "from-purple-500 to-indigo-500",
              bgColor: "from-purple-50 to-indigo-50"
            },
            {
              src: nami,
              name: "Nami",
              role: "AI Marketing Expert",
              description: "Attract new clients effortlessly. Nami creates, launches, and optimizes targeted ad campaigns that actually convert.",
              features: ["Smart targeting", "A/B testing", "ROI optimization"],
              color: "from-blue-500 to-cyan-500",
              bgColor: "from-blue-50 to-cyan-50"
            }
          ].map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                {/* Card background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${agent.bgColor} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Agent Avatar */}
                  <div className="relative mb-6">
                    <div className={`w-24 h-24 bg-gradient-to-r ${agent.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg`}>
                      <img
                        src={agent.src}
                        alt={agent.name}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  {/* Agent Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{agent.name}</h3>
                    <p className={`text-transparent bg-gradient-to-r ${agent.color} bg-clip-text font-semibold mb-4`}>
                      {agent.role}
                    </p>
                    <p className="text-gray-600 leading-relaxed">{agent.description}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {agent.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <div className={`w-2 h-2 bg-gradient-to-r ${agent.color} rounded-full mr-3`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

       
      </div>
    </div>
  </div>
</section>



      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              "More clients. More Bookings. More revenue"
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start growing your salon revenue today with our AI-powered solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`card p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500">/{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="btn-primary w-full">
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="Why Choose us" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-purple-700 font-medium text-sm mb-6">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
              Trusted by 500+ Salons
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent mb-6">
              Why Salons Choose Aura 300
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built by salon owners, for salon owners. Experience the difference of AI that truly understands your business.
            </p>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-xl mb-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">The Result? Exponential Growth</h3>
              <p className="text-gray-600 text-lg">Watch your salon transform with measurable results</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { metric: "40%", label: "Increase in Bookings", icon: "📅" },
                { metric: "25%", label: "Client Retention Rate", icon: "💝" },
                { metric: "60%", label: "Marketing ROI Boost", icon: "📈" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    {stat.metric}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Carousel Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden">
              <div className="flex animate-scroll space-x-6 p-[5px]">
                {[
                  {
                    title: "Built for Salons",
                    description: "First AI built exclusively for salons (not a generic bot)",
                    icon: "✨",
                    color: "from-pink-500 to-rose-500",
                    bgColor: "from-pink-50 to-rose-50"
                  },
                  {
                    title: "Industry Expertise",
                    description: "Created by salon owners who understand the industry",
                    icon: "👑",
                    color: "from-purple-500 to-indigo-500",
                    bgColor: "from-purple-50 to-indigo-50"
                  },
                  {
                    title: "Easy Setup",
                    description: "Fast setup — no tech skills needed",
                    icon: "⚡",
                    color: "from-blue-500 to-cyan-500",
                    bgColor: "from-blue-50 to-cyan-50"
                  },
                  {
                    title: "Personalized AI",
                    description: "Customizes to your salon's tone and style",
                    icon: "🎨",
                    color: "from-green-500 to-emerald-500",
                    bgColor: "from-green-50 to-emerald-50"
                  },
                  {
                    title: "Smart Learning",
                    description: "Aura gets better every day with advanced AI",
                    icon: "🧠",
                    color: "from-orange-500 to-red-500",
                    bgColor: "from-orange-50 to-red-50"
                  },
                  {
                    title: "Expert Support",
                    description: "Real experts (not just AI) when you need them",
                    icon: "🤝",
                    color: "from-teal-500 to-blue-500",
                    bgColor: "from-teal-50 to-blue-50"
                  },
                  // Duplicate cards for seamless loop
                  {
                    title: "Built for Salons",
                    description: "First AI built exclusively for salons (not a generic bot)",
                    icon: "✨",
                    color: "from-pink-500 to-rose-500",
                    bgColor: "from-pink-50 to-rose-50"
                  },
                  {
                    title: "Industry Expertise",
                    description: "Created by salon owners who understand the industry",
                    icon: "👑",
                    color: "from-purple-500 to-indigo-500",
                    bgColor: "from-purple-50 to-indigo-50"
                  },
                  {
                    title: "Easy Setup",
                    description: "Fast setup — no tech skills needed",
                    icon: "⚡",
                    color: "from-blue-500 to-cyan-500",
                    bgColor: "from-blue-50 to-cyan-50"
                  }
                ].map((reason, index) => (
                  <div
                    key={index}
                    className="flex-none w-80 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="relative overflow-hidden rounded-2xl">
                      {/* Card background gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${reason.bgColor} opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                      
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className={`w-16 h-16 bg-gradient-to-r ${reason.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                          <span className="text-2xl">{reason.icon}</span>
                        </div>
                        
                        {/* Content */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                        
                        {/* Accent line */}
                        <div className={`w-12 h-1 bg-gradient-to-r ${reason.color} rounded-full mt-6`}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-600 mb-6">
              Join hundreds of salon owners who've already transformed their business
            </p>
            <div className="flex justify-center items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full border-2 border-white flex items-center justify-center text-white font-bold">
                    {i}
                  </div>
                ))}
              </div>
              <span className="text-gray-500">+500 happy salon owners</span>
            </div>
          </motion.div>
        </div>

        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to See the Future?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't let another client go unanswered. Let's grow together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-purple-600" />
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MessageCircle className="w-6 h-6 text-purple-600" />
                  <span className="text-gray-600">info@aura300.ai</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Users className="w-6 h-6 text-purple-600" />
                  <span className="text-gray-600">8 The Green, Ste R, Dover, Delaware 19901</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Your Free Demo</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Salon Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your salon"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Book Demo
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Aura300</h3>
              <p className="text-gray-400">
                The AI Growth Engine for Salons
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Features</li>
                <li>Pricing</li>
                <li>Demo</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Terms & Conditions</li>
                <li>Contact Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Aura 300. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
