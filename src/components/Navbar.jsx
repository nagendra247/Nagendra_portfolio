function Navbar({ onHomeClick, onSkillsClick, onProjectsClick, onContactClick }) {
  // const handleResumeClick = () => {
     
  //   window.open('/https://drive.google.com/file/d/1e2SNy1TDqGOzVv2e7EkpT273lBF7OrAR/view?usp=drive_link', '_blank');
  // };
  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1e2SNy1TDqGOzVv2e7EkpT273lBF7OrAR/view?usp=drive_link', '_blank');
  };
  return (
    <nav className="navbar">
      <div className="nav-brand">Heeeelloooo...!</div>
      <div className="nav-links">
        <button onClick={onHomeClick}>Home</button>
        <button onClick={onSkillsClick}>Skills</button>
        <button onClick={onProjectsClick}>Projects</button>
        <button onClick={onContactClick}>Contact</button>
        <button 
          onClick={handleResumeClick}
          className="resume-btn"
        >
          Resume
        </button>
      </div>
    </nav>
  );
}

export default Navbar;