import React from 'react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-200 py-10 flex justify-center font-sans relative" style={{ fontFamily: 'Calibri, system-ui, sans-serif' }}>
      
      {/* Floating Download Button (hidden when printing) */}
      <button 
        onClick={() => window.print()}
        className="fixed top-8 right-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg print:hidden flex items-center gap-2 transition-colors z-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        Download PDF
      </button>

      <div className="w-[210mm] min-h-[297mm] bg-white text-black p-12 shadow-2xl text-[10.5pt] leading-[1.4] flex flex-col box-border print:shadow-none print:p-0">
        {/* Header */}
        <header className="mb-4">
          <h1 className="text-[28pt] leading-none font-bold text-gray-900 mb-1 tracking-wider uppercase">Rajnish Singh</h1>
          <h2 className="text-[11pt] font-semibold text-blue-700 mb-2">
            Frontend Developer | UI/UX Enthusiast | Web Application Developer
          </h2>
          <div className="text-[10pt] text-blue-600 flex flex-wrap gap-2 items-center">
            <a href="mailto:mscrajnish@gmail.com" className="hover:underline">mscrajnish@gmail.com</a>
            <span className="text-gray-400">|</span>
            <span>+91 8757577586</span>
            <span className="text-gray-400">|</span>
            <span>Noida, India</span>
            <span className="text-gray-400">|</span>
            <a href="https://rajnishportfolio.space" target="_blank" rel="noreferrer" className="hover:underline">rajnishportfolio.space</a>
            <span className="text-gray-400">|</span>
            <a href="https://github.com/iamsunny016" target="_blank" rel="noreferrer" className="hover:underline">github.com/iamsunny016</a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-4">
          <h3 className="text-[11pt] font-bold text-blue-800 uppercase border-b-2 border-blue-800 mb-2 pb-0.5">Professional Summary</h3>
          <p className="text-[10.5pt] text-justify">
            Motivated B.Tech (CSE) fresher and passionate Frontend Developer with hands-on experience building responsive, user-centric web applications using HTML5, CSS3, and JavaScript. Demonstrated ability to develop and deploy 3 fully functional projects including an e-commerce platform, task manager, and weather dashboard. Adept at translating UI/UX concepts into clean, maintainable code. Actively seeking a frontend developer role at a leading MNC to contribute technical skills and grow in an agile, collaborative engineering environment.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-4">
          <h3 className="text-[11pt] font-bold text-blue-800 uppercase border-b-2 border-blue-800 mb-2 pb-0.5">Technical Skills</h3>
          <div className="text-[10.5pt] grid grid-cols-[110px_1fr] gap-y-1.5">
            <div className="font-bold text-gray-900">Languages:</div>
            <div>HTML5 • CSS3 • JavaScript (ES6+)</div>
            
            <div className="font-bold text-gray-900">Frontend:</div>
            <div>Responsive Design • UI/UX Design • Flexbox • CSS Grid • DOM Manipulation • Cross-Browser Compatibility</div>
            
            <div className="font-bold text-gray-900">Tools:</div>
            <div>Git • GitHub • VS Code • Netlify • Browser DevTools • REST APIs • JSON</div>
            
            <div className="font-bold text-gray-900">Soft Skills:</div>
            <div>Problem Solving • Team Collaboration • Quick Learner • Attention to Detail • Communication</div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-4">
          <h3 className="text-[11pt] font-bold text-blue-800 uppercase border-b-2 border-blue-800 mb-2 pb-0.5">Education</h3>
          <div className="mb-2">
            <div className="flex justify-between items-baseline mb-1">
              <h4 className="text-[10.5pt] font-bold text-gray-900">
                B.Tech — Computer Science & Engineering <span className="font-normal text-blue-700">| GNIOT, Greater Noida (Dr. A.P.J. Abdul Kalam Technical University)</span>
              </h4>
              <span className="text-[10pt] text-gray-600 italic whitespace-nowrap ml-4">2021 – 2025 • Greater Noida, UP</span>
            </div>
            <ul className="list-disc pl-5 text-[10.5pt] mt-1 space-y-0.5">
              <li><span className="font-bold">Relevant Coursework:</span> Data Structures & Algorithms, Web Technologies, DBMS, Computer Networks, OOP, Operating Systems, Software Engineering</li>
              <li>Participated actively in coding clubs, technical fests, hackathons, and inter-college web development competitions.</li>
              <li>Completed self-initiated full-stack web projects during coursework, integrating REST APIs and responsive front-end design.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-4">
          <h3 className="text-[11pt] font-bold text-blue-800 uppercase border-b-2 border-blue-800 mb-2 pb-0.5">Projects</h3>
          
          <div className="grid grid-cols-3 gap-6">
            {/* Project 1 */}
            <div>
              <h4 className="text-[10.5pt] font-bold text-gray-900 mb-0.5">Myntra E-Commerce Clone</h4>
              <div className="text-[9.5pt] text-gray-600 italic mb-1.5">HTML5 • CSS3 • JavaScript</div>
              <ul className="list-disc pl-4 text-[10pt] space-y-0.5 mb-1.5">
                <li>Responsive product listing with dynamic filtering and add-to-cart</li>
                <li>Secure checkout flow with persistent cart using localStorage</li>
                <li>Deployed on Netlify; version-controlled via GitHub</li>
              </ul>
              <a href="#" className="text-[10pt] text-blue-600 hover:underline flex items-center mt-1">
                <span className="mr-1">↗</span> Live Demo
              </a>
            </div>

            {/* Project 2 */}
            <div>
              <h4 className="text-[10.5pt] font-bold text-gray-900 mb-0.5">Task Management App</h4>
              <div className="text-[9.5pt] text-gray-600 italic mb-1.5">HTML5 • CSS3 • JavaScript</div>
              <ul className="list-disc pl-4 text-[10pt] space-y-0.5 mb-1.5">
                <li>Intuitive drag-and-drop interface for task and team management</li>
                <li>Multi-category status tracking with priority assignment</li>
                <li>Mobile-first responsive design across all screen sizes</li>
              </ul>
              <a href="#" className="text-[10pt] text-blue-600 hover:underline flex items-center mt-1">
                <span className="mr-1">↗</span> Live Demo
              </a>
            </div>

            {/* Project 3 */}
            <div>
              <h4 className="text-[10.5pt] font-bold text-gray-900 mb-0.5">Weather Dashboard</h4>
              <div className="text-[9.5pt] text-gray-600 italic mb-1.5">JavaScript • REST API • CSS3</div>
              <ul className="list-disc pl-4 text-[10pt] space-y-0.5 mb-1.5">
                <li>Real-time weather via third-party REST API (Fetch + Promises)</li>
                <li>Dynamic 5-day forecast with temperature and location data</li>
                <li>Clean responsive UI with error handling for invalid queries</li>
              </ul>
              <a href="#" className="text-[10pt] text-blue-600 hover:underline flex items-center mt-1">
                <span className="mr-1">↗</span> Live Demo
              </a>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-4">
          <h3 className="text-[11pt] font-bold text-blue-800 uppercase border-b-2 border-blue-800 mb-2 pb-0.5">Experience</h3>
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <h4 className="text-[10.5pt] font-bold text-gray-900">
                Frontend Developer <span className="font-normal text-blue-700">| Self-Initiated Projects & Freelance</span>
              </h4>
              <span className="text-[10pt] text-gray-600 italic whitespace-nowrap ml-4">2024 – Present • Remote</span>
            </div>
            <ul className="list-disc pl-5 text-[10.5pt] space-y-0.5">
              <li>Designed, developed, and deployed 3+ web projects end-to-end from wireframe to production using modern frontend stack.</li>
              <li>Followed industry best practices: Git branching strategy, semantic HTML, CSS BEM methodology, and Netlify CI/CD pipelines.</li>
              <li>Continuously iterated on UI/UX quality through user feedback cycles, improving design clarity and mobile responsiveness.</li>
              <li>Integrated third-party REST APIs and practiced asynchronous JavaScript patterns (async/await, Promises, fetch API).</li>
            </ul>
          </div>
        </section>

        {/* Certifications & Achievements */}
        <section className="mb-4">
          <h3 className="text-[11pt] font-bold text-blue-800 uppercase border-b-2 border-blue-800 mb-2 pb-0.5">Certifications & Achievements</h3>
          <div className="grid grid-cols-2 gap-4">
            <ul className="list-disc pl-5 text-[10.5pt] space-y-0.5">
              <li>Responsive Web Design — freeCodeCamp (HTML5, CSS3, Grid)</li>
              <li>JavaScript Algorithms & Data Structures — freeCodeCamp</li>
            </ul>
            <ul className="list-disc pl-5 text-[10.5pt] space-y-0.5">
              <li>UI/UX Design Fundamentals — Figma & Design Thinking</li>
              <li>3 live projects deployed on Netlify with CI/CD pipelines</li>
            </ul>
          </div>
        </section>

        {/* Footer info */}
        <div className="mt-auto pt-2 flex justify-start text-[9.5pt] text-gray-500 italic">
          <span>Immediate Joiner • Open to Relocation • References Available on Request</span>
        </div>
      </div>
    </div>
  );
};

export default Resume;
