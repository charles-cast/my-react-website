import './About.css';
import profileImage from '../assets/WIT.webp'; 

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-image">
        <img src={profileImage} alt="Profile" />
      </div>
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          Hello! I'm an IT student currently studying at Western Institute of Technology.
        </p>
        <p>
          I'm passionate about technology and enjoy learning new things in the world of IT. My focus is on backend development, and I'm eager to build robust and scalable applications.
        </p>
      </div>
    </section>
  );
}

export default About;