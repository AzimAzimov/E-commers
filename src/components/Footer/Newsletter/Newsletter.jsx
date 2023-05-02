import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";

import "./Newsletter.scss";

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

const Newsletter = () => {
  const [inputValue, setInputValue] = useState("")

  return (
    <div className="newsletter__section">
      <div className="content">
        <span className="small__text">Newsletter</span>
        <span className="big__text">Sing up for latest updates and offers</span>
        <div className="form">
          <div className="input__and__button">
            <div className="input__block">
              <HiMail className='email'/>
              <input type="text" 
                required
                placeholder="Email Address"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} 
              />
              {inputValue && <MdOutlineClose onClick={() => setInputValue("")} className='clear'/>}
            </div>
            <button type="submit" >Subscribe</button>
          </div>
          <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          <div className="social__icon">
            {data.map(social => (
              <Link target="blank" to={`${social.href}`} key={social.id} className="icon">
                {social.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Newsletter;
