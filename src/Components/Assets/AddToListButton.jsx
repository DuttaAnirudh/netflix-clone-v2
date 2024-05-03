import plusIcon from "../../assets/plus.png";
import tick from "../../assets/tick.png";

const AddToListButton = ({ addedStatus = false }) => {
  return (
    <div className="list__box">
      {addedStatus ? (
        <img src={tick} alt="tick mark icon" className="list__icon" />
      ) : (
        <img src={plusIcon} alt="add icon" className="list__icon" />
      )}
      <p className="paragraph  paragraph--light">My List</p>
    </div>
  );
};

export default AddToListButton;
