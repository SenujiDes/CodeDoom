// 'use client';
// import Head from 'next/head';
// import Image from 'next/image';
// import { useState, useEffect } from 'react';

// export default function Home() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
  
//   // Handle scroll effect for header
//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 10;
//       if (isScrolled !== scrolled) {
//         setScrolled(isScrolled);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [scrolled]);

//   // Close mobile menu when resizing to desktop
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024 && isOpen) {
//         setIsOpen(false);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [isOpen]);

//   return (
//     <div className="max-w-full overflow-x-hidden font-montserrat bg-white text-[#000c19]">
//       <Head>
//         <title>CodeDoom</title>
//         <meta name="description" content="CodeDoom - Web Design and Development Agency" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//         <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
//       </Head>

//       <header 
//         className={`sticky top-0 flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-[50px] py-4 z-50 transition-all duration-300 ${
//           scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-white/90'
//         }`}
//       >
//         <div className="z-[101] transition-transform duration-300 hover:scale-105">
//           <Image src="/logo.png" alt="CodeDoom" width={130} height={30} priority className="w-24 md:w-32" />
//         </div>
        
//         <nav className="hidden lg:block">
//           <ul className="flex gap-3 xl:gap-6">
//             {['DEMO', 'PORTFOLIO', 'RTL', 'HOME', 'PAGES', 'SHOP'].map((item) => (
//               <li key={item} className="relative group">
//                 <a 
//                   href="#" 
//                   className={`text-[14px] font-bold tracking-[0.5px] py-2 relative ${
//                     item === 'DEMO' ? 'after:w-full text-[#000c19]' : 'after:w-0 hover:text-[#000c19]'
//                   } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#80bdff] after:transition-all group-hover:after:w-full`}
//                 >
//                   {item} 
//                   {item !== 'SHOP' && (
//                     <span className="text-[10px] ml-1 inline-block transition-transform group-hover:rotate-180">▼</span>
//                   )}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         <div 
//           className="lg:hidden z-[101] cursor-pointer p-2" 
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all ${isOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
//           <div className={`w-6 h-0.5 bg-black mb-1.5 transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
//           <div className={`w-6 h-0.5 bg-black transition-all ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
//         </div>

//         {isOpen && (
//           <nav className="fixed inset-0 bg-white/98 pt-[100px] lg:hidden z-[99]">
//             <ul className="text-center">
//               {['DEMO', 'PORTFOLIO', 'RTL', 'HOME', 'PAGES', 'SHOP'].map((item) => (
//                 <li key={item} className="my-5">
//                   <a 
//                     href="#" 
//                     className={`text-xl md:text-2xl font-bold tracking-wider transition-colors hover:text-[#80bdff] ${
//                       item === 'DEMO' ? 'text-[#80bdff]' : ''
//                     }`}
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         )}
//       </header>

//       <main className="relative">
//         <div className="flex flex-col lg:flex-row mx-4 sm:mx-6 md:mx-10 lg:mx-[50px] relative min-h-[500px] md:min-h-[650px] pt-6 md:pt-10">
//           <div className="flex-1 flex flex-col relative mb-10 lg:mb-0 z-10">
//             <div className="pt-4 md:pt-[50px]">
//               <h1 className="font-black leading-[0.9]">
//                 <span className="block text-[clamp(40px,8vw,120px)] leading-none">WE ARE</span>
//                 <span className="block text-[clamp(40px,8vw,120px)] leading-none">SKILLED IN</span>
//                 <div className="flex items-center flex-wrap">
//                   <div className="bg-white py-2 px-2 md:py-[10px] md:px-[10px] mr-3 md:mr-5 text-[clamp(16px,2.5vw,32px)] leading-none font-bold border-b-[5px] border-[#80bdff] mt-[10px] shadow-sm hover:shadow-md transition-shadow">
//                     <span>WEB<br />DESIGN</span>
//                   </div>
//                   <span className="text-[clamp(40px,8vw,120px)]">AND</span>
//                 </div>
//               </h1>
              
//               <div className="lg:absolute -bottom-[-50px] sm:-bottom-[-120px] lg:-bottom-[-180px] right-0 lg:right-[90px] z-[5] mt-6 lg:mt-0">
//                 <div className="relative w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-[#80bdff] rounded-full flex items-center justify-center shadow-[0_5px_15px_rgba(128,189,255,0.5)] transition-transform duration-300 hover:scale-110 cursor-pointer">
//                   <div className="-rotate-90 font-bold lowercase text-base md:text-[23px] text-white">
//                     <span>development</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="max-w-[500px] mt-auto pb-4 md:pb-[50px]">
//               <p className="text-base md:text-[18px] leading-[1.6] font-medium text-[#000c19]">
//                 We are a full-service digital agency that builds fascinating user experiences. Our team creates exceptional UI design and functionality.
//               </p>
//             </div>
//           </div>
          
//           <div className="flex-1 relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
//             <div className="relative h-full flex justify-center items-center">
//               <div className="absolute top-0 md:top-20 right-1/2 w-[180px] sm:w-[220px] md:w-[300px] h-[250px] sm:h-[320px] md:h-[400px] rounded-l-[400px] overflow-hidden bg-red-500/50 shadow-md z-[1] transition-all duration-500 hover:-translate-x-[10px] hover:shadow-lg mt-0 md:mt-20">
//                 <Image 
//                   src="/images/is_web_development_good_career.jpg.avif" 
//                   alt="Web Development" 
//                   fill 
//                   className="object-cover"
//                   sizes="(max-width: 768px) 180px, (max-width: 1024px) 220px, 300px"
//                 />
//               </div>
              
//               <div className="absolute top-0 md:top-20 left-1/2 w-[180px] sm:w-[220px] md:w-[300px] h-[250px] sm:h-[320px] md:h-[400px] rounded-r-[400px] overflow-hidden shadow-md z-[1] transition-all duration-500 hover:translate-x-[10px] hover:shadow-lg -mt-0 md:-mt-20">
//                 <Image 
//                   src="/images/website-dev.webp" 
//                   alt="Website Development" 
//                   fill 
//                   className="object-cover" 
//                   sizes="(max-width: 768px) 180px, (max-width: 1024px) 220px, 300px"
//                 />
//               </div>
//             </div>
            
//             <button className="absolute bottom-[10px] sm:bottom-[30px] md:bottom-[50px] right-[10px] sm:right-[30px] md:right-[50px] w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] bg-black hover:bg-[#80bdff] rounded-full flex flex-col items-center justify-center text-white z-[3] shadow-lg transition-all duration-300 hover:scale-110">
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="none" className="mb-1">
//                 <polygon points="5,3 19,12 5,21"></polygon>
//               </svg>
//               <span className="text-xs md:text-sm font-semibold text-center">WATCH<br />VIDEO</span>
//             </button>
//           </div>
//         </div>
        
//         <div className="absolute top-[20px] right-[20px] text-right hidden lg:block">
//           {['BUILDING', 'OUTSTANDING', 'DESIGN &', 'DEVELOPMENT'].map((text, index) => (
//             <h2 
//               key={text} 
//               className="text-[12px] md:text-[15px] font-medium hover:text-[#80bdff] transition-colors cursor-pointer"
//               style={{
//                 transitionDelay: `${index * 100}ms`
//               }}
//             >
//               {text}
//             </h2>
//           ))}
//         </div>

//         {/* Social Media Icons - Added Feature */}
//         <div className="hidden md:flex flex-col gap-4 fixed left-[20px] bottom-[20px] z-40">
//           {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
//             <div 
//               key={social} 
//               className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer hover:bg-[#80bdff] hover:text-white transition-all duration-300"
//             >
//               {/* You can replace these with actual social media icons */}
//               <span className="text-xs font-bold">{social.charAt(0).toUpperCase()}</span>
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* Added a subtle divider */}
//       <div className="w-full max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-[#80bdff]/30 to-transparent my-10"></div>

//       {/* Added a section teaser */}
//       <div className="text-center px-4 py-10">
//         <h2 className="text-xl md:text-3xl font-bold mb-2">Ready to Start Your <span className="text-[#80bdff]">Digital Journey</span>?</h2>
//         <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto mb-6">
//           Let our expert team transform your ideas into beautiful, functional digital solutions.
//         </p>
//         <button className="px-6 py-3 bg-black text-white font-bold text-sm tracking-wider hover:bg-[#80bdff] transition-colors duration-300 rounded">
//           GET STARTED
//         </button>
//       </div>

//       {/* Added animated scroll indicator */}
//       <div className="hidden md:flex justify-center mb-10">
//         <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center pt-2">
//           <div className="w-1 h-2 bg-[#80bdff] animate-bounce rounded-full"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef(null);
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Navigation items with dropdown states
  const navItems = [
    { name: 'DEMO', hasDropdown: true, active: true },
    { name: 'PORTFOLIO', hasDropdown: true },
    { name: 'RTL', hasDropdown: true },
    { name: 'HOME', hasDropdown: true },
    { name: 'PAGES', hasDropdown: true },
    { name: 'SHOP', hasDropdown: false }
  ];

  // Social media icons
  const socialIcons = [
    { name: 'facebook', icon: 'fab fa-facebook-f' },
    { name: 'twitter', icon: 'fab fa-twitter' },
    { name: 'instagram', icon: 'fab fa-instagram' },
    { name: 'linkedin', icon: 'fab fa-linkedin-in' }
  ];

  return (
    <div className="max-w-full overflow-hidden font-montserrat bg-white text-[#000c19]">
      <Head>
        <title>CodeDoom</title>
        <meta name="description" content="CodeDoom - Premium Web Design and Development Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
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
        
        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:block"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ul className="flex gap-3 xl:gap-6">
            {navItems.map((item, index) => (
              <motion.li 
                key={item.name} 
                className="relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <a 
                  href="#" 
                  className={`text-[14px] font-bold tracking-[0.5px] py-2 px-1 relative ${
                    item.active ? 'text-[#000c19]' : 'text-[#000c19]/80 hover:text-[#000c19]'
                  } transition-all duration-300`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <span className="text-[10px] ml-1 inline-block transition-transform group-hover:rotate-180">▼</span>
                  )}
                  <span className={`absolute bottom-0 left-0 w-0 h-[2px] bg-[#80bdff] transition-all duration-300 group-hover:w-full ${
                    item.active ? 'w-full' : 'w-0'
                  }`}></span>
                </a>
                
                {/* Desktop Dropdown - Can be expanded */}
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white shadow-lg rounded-md py-2 px-1">
                      {['Option 1', 'Option 2', 'Option 3'].map((option) => (
                        <a key={option} href="#" className="block px-4 py-2 text-sm hover:bg-[#80bdff]/10 hover:text-[#80bdff] transition-colors rounded-md">
                          {option}
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
          <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all ${isOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-black mb-1.5 transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`w-6 h-0.5 bg-black transition-all ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-white/98 pt-20 z-40 transition-transform duration-500 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="h-full flex flex-col">
            <ul className="text-center flex-1 flex flex-col justify-center">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.name} 
                  className="my-5"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 50 }}
                  transition={{ duration: 0.4, delay: isOpen ? index * 0.1 : 0 }}
                >
                  <a 
                    href="#" 
                    className={`text-2xl font-bold tracking-wider transition-colors ${
                      item.active ? 'text-[#80bdff]' : 'hover:text-[#80bdff]'
                    }`}
                    onClick={() => setActiveSection(item.name.toLowerCase())}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            
            {/* Mobile Social Icons */}
            <div className="flex justify-center gap-5 pb-10">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#80bdff] hover:text-white transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
                  transition={{ duration: 0.3, delay: isOpen ? 0.3 + (index * 0.1) : 0 }}
                >
                  <i className={social.icon}></i>
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
            {/* Hero Text Content */}
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
                  <div className="flex items-center flex-wrap">
                    <motion.div 
                      className="bg-white py-2 px-2 md:py-[10px] md:px-[10px] mr-3 md:mr-5 text-[clamp(16px,2.5vw,32px)] leading-none font-bold border-b-[5px] border-[#80bdff] mt-[10px] shadow-sm hover:shadow-md transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <span>WEB<br />DESIGN</span>
                    </motion.div>
                    <motion.span 
                      className="text-[clamp(40px,8vw,120px)]"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      AND
                    </motion.span>
                  </div>
                </h1>
                
                <motion.div 
                  className="absolute bottom-[-20px] sm:bottom-[-120px] md:bottom-[-180px] right-0 md:right-[90px] z-[5] mt-6 md:mt-0"
                  initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.9, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <div className="relative w-[-50px] h-[-50px] md:w-[150px] md:h-[150px] bg-[#80bdff] rounded-full flex items-center justify-center shadow-[0_5px_20px_rgba(128,189,255,0.6)] cursor-pointer">
                    <div className="-rotate-90 font-bold lowercase text-base md:text-[23px] text-white">
                      <span>development</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="max-w-[600px] mt-auto pb-4 md:pb-[50px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="text-base md:text-[18px] leading-[1.6] font-medium text-[#000c19]/90">
                  We are a full-service digital agency that builds <span className="text-[#80bdff] font-semibold">fascinating user experiences</span>. Our team creates exceptional UI design and functionality that transforms your digital presence.
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
            </motion.div>
            
            {/* Hero Images */}
            <motion.div 
              className="flex-1 relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="relative h-full flex justify-center items-center">
                <motion.div 
                  className="absolute top-0 md:top-20 right-1/2 w-[180px] sm:w-[250px] md:w-[300px] h-[300px] sm:h-[350px] md:h-[400px] rounded-l-[400px] overflow-hidden shadow-md z-[1] mt-0 md:mt-20"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ x: -10, scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-[2]"></div>
                  <Image 
                    src="/images/is_web_development_good_career.jpg.avif" 
                    alt="Web Development" 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 180px, (max-width: 1024px) 250px, 300px"
                  />
                </motion.div>
                
                <motion.div 
                  className="absolute top-0 md:top-20 left-1/2 w-[180px] sm:w-[250px] md:w-[300px] h-[300px] sm:h-[350px] md:h-[400px] rounded-r-[400px] overflow-hidden shadow-md z-[1] -mt-0 md:-mt-20"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  whileHover={{ x: 10, scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-[2]"></div>
                  <Image 
                    src="/images/website-dev.webp" 
                    alt="Website Development" 
                    fill 
                    className="object-cover" 
                    sizes="(max-width: 768px) 180px, (max-width: 1024px) 250px, 300px"
                  />
                </motion.div>
              </div>
              
              <motion.button 
                className="absolute bottom-[20px] sm:bottom-[30px] md:bottom-[50px] right-[10px] sm:right-[30px] md:right-[50px] w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] bg-black hover:bg-[#80bdff] rounded-full flex flex-col items-center justify-center text-white z-[3] shadow-lg transition-all duration-300"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="none" className="mb-1">
                  <polygon points="5,3 19,12 5,21"></polygon>
                </svg>
                <span className="text-xs md:text-sm font-semibold text-center">WATCH<br />VIDEO</span>
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
            {['BUILDING', 'OUTSTANDING', 'DESIGN &', 'DEVELOPMENT'].map((text, index) => (
              <motion.h2 
                key={text} 
                className="text-[12px] md:text-[15px] font-medium hover:text-[#80bdff] transition-colors cursor-pointer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                whileHover={{ x: -5 }}
              >
                {text}
              </motion.h2>
            ))}
          </motion.div>

          {/* Social Media Icons */}
          <motion.div 
            className="hidden md:flex flex-col gap-4 fixed left-[20px] bottom-[20px] z-40"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {socialIcons.map((social, index) => (
              <motion.a
                key={social.name}
                href="#"
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer hover:bg-[#80bdff] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
              >
                <i className={social.icon}></i>
              </motion.a>
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
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
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

        {/* Call To Action Section */}
        <motion.section 
          className="text-center px-4 py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-2xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Start Your <span className="text-[#80bdff]">Digital Journey</span>?
          </motion.h2>
          
          <motion.p 
            className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let our expert team transform your ideas into beautiful, functional digital solutions 
            that elevate your brand and drive results.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button 
              className="px-8 py-4 bg-black text-white font-bold text-sm tracking-wider hover:bg-[#80bdff] transition-colors duration-300 rounded shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GET STARTED
            </motion.button>
            
            <motion.button 
              className="px-8 py-4 bg-transparent text-black border-2 border-black font-bold text-sm tracking-wider hover:border-[#80bdff] hover:text-[#80bdff] transition-all duration-300 rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              OUR PORTFOLIO
            </motion.button>
          </motion.div>
          
          {/* Service Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
            {[
              { icon: 'fa-code', title: 'Web Development', desc: 'Custom websites with clean code and stunning functionality.' },
              { icon: 'fa-pen-nib', title: 'UI/UX Design', desc: 'Intuitive interfaces that captivate your audience.' },
              { icon: 'fa-mobile-screen', title: 'Mobile Apps', desc: 'Native and cross-platform applications for all devices.' }
            ].map((service, index) => (
              <motion.div 
                key={service.title}
                className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.2) }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 rounded-full bg-[#80bdff]/10 flex items-center justify-center text-[#80bdff] mb-4 mx-auto group-hover:bg-[#80bdff] group-hover:text-white transition-all">
                  <i className={`fas ${service.icon} text-xl`}></i>
                </div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Floating Quote Button */}
        <motion.a
          href="#"
          className="fixed bottom-6 right-6 z-40 bg-[#80bdff] w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, type: "spring" }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fas fa-comments text-2xl"></i>
        </motion.a>
      </main>
    </div>
  );
}