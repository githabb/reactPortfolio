import { useParams } from 'react-router-dom';
import BtnGitHub from '../components/btnGitHub/BtnGitHub';
import BtnHosting from '../components/btnHosting/BtnHosting';
import { projects } from './../helpers/projectsList';

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>
          <div className="project-details__buttons">
            <BtnGitHub link={project.gitHubLink} />
            <BtnHosting link={project.hostLink} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Project;
