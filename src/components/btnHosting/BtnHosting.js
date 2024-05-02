import gitHubIcon from './gitHosting-black.svg';
import './style.css';

const BtnHosting = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={gitHubIcon} alt="" />
      Hosting repo
    </a>
  );
};

export default BtnHosting;
