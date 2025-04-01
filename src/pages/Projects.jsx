import './Projects.css';
import davoiceImage from '../assets/davoice.png';
import portfolioImage from '../assets/portfolio.png';
import todoImage from '../assets/todo.jfif';

function Projects() {
  const projects = [
    {
      title: 'Davoice Website',
      description: 'Simple Website projects with Back-end Functionalities.',
      image: davoiceImage,
      link: '/davoice',
    },
    {
      title: 'Portfolio',
      description: 'My personal portfolio website, highlighting my skills and projects.',
      image: portfolioImage,
      link: '/portfolio', 
    },
    {
      title: "AwesomeToDo's",
      description: 'A to-do application with user authentication and task management features.',
      image: todoImage,
      link: '/todo', 
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-box">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} className="project-button">See More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;