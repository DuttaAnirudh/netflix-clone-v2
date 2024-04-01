const SidebarList = ({ title, sectionName, array }) => {
  return (
    <div>
      <h3 className="heading-tertiary mb-2">{title}</h3>
      <ul className={`${sectionName}__list`} id={`${sectionName}-list-genre`}>
        {array.map((genreName, i) => (
          <li className={`${sectionName}__item`} key={i}>
            <a href="# " className={`${sectionName}__link`}>
              {genreName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarList;
