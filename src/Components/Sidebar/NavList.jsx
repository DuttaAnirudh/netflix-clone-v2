import { Link } from "react-router-dom";

const NavList = ({ title, sectionName, data }) => {
  return (
    <div>
      <h3 className="heading-tertiary mb-2">{title}</h3>
      <ul className={`${sectionName}__list`} id={`${sectionName}-list-genre`}>
        {data?.map((item, i) => (
          <li className={`${sectionName}__item`} key={item.id || i}>
            <Link to={`/genre/${item.name}`} className={`${sectionName}__link`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavList;
