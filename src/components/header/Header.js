import './style.css';
import ResumePDF from '../../files/resume.pdf';
const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is<br></br> <em>Yurii Yevchenko</em>
          </strong>
          <br />a Junior Front-end Developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href={ResumePDF} target="_blank" rel="noreferrer" className="btn">
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
