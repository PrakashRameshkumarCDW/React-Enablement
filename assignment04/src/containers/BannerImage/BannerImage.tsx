import PromoImage from "../../assets/sindel-background.png";
import "./BannerImage.scss";
const BannerImage = () => {
  return (
    <>
      <div className="banner-image-container">
        <img src={PromoImage} alt="promoImage" />
      </div>
    </>
  );
};

export default BannerImage;
