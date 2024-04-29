import spinner from "../../assets/spinner.png";

const Loader = () => {
  return (
    <div id="loader" className="nfLoader">
      <img src={`${spinner}`} className="nfLoader__img" />
    </div>
  );
};

export default Loader;
