function Projects() {
  const projects = [
    {
      title: 'React NV',
      description: 'Created a web platform for developers to practice coding questions, featuring a question library, code editor, and solution tracker.Built using React.js with responsive design and integrated APIs for dynamic content and progress tracking.',
      image: '/proff.png',
      technologies: ['React.js', 'Javascript', 'HTML','CSS','Tailwind CSS'],
      link: 'https://react-nv.netlify.app/'
    },
    {
      title: 'Farm.rent',
      description: 'Developed homepage, footer, and animations for a web platform focused on farming equipment exchange during a hackathon.',
      // image: 'https://via.placeholder.com/300',
      technologies: ['HTML', 'CSS', 'Javascript'],
      link: 'https://farmerrent.netlify.app/'
    },
    {
      title: '36studiosreplica',
      description: 'Developed an interactive animation for ThirtySixStudio using React.js and GSAP, focusing on smooth transitions and engaging motion effects and it is not responsive web site.',
      image: 'https://via.placeholder.com/300',
      technologies: ['React.js', 'Javascript', 'HTML','CSS','Tailwind CSS'],
      link: 'https://36studiosreplica.netlify.app/'
    },
    {
      title: 'Ai Code Review',
      description: 'Developed a full-stack web application that enables users to upload source code files for AI-powered code reviews using the Google Gemini API. The application intelligently analyzes the submitted code, identifies potential issues, and generates actionable feedback and improvement suggestions in real-time.',
      // image: 'https://via.placeholder.com/300',
      technologies: ['React.js', 'Javascript', 'HTML','CSS','Node.js','Express.js'],
      link: 'https://github.com/nagendra247/ai-code-review'
    }
    
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
             {/* <img src={project.image} alt={project.title} />  */}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;