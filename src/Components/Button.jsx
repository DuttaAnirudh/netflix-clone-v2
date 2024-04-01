const Button = ({ classNameBtn, imageSrc, classNameImg, alt, children }) => {
  return (
    <button className={`btn ${classNameBtn}`}>
      {imageSrc && (
        <span>
          <img src={imageSrc} className={classNameImg} alt={alt} />
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
