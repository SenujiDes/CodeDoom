'use client';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-full overflow-x-hidden font-montserrat bg-white text-[#000c19]">
      <Head>
        <title>CodeDoom</title>
        <meta name="description" content="CodeDoom" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="sticky top-0 flex justify-between items-center px-[50px] md:px-5 bg-white/95 shadow-sm z-50">
        <div className="z-[101]">
          <Image src="/logo.png" alt="CodeDoom" width={130} height={30} />
        </div>
        
        <nav className="hidden lg:block">
          <ul className="flex gap-[15px]">
            <li><a href="#" className="text-[14px] font-bold tracking-[0.5px] py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#80bdff]">DEMO</a></li>
            {['PORTFOLIO', 'RTL', 'HOME', 'PAGES', 'SHOP'].map((item) => (
              <li key={item} className="relative">
                <a href="#" className="text-[14px] font-bold tracking-[0.5px] py-2 relative hover:text-[#000c19] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#80bdff] after:transition-all hover:after:w-full">
                  {item} {item !== 'SHOP' && <span className="text-[12px] ml-1 transition-transform group-hover:rotate-180">↓</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </div>

        {isOpen && (
          <nav className="fixed inset-0 bg-white/98 pt-[100px] lg:hidden z-[99] animate-fadeIn">
            <ul className="text-center">
              {['DEMO', 'PORTFOLIO', 'RTL', 'HOME', 'PAGES', 'SHOP'].map((item) => (
                <li key={item} className="my-5">
                  <a href="#" className={`text-2xl font-bold tracking-wider transition-colors hover:text-[#80bdff] ${item === 'DEMO' ? 'text-[#80bdff]' : ''}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main className="relative">
        <div className="flex flex-col lg:flex-row mx-[50px] md:mx-5 relative min-h-[650px] pt-10">
          <div className="flex-1 flex flex-col relative mb-20 lg:mb-0">
            <div className="pt-[50px]">
              <h1 className="font-black leading-[0.9]">
                <span className="block text-[clamp(60px,8vw,120px)] leading-none">WE ARE</span>
                <span className="block text-[clamp(60px,8vw,120px)] leading-none">SKILLED IN</span>
                <div className="flex items-center flex-wrap">
                  <div className="bg-white py-[10px] px-[10px] mr-5 text-[clamp(18px,2.5vw,32px)] leading-none font-bold border-b-[5px] border-[#80bdff] mt-[10px]">
                    <span>WEB<br />DESIGN</span>
                  </div>
                  <span className="text-[clamp(60px,8vw,120px)]">AND</span>
                </div>
              </h1>
              
              <div className="absolute -bottom-[50px] right-[100px] z-[5]">
                <div className="relative w-[150px] h-[150px] bg-[#80bdff] rounded-full flex items-center justify-center shadow-[0_5px_15px_rgba(128,189,255,0.5)] transition-transform duration-300 hover:scale-105">
                  <div className="-rotate-90 font-bold lowercase text-[24px] text-white">
                    <span>development</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="max-w-[500px] mt-auto pb-[50px]">
              <p className="text-[18px] leading-[1.6] font-medium text-[#000c19]">
                We are a full-service digital agency that builds fascinating user experiences. our team creates and exceptional UI design and functionality.
              </p>
            </div>
          </div>
          
          <div className="flex-1 relative min-h-[500px]">
            <div className="relative h-full flex justify-center items-center">
              <div className="absolute top-20 right-1/2 w-[300px] h-[400px] rounded-l-[400px] overflow-hidden bg-red-500/50 shadow-md z-[1] transition-transform duration-500 hover:-translate-x-[10px] mt-20">
                <Image src="/images/is_web_development_good_career.jpg.avif" alt="Team member" fill className="object-cover" />
              </div>
              
              <div className="absolute top-20 left-1/2 w-[300px] h-[400px] rounded-r-[400px] overflow-hidden shadow-md z-[1] transition-transform duration-500 hover:translate-x-[10px] -mt-20">
                <Image src="/images/website-dev.webp" alt="Team members" fill className="object-cover" />
              </div>
            </div>
            
            <button className="absolute bottom-[50px] right-[50px] w-[100px] h-[100px] bg-black hover:bg-[#80bdff] rounded-full flex flex-col items-center justify-center text-white z-[3] shadow-lg transition-all duration-300 hover:scale-110">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="none">
                <polygon points="5,3 19,12 5,21"></polygon>
              </svg>
              <span>WATCH<br />VIDEO</span>
            </button>
          </div>
        </div>
        
        <div className="absolute top-[120px] right-[50px] text-right hidden lg:block">
          {['BUILDING', 'OUTSTANDING', 'DESIGN &', 'DEVELOPMENT'].map((text) => (
            <h2 key={text} className="text-[15px] font-medium -mt-10 hover:text-[#80bdff] transition-colors">
              {text}
            </h2>
          ))}
        </div>
      </main>
    </div>
  );
}