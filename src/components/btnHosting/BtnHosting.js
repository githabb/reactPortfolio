import gitHostIcon from './hosting.svg';
import './style.css';

const BtnHosting = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={gitHostIcon} alt="" />
      Hosting
    </a>
  );
};

export default BtnHosting;
