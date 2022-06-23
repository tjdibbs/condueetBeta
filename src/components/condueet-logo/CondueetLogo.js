import { Link } from 'react-router-dom';

//styles & imagex
import './CondueetLogo.css';
import logo from '../../assets/logo.svg';

const CondueetLogo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="company-logo" />
        <div>Condueet</div>
      </Link>
    </div>
  );
};

export default CondueetLogo;
