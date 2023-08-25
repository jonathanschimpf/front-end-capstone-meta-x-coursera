import './index.css';
import underConstruction from './page-under-construction-menu.jpg'

const MenuUnderConstruction = () => {
  return (
    <div className="container under-construction">
      <img src={underConstruction} alt="Page Under Construction!"></img>
    </div>
  );
};

export default MenuUnderConstruction;
