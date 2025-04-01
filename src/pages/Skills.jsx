import './Skills.css';
import htmlImage from '../assets/html.jfif';
import cssImage from '../assets/css.jfif';
import backendImage from '../assets/backend.jpg';

function Skills() {
  const skills = [
    {
      title: 'HTML',
      description: 'Proficient in creating semantic and accessible HTML structures for web applications.',
      image: htmlImage,
    },
    {
      title: 'CSS',
      description: 'Expert in styling web pages using CSS, including responsive design and animations.',
      image: cssImage,
    },
    {
      title: 'Back-end Developer',
      description: 'Experienced in building robust server-side applications and APIs using various technologies.',
      image: backendImage,
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h1>My Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-box"
            style={{ backgroundImage: `url(${skill.image})` }}
          >
            <div className="skill-content">
              <h2>{skill.title}</h2>
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;