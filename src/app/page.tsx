'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Script from 'next/script';

// Add custom scrollbar styles
const scrollbarStyles = `
  /* For Webkit browsers (Chrome, Safari) */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(242, 220, 192, 0.5);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #8B4513;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #6B3410;
  }

  /* For Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #8B4513 rgba(242, 220, 192, 0.5);
  }
`;

// JSON-LD structured data for better SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Harris Beg",
  "jobTitle": "Software Engineer",
  "worksFor": {
    "@type": "Organization",
    "name": "DoorDash"
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "California Institute of Technology"
  },
  "knowsAbout": ["Software Engineering", "Machine Learning", "MRI Reconstruction", "Kotlin", "PyTorch", "TensorFlow"],
  "award": ["KPCB Engineering Fellow", "Best Paper Award, MIDL 2022"],
  "image": "/images/profile.jpg",
  "url": "https://harrisbeg.com",
  "email": "harrisbegca@gmail.com",
  "sameAs": [
    "https://www.linkedin.com/in/harrisbeg/",
    "https://github.com/hbg",
    "https://scholar.google.com/citations?user=UjXLP90AAAAJ&hl=en"
  ]
};

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4; // skinCAM, Grabify, Motion2Recon, VORTEX

  useEffect(() => {
    // Check if we're on mobile
    const isMobile = window.innerWidth < 1024; // lg breakpoint in Tailwind is 1024px

    if (showContent && isMobile) {
      setTimeout(() => {
        document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [showContent]);

  const handleScroll = () => {
    // Always scroll to content section, regardless of current state
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });

    // Only set showContent to true if it's not already true
    if (!showContent) {
      setShowContent(true);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {/* Add structured data */}
      <Script id="schema-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <main className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-[#f7e6d0] to-[#dc9d4c] text-black">
        {/* Add scrollbar styles */}
        <style jsx global>{scrollbarStyles}</style>

        {/* Left Sidebar */}
        <div className="w-full lg:w-1/4 h-[100vh] lg:min-h-screen flex items-center lg:items-start justify-center p-4 lg:pt-16">
          <div className="w-full space-y-6">
            <div className="relative w-32 lg:w-40 h-32 lg:h-40 mx-auto rounded-lg overflow-hidden border border-black/60">
              <Image
                src="/images/profile.jpg"
                alt="Harris Beg - Software Engineer at DoorDash"
                fill
                className="object-cover border-black border-4"
                priority
              />
            </div>
            <div className="text-center space-y-3">
              <h1 className="text-2xl lg:text-3xl font-bold">Harris Beg</h1>
              <p className="text-base lg:text-lg">Software Engineer @ DoorDash 🏃‍♂️</p>
              <div className="flex justify-center gap-2 mt-4 bg-white rounded-full p-2 shadow-sm mx-auto w-fit">
                <a
                  href="https://www.linkedin.com/in/harrisbeg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-black/60 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="mailto:harrisbegca@gmail.com"
                  className="text-black hover:text-black/60 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/hbg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-black/60 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://scholar.google.com/citations?user=UjXLP90AAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-black/60 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100"
                  aria-label="Google Scholar"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10.93 2.045c-.547.366-3.22 2.14-5.938 3.945C2.272 7.794.05 9.286.05 9.304c0 .019.136.11.305.2.167.096 2.85 1.583 5.965 3.31l5.656 3.143.144-.074c.082-.04 2.169-1.232 4.642-2.642l4.493-2.568.027 7.947h2.668V9.319l-3.46-2.32c-4.664-3.124-8.392-5.586-8.484-5.606-.045-.008-.527.287-1.076.652M5.355 16.633l.014 2.005 3.31 1.987 3.31 1.982 3.337-2 3.332-2.005V16.62c0-1.092-.013-1.983-.027-1.983s-1.318.782-2.9 1.741l-3.306 1.996-.431.256-1.32-.791a604.12 604.12 0 0 1-3.286-1.979l-2.005-1.21c-.024-.008-.027.897-.027 1.983" />
                  </svg>
                </a>
              </div>

              {/* Mobile Scroll Button - Only visible on mobile */}
              <div className="mt-8 lg:hidden">
                <button
                  onClick={handleScroll}
                  className="w-12 h-12 mx-auto bg-black/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/20 transition-colors"
                  aria-label="View Projects"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div id="content" className={`flex-1 p-4 lg:p-8 ${!showContent ? 'hidden lg:block' : ''}`}>
          <div className="space-y-4 lg:space-y-6">
            {/* Projects & Research Section */}
            <section id="projects" className="rounded-lg overflow-hidden shadow-sm">
              <div className="px-3 py-2 bg-gray-100 flex items-center relative">
                <div className="absolute left-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors duration-200 flex items-center justify-center group cursor-pointer clickable" style={{ cursor: 'pointer' }}>
                    <svg className="w-2 h-2 text-red-900 opacity-0 group-hover:opacity-100 transition-opacity duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors duration-200 flex items-center justify-center group cursor-pointer clickable" style={{ cursor: 'pointer' }}>
                    <svg className="w-2 h-2 text-yellow-900 opacity-0 group-hover:opacity-100 transition-opacity duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-200 flex items-center justify-center group cursor-pointer clickable" style={{ cursor: 'pointer' }}>
                    <svg className="w-2 h-2 text-green-900 opacity-0 group-hover:opacity-100 transition-opacity duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 text-center text-sm text-gray-600 font-medium">🚀 Past Work</div>
              </div>
              <div className="p-4 lg:p-6 bg-white">
                <div className="relative">
                  {/* Carousel Container */}
                  <div className="relative overflow-hidden min-h-[400px] px-8">
                    {/* Projects */}
                    <div className="carousel-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>

                      {/* Motion2Recon Research */}
                      <div className="carousel-slide">
                        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
                          <div className="w-full h-80 rounded-lg flex items-center justify-center overflow-hidden border border-gray-200 bg-white">
                          <div className="relative w-full h-full">
                              <Image
                                src="/images/m2r.png"
                                alt="Motion2Recon: Motion-robust semi-supervised MRI reconstruction"
                                fill
                                className="object-contain"
                                priority
                                loading="eager"
                              />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">Motion2Recon: Motion-robust semi-supervised MRI reconstruction</h3>
                            <p className="text-sm text-gray-600 mt-1">Presented at ISMRM 2022 (London)</p>
                            <ul className="list-disc ml-4 mt-2 text-sm">
                              <li>Novel motion-robust MRI reconstruction through simulated motion artifacts</li>
                              <li>Research conducted in collaboration with Stanford MRSRL during Caltech&apos;s SURF program</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* VORTEX Research */}
                      <div className="carousel-slide">
                        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
                          <div className="w-full h-80 rounded-lg flex items-center justify-center overflow-hidden border border-gray-200 bg-white">
                          <div className="relative w-full h-full">
                              <Image
                                src="/images/vortex.png"
                                alt="VORTEX: Physics-driven data augmentations for MRI reconstruction"
                                fill
                                className="object-contain"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">VORTEX: Physics-driven data augmentations using consistency training for robust accelerated MRI reconstruction</h3>
                            <p className="text-sm text-gray-600 mt-1">Presented at MIDL 2022 (Zürich)</p>
                            <ul className="list-disc ml-4 mt-2 text-sm">
                              <li>Physics-driven data augmentation, extension of Motion2Recon work at Stanford MRSRL</li>
                              <li>This paper won the &ldquo;Best Paper&rdquo; award at MIDL 2022!</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* skinCAM Project */}
                      <div className="carousel-slide">
                        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
                          <div className="w-full h-80 rounded-lg flex items-center justify-center overflow-hidden border border-gray-200 bg-white">
                            <div className="relative w-full h-full">
                              <Image
                                src="/images/sc_layout.jpg"
                                alt="skinCAM: AI-powered skin disease identification app"
                                fill
                                className="object-contain"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">skinCAM <span className="text-blue-500">🔬</span></h3>
                            <p className="text-sm text-gray-600 mt-1">AI-powered skin disease identification (<span className="font-bold">95%</span> accuracy)</p>
                            <ul className="list-disc ml-4 mt-2 text-sm">
                              <li>Developed skin lesion classification system using TensorFlow + Google Cloud</li>
                              <li>Filed a provisional patent (62/652,525) for unique diagnostic approach</li>
                            </ul>
                          </div>
                        </div>
                      </div>


                      {/* Grabify Project */}
                      <div className="carousel-slide">
                        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
                          <div className="w-full h-80 rounded-lg flex items-center justify-center overflow-hidden border border-gray-200 bg-white">
                            <div className="relative w-full h-full flex items-center justify-center">
                            <Image
                                src="/images/grabify.png"
                                alt="Grabify: Web analytics tool with 700,000+ monthly active users"
                                fill
                                className="object-contain"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">Grabify <span className="text-purple-500">🌐</span></h3>
                            <p className="text-sm text-gray-600 mt-1">Smart IP logging for all</p>
                            <ul className="list-disc ml-4 mt-2 text-sm">
                              <li>Grabify allows users to create smart IP logging links, and has over <span className="font-bold">700,000+</span> monthly active users.</li>
                              <li>Grabify links have over <span className="font-bold">350M+</span> uses to date!</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      </div>

                    {/* Navigation Buttons */}
                    <button
                      onClick={prevSlide}
                      className="absolute -left-2 lg:left-0 top-[40%] -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-full transition-colors z-10 shadow-md cursor-pointer clickable"
                      style={{ cursor: 'pointer' }}
                      aria-label="Previous project"
                    >
                      <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute -right-2 lg:right-0 top-[40%] -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-full transition-colors z-10 shadow-md cursor-pointer clickable"
                      style={{ cursor: 'pointer' }}
                      aria-label="Next project"
                    >
                      <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Dots Navigation */}
                  <div className="flex justify-center gap-3 mt-6">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer clickable ${
                          currentSlide === index ? 'bg-black/40 scale-125' : 'bg-black/20 hover:bg-black/30'
                        }`}
                        style={{ cursor: 'pointer' }}
                        aria-label={`Go to project ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Education & Experience Section */}
            <section className="rounded-lg overflow-hidden shadow-sm">
              <div className="px-3 py-2 bg-gray-100 flex items-center relative">
                <div className="absolute left-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors duration-200 flex items-center justify-center group cursor-pointer clickable" style={{ cursor: 'pointer' }}>
                    <svg className="w-2 h-2 text-red-900 opacity-0 group-hover:opacity-100 transition-opacity duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors duration-200 flex items-center justify-center group cursor-pointer clickable" style={{ cursor: 'pointer' }}>
                    <svg className="w-2 h-2 text-yellow-900 opacity-0 group-hover:opacity-100 transition-opacity duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-200 flex items-center justify-center group cursor-pointer clickable" style={{ cursor: 'pointer' }}>
                    <svg className="w-2 h-2 text-green-900 opacity-0 group-hover:opacity-100 transition-opacity duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 text-center text-sm text-gray-600 font-medium">🎓 Education & Experience</div>
              </div>
              <div className="p-4 lg:p-6 bg-white">
                <div className="space-y-4 lg:space-y-6">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-lg font-semibold">California Institute of Technology</h3>
                      <span className="text-xs">September 2020 - June 2024</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-1">
                      <span className="text-sm font-medium mb-1 sm:mb-0">Bachelor of Science, Computer Science (Machine Learning Track)</span>
                      <span className="text-xs">GPA: 4.1/4.0</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-lg font-semibold">DoorDash <span className="text-red-500">🏃‍♂️</span></h3>
                      <span className="text-xs">September 2024 - Present</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-1">
                      <span className="text-sm font-medium px-3 py-1 rounded-full bg-red-50 text-red-700 mb-1 sm:mb-0 w-fit">Software Engineer</span>
                    </div>
                    <ul className="list-disc ml-4 space-y-1 text-sm">
                      <li>Building an experimentation platform in Kotlin that enables DoorDash engineers to run experiments and manage feature flags.</li>
                      <li>Scaled the platform to process <span className="font-bold">75+ Trillion</span> events monthly, supporting <span className="font-bold">40k+</span> experiments across platforms.</li>
                      <li>Drove <span className="font-bold">$5M+</span> in value and <span className="font-bold">2 FTE</span> in engineering efficiency.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-lg font-semibold">DoorDash <span className="text-red-500">🏃‍♂️</span></h3>
                      <span className="text-xs">June 2023 - September 2023</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-1">
                      <span className="text-sm font-medium px-3 py-1 rounded-full bg-red-50 text-red-700 mb-1 sm:mb-0 w-fit">Software Engineer Intern</span>
                    </div>
                    <ul className="list-disc ml-4 space-y-1 text-sm">
                      <li>Developed a collaboration tool for engineers to discuss and track experiments across DoorDash&apos;s dev tools.</li>
                      <li>Built a scalable backend using Kotlin, CockroachDB, and gRPC with real-time commenting and notifications.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-lg font-semibold">DoorDash <span className="text-red-500">🏃‍♂️</span></h3>
                      <span className="text-xs">June 2022 - September 2022</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1 sm:mb-0">
                        <span className="text-sm font-medium px-3 py-1 rounded-full bg-red-50 text-red-700">Software Engineer Intern</span>
                        <span className="text-sm font-medium px-3 py-1 rounded-full bg-black/10 text-black">KPCB Engineering Fellow</span>
                      </div>
                    </div>
                    <ul className="list-disc ml-4 space-y-1 text-sm">
                      <li>Developed a Kafka library (part of the Asgard suite) using Kotlin, Guice, and Resilience4j.</li>
                      <li>Implemented producer instances with retry logic and circuit breaking for production use.</li>
                      <li>Selected as one of 79 Kleiner Perkins Engineering Fellows.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-lg font-semibold">Stanford University <span className="text-red-600">🎯</span></h3>
                      <span className="text-xs">June 2021 - August 2021</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-1">
                      <span className="text-sm font-medium px-3 py-1 rounded-full bg-purple-50 text-purple-700 mb-1 sm:mb-0 w-fit">ML Research Intern @ MRSRL</span>
                    </div>
                    <ul className="list-disc ml-4 space-y-1 text-sm">
                      <li>Implemented Motion2Recon using PyTorch, numpy, and signal processing for MR reconstruction.</li>
                      <li>Research presented at ISMRM 2022 (London) and MIDL 2022 (Zürich).</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}