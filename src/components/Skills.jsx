function Skills() {
  const skills = {
    programmingLanguages: ['JavaScript','HTML', 'CSS',  'Tailwind CSS'],
    frameworksLibraries: ['React.js', 'Node.js', 'Express.js', 'Bootstrap'],
    databases: ['MongoDB', 'MySQL'],
    toolsTechnologies: ['Cursor AI', 'VS Code', 'Postman'],
    certificates: [
      {
        name: 'Introduction to Front-End Development by META',
        issuer: 'Coursera',
        date: '2023',
        link:'https://coursera.org/share/f48d198fdd9e77fbad39a467e16d0a44'
        
      },
      {
        name: 'JavaScript Basics',
        issuer: 'Coursera',
        date: '2023',
        link:'https://coursera.org/share/4c172529947badf8f0c2e6d31d5f28b7'
      },
      {
        name: 'CODEBITE 2k23 Hackathon',
        issuer: 'Sheryians Coding School',
        date: '2023',
        link:'https://drive.google.com/file/d/17ExY49vmwlmvCbBJ6Kop-R6ZDmrv95dn/view'
      }
    ]
  };

  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <ul>
            {skills.programmingLanguages.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="skill-category">
          <h3>Frameworks & Libraries</h3>
          <ul>
            {skills.frameworksLibraries.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="skill-category">
          <h3>Database Management</h3>
          <ul>
            {skills.databases.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="skill-category">
          <h3>Tools & Technologies</h3>
          <ul>
            {skills.toolsTechnologies.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="certificates">
        <h3>Certificates</h3>
        <div className="certificates-grid">
          {skills.certificates.map((cert, index) => (
            <div key={index} className="certificate">
              <h4>{cert.name}</h4>
              <p>{cert.issuer}</p>
              <p>{cert.date}</p>
              {cert.link && (
          <button
            onClick={() => window.open(cert.link, '_blank')}
            className="certificate-button"
          >
            View Certificate
          </button>
        )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;