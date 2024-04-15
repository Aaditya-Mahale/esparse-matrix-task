import { useMemo } from "react";
import UnderLineIcon from "./UnderLineIcon";
import Logo from "./Logo";
import SendMail from "./SendMail";
import QrCodeImage from "./QrCodeImage";
import GooglePlay from "./GooglePlay";
import AppStoreImage from "./AppStoreImage";
import "./Footer.css";

import { Link } from 'react-router-dom';

const Footer = ({ exclusive, footerPosition, footerTop, footerLeft }) => {
  const footerStyle = useMemo(() => {
    return {
      position: footerPosition,
      top: footerTop,
      left: footerLeft,
    };
  }, [footerPosition, footerTop, footerLeft]);

  return (
    <div className="footer" style={footerStyle}>
      <div className="underline-parent">
        <UnderLineIcon
          underLineIconUnderLine="/underline.svg"
          underLineIconWidth="1440px"
          underLineIconOverflow="unset"
          underLineIconPosition="relative"
        />
        <div className="frame-wrapper">
          <div className="icon-copyright-parent">
            <img className="icon-copyright1" alt="" src="/iconcopyright.svg" />
            <div className="exclusivegmailcom">
              Copyright  2024. All right reserved
            </div>
          </div>
        </div>
      </div>
      <div className="frame-div">
        <div className="frame-parent1">
          <div className="logo-container">
            <div className="logo-container">
              <Logo
                exclusive="Exclusive"
                logoPosition="relative"
                exclusiveColor="#fafafa"
              />
              <div className="subscribe">Subscribe</div>
            </div>
            <div className="get-10-off">Get 10% off your first order</div>
          </div>
          <SendMail
            iconSend="/iconsend.svg"
            sendMailBorder="1.5px solid var(--text)"
            enterYourEmailColor="#fafafa"
          />
        </div>
        <div className="logo-container">
          <div className="subscribe">Support</div>
          <div className="bijoy-sarani-dhaka-dh-1515-parent">
            <div className="bijoy-sarani-dhaka">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </div>
            <div className="exclusivegmailcom">exclusive@gmail.com</div>
            <div className="exclusivegmailcom">+88015-88888-9999</div>
          </div>
        </div>
        <div className="logo-container">
          <div className="subscribe">Account</div>
          <div className="bijoy-sarani-dhaka-dh-1515-parent">
            <div className="exclusivegmailcom"><Link to="/account" style={{ color: 'white', textDecoration: 'none' }}>My Account</Link></div>
            <div className="exclusivegmailcom"><Link to="/signup" style={{ color: 'white', textDecoration: 'none' }}> Login / Register</Link></div>
            <div className="exclusivegmailcom"><Link to="/cart" style={{ color: 'white', textDecoration: 'none' }} >Cart</Link></div>
            <div className="exclusivegmailcom"><Link to="/wishlist" style={{ color: 'white', textDecoration: 'none' }}>Wishlist</Link></div>
            <div className="exclusivegmailcom"><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Shop</Link></div>
          </div>
        </div>
        <div className="logo-container">
          <div className="subscribe">Quick Link</div>
          <div className="bijoy-sarani-dhaka-dh-1515-parent">
            <div className="exclusivegmailcom">Privacy Policy</div>
            <div className="exclusivegmailcom">Terms Of Use</div>
            <div className="exclusivegmailcom">FAQ</div>
            <div className="exclusivegmailcom"><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
            </div><div className="exclusivegmailcom"><Link to="/sellerreg" style={{ color: 'white', textDecoration: 'none' }}>Become a seller</Link>
            </div>
          </div>
        </div>
        <div className="logo-container">
          <div className="logo-container">
            <div className="subscribe">Download App</div>
            <div className="save-3-with-app-new-user-only-parent">
              <div className="save-3-with">Save $3 with App New User Only</div>
              <div className="qr-code-parent">
                <QrCodeImage qrCodeIconPosition="relative" />
                <div className="googleplay-parent">
                  <GooglePlay googlePlayIconPosition="relative" />
                  <AppStoreImage appStoreIconPosition="relative" />
                </div>
              </div>
            </div>
          </div>
          <div className="icon-facebook-parent">
            <img className="icon-facebook" alt="" src="/iconfacebook.svg" />
            <img className="icon-facebook" alt="" src="/icontwitter.svg" />
            <img className="icon-facebook" alt="" src="/iconinstagram.svg" />
            <img className="icon-facebook" alt="" src="/iconlinkedin.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
