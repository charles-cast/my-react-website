import './Contact.css';
import contactImage from '../assets/developer.jpg'; // Import your image

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-image">
        <img src={contactImage} alt="Contact" />
      </div>
      <div className="contact-card">
        <h1>Contact Me</h1>
        <p>Feel free to reach out to me via the following links:</p>
        <div className="contact-links">
          <a
            href="https://www.facebook.com/your-facebook-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://github.com/your-github-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;