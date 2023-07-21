import "./footer.css";
import {
  GitHubIcon,
  TwitterIcon,
  LinkedInIcon,
  FmdGoodIcon,
  CallIcon,
  EmailIcon,
} from "../../assests/index";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-left">
          <span>Cherry Cart</span>
          <p>
            Fill your cupboard with your favorite products to become a better
            version of yourself.
          </p>
          <div className="socials">
            <Link to="https://github.com/">
              <p>
                <GitHubIcon />
              </p>
            </Link>
            <Link to="https://twitter.com/">
              <p>
                <TwitterIcon />
              </p>
            </Link>
            <Link to="https://www.linkedin.com/in/">
              <p>
                <LinkedInIcon />
              </p>
            </Link>
          </div>
        </div>
        <div className="footer-middle">
          <p className="title">Quick Links</p>
          <div className="listItems">
            <Link to="/store">
              <p>Products</p>
            </Link>
            <Link to="/wishlist">
              <p>Wishlist</p>
            </Link>
            <Link to="/cart">
              <p>Cart</p>
            </Link>
          </div>
        </div>
        <div className="footer-right">
          <p className="title">Contact Us</p>
          <div className="contact-list">
            <div className="contact-mode">
              <div className="contact-icon">
                <FmdGoodIcon />
              </div>
              <p>201 Oakbrook Center, Indiana</p>
            </div>
            <div className="contact-mode">
              <div className="contact-icon">
                <CallIcon />
              </div>
              <p>+91 23453 98765</p>
            </div>
            <div className="contact-mode">
              <div className="contact-icon">
                <EmailIcon />
              </div>
              <p>support@cherrycart.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
