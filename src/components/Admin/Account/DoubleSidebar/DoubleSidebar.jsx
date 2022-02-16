import { Link } from "react-router-dom";

const DoubleSidebar = ({ doubleNavItems, heading }) => {
  return (
    <nav className="right-nav">
      <h1 className="right-nav-heading">{heading}</h1>
      <div className="right-nav-items-container">
        {doubleNavItems?.map((eachItem) => (
          <Link
            to={eachItem.path}
            className="right-nav-item"
            key={eachItem.name}
          >
            <p className="right-nav-item-name">{eachItem.name}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default DoubleSidebar;
