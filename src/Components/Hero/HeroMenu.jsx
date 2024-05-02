import { useDispatch } from "react-redux";
import downArrow from "../../assets/down-arrow.svg";
import { showMenu } from "../../slices/showMenuSlice";

const HeroMenu = () => {
  const dispatch = useDispatch();

  const handleShowCategories = () => {
    dispatch(showMenu());
  };

  return (
    <button className="hero-menu paragraph" onClick={handleShowCategories}>
      <span>Categories</span>{" "}
      <img src={downArrow} className="hero-menu__arrow" />
    </button>
  );
};

export default HeroMenu;
