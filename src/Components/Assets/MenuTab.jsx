import { useDispatch } from "react-redux";
import downArrow from "../../assets/down-arrow.svg";
import crossArrowWhite from "../../assets/cross-white.svg";
import { showMenu } from "../../slices/showMenuSlice";
import { useNavigate } from "react-router-dom";

const MenuTab = ({ title, subTitle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowCategories = () => {
    dispatch(showMenu());
  };

  const handleCloseCategories = () => {
    navigate("/");
  };

  return (
    <div className="menu-tab">
      <div
        className="menu-tab__box paragraph mb-2"
        onClick={handleShowCategories}
      >
        <span>{title}</span>
        <img src={downArrow} className="menu-tab__icon" />
      </div>

      {subTitle && (
        <div className="menu-tab__box menu-tab__box--sub paragraph mb-2">
          <span>{subTitle}</span>
          <img
            src={crossArrowWhite}
            className="menu-tab__icon menu-tab__icon--cross"
            onClick={handleCloseCategories}
          />
        </div>
      )}
    </div>
  );
};

export default MenuTab;
