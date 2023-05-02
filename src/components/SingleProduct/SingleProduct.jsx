import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsFillCartPlusFill } from 'react-icons/bs'

import "./SingleProduct.scss";
import second from '../../assets/products/earbuds-prod-1.webp'
import RelatedProducts from "./RelatedProducts/RelatedProducts";
const data = [
  {
    id: 1,
    title: <FaFacebookF size={14}/>,
    href: "https://github.com"
  },
  {
    id: 2,
    title: <FaInstagram size={14}/>,
    href: "https://github.com"
  },
  {
    id: 4,
    title: <FaTwitter size={14}/>,
    href: "https://github.com"
  },
  {
    id: 5,
    title: <FaLinkedinIn size={14}/>,
    href: "https://github.com"
  },
]

const SingleProduct = () => {
  return (
    <>
      <div className="single__product">
        <div className="layout">
          <div className="single__product__page">
            <div className="left">
              <img src={second} alt="product" />
            </div>
            <div className="right">
              <h3 className="single__product__title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, distinctio.</h3>
              <div className="single__product__price">$ 25.00</div>
              <p className="right__desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis asperiores provident blanditiis autem, distinctio ea inventore tenetur accusamus quidem deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis numquam eius odit illum laudantium tempore perferendis incidunt natus officia sed? Atque numquam voluptas libero a provident dolorem dignissimos sequi laudantium incidunt necessitatibus, fugit consectetur illum ipsum maxime accusamus, quo eaque culpa quas itaque quos. Vel quibusdam et rerum provident obcaecati!
              </p>
              <div className="single__product__btns">
                <div className="single__product__count">
                  <button>-</button>
                  <span>13</span>
                  <button>+</button>
                </div>
                <div className="banner__cta">
                  <BsFillCartPlusFill/>
                  Read More
                </div>
              </div>
              <div className="single__product__cat">
                <h4>Category:</h4>
                <span>Smart Watch</span>
              </div>
              <div className="single__product__share">
                <span>Share:</span>
                <div className="single__product__icons">
                  {data.map(social => (
                    <div key={social.id} className="single__product__icon">
                      {social.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <RelatedProducts/>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
