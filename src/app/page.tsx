"use client";
import { useEffect, useRef, useState } from "react";
import Nav from "../components/Nav";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import ProjectTech from "../components/ProjectTech";
import ProjectCarousel from "../components/ProjectCarousel";
import Headshot from "../components/Headshot";
import "../styles/globals.css";
import "../styles/nav.css";
import "../styles/sections.css";
import "../styles/headshot.css";
import "../styles/carousel.css";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const projectTechRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  useEffect(() => {
    const sections = [
      aboutRef.current,
      educationRef.current,
      experienceRef.current,
      projectsRef.current,
      projectTechRef.current,
      carouselRef.current,
      skillsRef.current,
      certificationsRef.current,
      contactRef.current,
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-deep-space text-white">
      <Nav
        aboutRef={aboutRef}
        educationRef={educationRef}
        experienceRef={experienceRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />
      <main className="flex-1 w-full pt-16 p-12">
        <section className="section name-section">
          <h1 className="name-title">Drew Erskine</h1>
        </section>
        <div className="about-and-headshot-container">
          <section
            id="about"
            ref={aboutRef}
            className="section about-section fade-in"
          >
            <About />
          </section>
          <Headshot />
        </div>
        <section
          id="education"
          ref={educationRef}
          className="section education-section fade-in"
        >
          <Education />
        </section>
        <section
          id="experience"
          ref={experienceRef}
          className="section experience-section fade-in"
        >
          <Experience />
        </section>
        <Projects currentProjectIndex={currentProjectIndex} />
        <div className="projects-carousel-container">
          <ProjectTech currentProjectIndex={currentProjectIndex} />
          <ProjectCarousel onSlideChange={setCurrentProjectIndex} />
        </div>

        <div className="skills-certifications-container">
          <section
            id="skills"
            ref={skillsRef}
            className="section half-section skills-section fade-in"
          >
            <Skills />
          </section>
        </div>

        <div className="skills-certifications-container2">
          <section
            id="certifications"
            ref={certificationsRef}
            className="section half-section certifications-section fade-in"
          >
            <Certifications />
          </section>
        </div>

        <section
          id="contact"
          ref={contactRef}
          className="section contact fade-in"
        >
          <Contact />
        </section>
      </main>
      <footer className="w-full py-4 bg-deep-space text-gray-300 text-center">
        <p>© 2023 Drew Erskine. All rights reserved.</p>
      </footer>
    </div>
  );
}
