import "./style.scss";

const ImageAvatar = ({ location }) => {
  return (
    <div className="location-img">
      <img src={location} alt={location} />
    </div>
  );
};

export default ImageAvatar;
