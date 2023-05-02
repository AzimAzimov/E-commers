import "./Banner.scss";
import BannerImg from '../../../assets/banner-img.png'

const Banner = () => {
  return (
    <div className="banner">
      <div className="content">
        <div className="text__content">
          <h1>SALES</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur eius voluptatum exercitationem autem reprehenderit deleniti, quaerat.
          </p>
          <div className="ctas">
            <div className="banner__cta">Read More</div>
            <div className="banner__cta v2">Shop Now</div>
          </div>
        </div>
        <img src={BannerImg} alt="banner" className="banner__img" />
      </div>
    </div>
  )
};

export default Banner;
