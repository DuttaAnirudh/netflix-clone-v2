import { Link } from "react-router-dom";
import errorFace from "../../assets/sad-face.png";

const Error = ({ message, linkButton }) => {
  return (
    <div className="error">
      <img src={errorFace} className="error__img mb-4" />
      <p className="heading-secondary heading-primary--bold text-center">
        {message}{" "}
        {linkButton && (
          <Link to="/" className="heading-secondary error__text-emphasis">
            {linkButton}
          </Link>
        )}
      </p>
    </div>
  );
};

export default Error;
