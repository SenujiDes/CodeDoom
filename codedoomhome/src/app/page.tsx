'use client';
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target) && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const navItems = [
    { name: 'DEMO', hasDropdown: true, active: true },
    { name: 'PORTFOLIO', hasDropdown: true },
    { name: 'RTL', hasDropdown: true },
    { name: 'HOME', hasDropdown: true },
    { name: 'PAGES', hasDropdown: true },
    { name: 'SHOP', hasDropdown: false },
  ];

  const socialIcons = [
    { name: 'facebook', icon: 'fab fa-facebook-f' },
    { name: 'twitter', icon: 'fab fa-twitter' },
    { name: 'instagram', icon: 'fab fa-instagram' },
    { name: 'linkedin', icon: 'fab fa-linkedin-in' },
  ];

  return (
    <div className="max-w-full overflow-hidden font-montserrat bg-white text-[#000c19]">
      <Head>
        <title>CodeDoom</title>
        <meta name="description" content="CodeDoom - Premium Web Design and Development Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
      </Head>

      <header
        className={`sticky top-0 flex justify-between items-center px-5 sm:px-8 md:px-12 py-4 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-white/90'
        }`}
      >
        {/* Logo */}
        <motion.div
          className="z-50"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/logo.png"
            alt="CodeDoom"
            width={130}
            height={30}
            priority
            className="w-28 md:w-32 transition-transform duration-300 hover:scale-105"
          />
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          className="hidden md:block"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ul className="flex gap-3 xl:gap-6">
            {navItems.map((item, i) => (
              <motion.li
                key={item.name}
                className="relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
              >
                <a
                  href="#"
                  className={`text-[14px] font-bold tracking-[0.5px] py-2 px-1 relative ${
                    item.active
                      ? 'text-[#000c19]'
                      : 'text-[#000c19]/80 hover:text-[#000c19]'
                  } transition-all duration-300`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <span className="text-[10px] ml-1 inline-block transition-transform group-hover:rotate-180">
                      ▼
                    </span>
                  )}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-[2px] bg-[#80bdff] transition-all duration-300 group-hover:w-full ${
                      item.active ? 'w-full' : ''
                    }`}
                  ></span>
                </a>

                {item.hasDropdown && (
                  <div className="absolute top-full left-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white shadow-lg rounded-md py-2 px-1">
                      {['Option 1', 'Option 2', 'Option 3'].map((opt) => (
                        <a
                          key={opt}
                          href="#"
                          className="block px-4 py-2 text-sm hover:bg-[#80bdff]/10 hover:text-[#80bdff] rounded-md transition-colors"
                        >
                          {opt}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden z-50 cursor-pointer p-2"
          onClick={() => setIsOpen(!isOpen)}
          ref={menuRef}
        >
          <div
            className={`w-6 h-0.5 bg-black mb-1.5 transition-all ${
              isOpen ? 'transform rotate-45 translate-y-2' : ''
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-black mb-1.5 transition-opacity ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-black transition-all ${
              isOpen ? 'transform -rotate-45 -translate-y-2' : ''
            }`}
          />
        </div>

        {/* Mobile Nav */}
        <div
          className={`fixed inset-0 bg-white/98 pt-20 z-40 transition-transform duration-500 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="h-full flex flex-col">
            <ul className="flex-1 flex flex-col justify-center text-center">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  className="my-5"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 50 }}
                  transition={{ duration: 0.4, delay: isOpen ? i * 0.1 : 0 }}
                >
                  <a
                    href="#"
                    className={`text-2xl font-bold tracking-wider transition-colors ${
                      item.active ? 'text-[#80bdff]' : 'hover:text-[#80bdff]'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="flex justify-center gap-5 pb-10">
              {socialIcons.map((s, i) => (
                <motion.a
                  key={s.name}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#80bdff] hover:text-white transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
                  transition={{ duration: 0.3, delay: isOpen ? 0.3 + i * 0.1 : 0 }}
                >
                  <i className={s.icon}></i>
                </motion.a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <main className="relative">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="flex flex-col md:flex-row mx-4 sm:mx-6 md:mx-12 relative min-h-[600px] md:min-h-[650px] pt-6 md:pt-10">
            {/* Hero Text */}
            <motion.div
              className="flex-1 flex flex-col relative mb-10 md:mb-0 z-10"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="pt-4 md:pt-[50px]">
                <h1 className="font-black leading-[0.9]">
                  <motion.span
                    className="block text-[clamp(40px,8vw,120px)] leading-none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    WE ARE
                  </motion.span>
                  <motion.span
                    className="block text-[clamp(40px,8vw,120px)] leading-none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    SKILLED IN
                  </motion.span>

                  {/* Combined Row */}
                  <div className="flex items-center flex-wrap gap-4 mt-[10px]">
                    {/* WEB DESIGN */}
                    <motion.div
                      className="bg-white py-2 px-2 md:py-[10px] md:px-[10px] text-[clamp(16px,2.5vw,32px)] leading-none font-bold border-b-[5px] border-[#80bdff] shadow-sm hover:shadow-md transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <span>WEB<br />DESIGN</span>
                    </motion.div>

                    {/* AND */}
                    <motion.span
                      className="text-[clamp(40px,8vw,120px)] font-black leading-none"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      AND
                    </motion.span>

                    {/* DEVELOPMENT Circle */}
                    <motion.div
                      className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-[#80bdff] rounded-full flex items-center justify-center shadow-[0_5px_20px_rgba(128,189,255,0.6)] cursor-pointer"
                      initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ duration: 0.8, delay: 0.9, type: 'spring' }}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                    >
                      <div className="-rotate-90 font-bold lowercase text-[12px] md:text-[16px] text-white text-center">
                        development
                      </div>
                    </motion.div>
                  </div>
                </h1>

                {/* Subheading text & buttons */}
                <motion.div
                  className="max-w-[600px] mt-auto pb-4 md:pb-[50px]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <p className="text-base md:text-[18px] leading-[1.6] font-medium text-[#000c19]/90">
                    We are a full-service digital agency that builds{' '}
                    <span className="text-[#80bdff] font-semibold">
                      fascinating user experiences
                    </span>
                    . Our team creates exceptional UI design and functionality that transforms
                    your digital presence.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="#"
                      className="px-6 py-3 bg-black text-white font-bold text-sm tracking-wider hover:bg-[#80bdff] transition-all duration-300 rounded shadow-md hover:shadow-lg"
                    >
                      OUR WORK
                    </a>
                    <a
                      href="#"
                      className="px-6 py-3 bg-transparent text-black border-2 border-black font-bold text-sm tracking-wider hover:border-[#80bdff] hover:text-[#80bdff] transition-all duration-300 rounded"
                    >
                      CONTACT US
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Hero Images */}
            <motion.div
              className="flex-1 relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="relative h-full flex justify-center items-center">
                {/* Left Image */}
                <motion.div
                  className="absolute top-0 md:top-20 right-1/2 w-[180px] sm:w-[250px] md:w-[300px] h-[300px] sm:h-[350px] md:h-[400px] rounded-l-[400px] overflow-hidden shadow-md z-[1]"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ x: -10, scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-[2]" />
                  <Image
                    src="/images/is_web_development_good_career.jpg.avif"
                    alt="Web Development"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 180px, (max-width: 1024px) 250px, 300px"
                  />
                </motion.div>

                {/* Right Image */}
                <motion.div
                  className="absolute top-0 md:top-20 left-1/2 w-[180px] sm:w-[250px] md:w-[300px] h-[300px] sm:h-[350px] md:h-[400px] rounded-r-[400px] overflow-hidden shadow-md z-[1] -mt-0 md:-mt-20"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-[2]" />
                  <Image
                    src="/images/website-dev.webp"
                    alt="Website Development"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 180px, (max-width: 1024px) 250px, 300px"
                  />
                </motion.div>
              </div>

              {/* Watch Video Button */}
              <motion.button
                className="absolute bottom-[20px] sm:bottom-[30px] md:bottom-[50px] right-[10px] sm:right-[30px] md:right-[50px] w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] bg-black hover:bg-[#80bdff] rounded-full flex flex-col items-center justify-center text-white z-[3] shadow-lg transition-all duration-300"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" className="mb-1" fill="white">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
                <span className="text-xs md:text-sm font-semibold text-center">
                  WATCH<br />VIDEO
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Side Text */}
          <motion.div
            className="absolute top-[20px] right-[20px] text-right hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {['BUILDING', 'OUTSTANDING', 'DESIGN &', 'DEVELOPMENT'].map((txt, i) => (
              <motion.h2
                key={i}
                className="text-[12px] md:text-[15px] font-medium hover:text-[#80bdff] transition-colors cursor-pointer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                whileHover={{ x: -5 }}
              >
                {txt}
              </motion.h2>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex justify-center mb-5 mt-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center pt-2">
              <motion.div
                className="w-1 h-2 bg-[#80bdff] rounded-full"
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </section>

        {/* Divider */}
        <motion.div
          className="w-full max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-[#80bdff]/30 to-transparent my-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* …the rest of your page… */}

      </main>
    </div>
  );
}
