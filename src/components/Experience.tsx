import React from "react";

const Experience = () => {
  return (
    <section className="section">
      <h2 className="section-title">Experience</h2>
      <div className="section-content">
        <h2 style={{ fontSize: "2em", fontWeight: "bold" }}>
          Michigan High School Esports Federation
        </h2>
        <h3>Position: Full Stack Developer Intern</h3>
        <ul>
          <li>
            <p>
              -Developed and maintained full-stack solutions for MIHSEF,
              enhancing user experience and platform functionality based on user
              feedback and performance metrics.{" "}
            </p>
            <p>
              -Designed and implemented RESTful API web services using the Java
              Spring framework, fit effectively for handling data operation
              during competitive esports events.{" "}
            </p>
            <p>
              -Built over 10 scaffolding tools utilizing a variety of
              programming languages including Java, JS, C, C#, HTML and Python,
              which streamlined development processes and improved efficiency.{" "}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
