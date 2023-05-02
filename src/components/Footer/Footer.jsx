import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";

import "./Footer.scss";
import Payment from '../../assets/payments.png'
import Newsletter from "./Newsletter/Newsletter";

const dataFirst = [
  {
    id: 1,
    title: {
      icon: <FaLocationArrow/>,
      name: "8th Avenue 22"
    },
  },
  {
    id: 2,
    title: {
      icon: <FaMobileAlt/>,
      name: "Phone: +1 444 44 44"
    },
  },
  {
    id: 3,
    title: {
      icon: <FaEnvelope/>,
      name: "Email: store@mail.ru"
    },
  },
]

const dataCategories = [
  {
    id: 1,
    title: "Headphones",
  },
  {
    id: 2,
    title: "Phones",
  },
  {
    id: 3,
    title: "Computers",
  },
  {
    id: 4,
    title: "Accessories",
  },
  {
    id: 5,
    title: "Other",
  },
]

const dataPages = [
  {
    id: 1,
    title: "Home",
    href: "/"
  },
  {
    id: 2,
    title: "About",
    href: "/about"
  },
  {
    id: 4,
    title: "Returns",
    href: "/"
  },
  {
    id: 5,
    title: "Privacy Policy",
    href: "/"
  },
  {
    id: 6,
    title: "Contacts",
    href: "/contacts"
  },
]

const Footer = () => {
  return (
    <>
      <Newsletter/> 
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__columns">
            <div className="footer__column">
              <h2>About</h2>
              <p className="category">Lorem ipsum dolor sit amet consectetur</p>
              <p className="category">Lorem ipsum dolor sit amet consectetur</p>
              <p className="category">Lorem ipsum dolor sit amet consectetur</p>
              <p className="category">Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div className="footer__column">
              <h2>Contacts</h2>
              {dataFirst.map(item => (
                <div key={item.id} className="contacts">
                  <span>{item.title.icon}</span>
                  <span>{item.title.name}</span>
                </div>
              ))}
            </div>
            <div className="footer__column">
              <h2>Categories</h2>
              {dataCategories.map(item => (
                <div key={item.id} className="category">{item.title}</div>
              ))}
            </div>
            <div className="footer__column">
              <h2>Pages</h2>
              {dataPages.map(item => (
                <div key={item.id} className="category">{item.title}</div>
              ))}
            </div>
          </div>
          <div className="footer__bottom">
            <p>Made in Azim{")"}</p>
            <img src={Payment} alt="Payment" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
