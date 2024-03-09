import '../style/Header.css';
import Icon from './Icon';
import Info from './Info';

const Header = ({ user }) => {
  return (
    <div className="container">
      <Icon user={user} />
      <h1>GitHub Traffic</h1>
      <Info />
    </div>
  );
};

export default Header;
