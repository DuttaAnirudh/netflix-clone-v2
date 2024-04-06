const Button = ({
  classNameBtn,
  imageSrc,
  classNameImg,
  alt,
  children,
  onClickEvent,
}) => {
  return (
    <button className={`btn ${classNameBtn}`} onClick={onClickEvent}>
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
