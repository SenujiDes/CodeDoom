'use client';
// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from './styles/Home.module.css';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>CodeDoom</title>
        <meta name="description" content="CodeDoom" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="CodeDoom" width={130} height={30} />
        </div>
        
        <nav className={styles.desktopNav}>
          <ul>
            <li><a href="#" className={styles.active}>DEMO</a></li>
            <li className={styles.dropdown}>
              <a href="#">PORTFOLIO <span>↓</span></a>
            </li>
            <li className={styles.dropdown}>
              <a href="#">RTL <span>↓</span></a>
            </li>
            <li className={styles.dropdown}>
              <a href="#">HOME <span>↓</span></a>
            </li>
            <li className={styles.dropdown}>
              <a href="#">PAGES <span>↓</span></a>
            </li>
            <li><a href="#">SHOP</a></li>
          </ul>
        </nav>
        
        {/* Search Bar */}
        <div className={styles.searchIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        
        <div className={styles.mobileMenuButton} onClick={() => setIsOpen(!isOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        
        {isOpen && (
          <nav className={styles.mobileNav}>
            <ul>
              <li><a href="#" className={styles.active}>DEMO</a></li>
              <li><a href="#">PORTFOLIO</a></li>
              <li><a href="#">RTL</a></li>
              <li><a href="#">HOME</a></li>
              <li><a href="#">PAGES</a></li>
              <li><a href="#">SHOP</a></li>
            </ul>
          </nav>
        )}
      </header>

      <main className={styles.main}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1>
                <span className={styles.heroTop}>WE ARE</span>
                <span className={styles.heroMiddle}>SKILLED IN</span>
                <div className={styles.heroBottom}>
                  <div className={styles.webDesignBox}>
                    <span>WEB<br />DESIGN</span>
                  </div>
                  <span className={styles.andText}>AND</span>
                </div>
              </h1>
              
              <div className={styles.developmentCircle}>
                <div className={styles.circleWrapper}>
                  <div className={styles.circleText}>
                    <span>development</span>
                  </div>
                </div>
              </div>
            </div>
            
            
            
            <div className={styles.agencyDescription}>
              <p>
                We are a full-service digital agency that builds fascinating user experiences. our team creates and exceptional UI design and functionality.
              </p>
            </div>
          </div>
          
          <div className={styles.heroImages}>
            <div className={styles.imageContainer}>
              <div className={styles.redOverlay}>
                <Image src="/images/person1.jpg" alt="Team member" layout="fill" objectFit="cover" />
              </div>
              
              <div className={styles.rightImage}>
                <Image src="/images/person3.jpg" alt="Team members collaborating" layout="fill" objectFit="cover" />
              </div>
            </div>
            
            <div className={styles.watchButton}>
              <div className={styles.playIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="none">
                  <polygon points="5,3 19,12 5,21"></polygon>
                </svg>
              </div>
              <span>WATCH<br />VIDEO</span>
            </div>
          </div>
        </div>
        
        <div className={styles.buildingSection}>
          <div className={styles.buildingText}>
            <h2>BUILDING</h2>
            <h2>OUTSTANDING</h2>
            <h2>DESIGN &</h2>
            <h2>DEVELOPMENT</h2>
          </div>
        </div>
      </main>
    </div>
  );
}