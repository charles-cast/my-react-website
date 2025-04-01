import './Home.css';
import developerImage from '../assets/developer.jpg'; 

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>Hello, I'm Charles Castillano</h1>
        <p>
          A passionate backend developer specializing in building robust and scalable server-side applications.
          I thrive on solving complex problems and crafting efficient solutions that power seamless user experiences.
        </p>
        <p>
          My expertise lies in technologies like Node.js, Python, Go, Java, databases, APIs.
          I'm dedicated to writing clean, maintainable code and staying up-to-date with the latest backend technologies.
        </p>
        <p>
          Let's build something amazing together!
        </p>
        <div className="home-cta">
          <a href="/contact" className="contact-button">Get in Touch</a>
        </div>
      </div>
      <div className="home-image">
        <img src={developerImage} alt="Developer" />
      </div>
    </section>
  );
}

export default Home;