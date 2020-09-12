import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-wrap">
        <div className="footer-list">
          <div className="footer-box-quicklinks">
            <div className="footer-box-title">
              Category
            </div>
            <Link to="/">
              <div className="footer-title-lists">
                Horror
              </div>
            </Link>
            <Link to="/">
              <div className="footer-title-lists">
                Action
              </div>
            </Link>
            <Link to="/">
              <div className="footer-title-lists">
                Drama
              </div>
            </Link>
            <Link to="">
              <div className="footer-title-lists">
                Commedy
              </div>
            </Link>
            <Link to="/">
              <div className="footer-title-lists">
                Romantic
              </div>
            </Link>
          </div>
          <div className="footer-box-contactus">
            <div className="footer-box-title">
              About Us
            </div>
            <Link to="/">
              <div className="footer-title-lists">
                About Us
              </div>
            </Link>
            <Link to="/">
              <div className="footer-title-lists">
                FAQ
              </div>
            </Link>
            <Link to="/">
              <div className="footer-title-lists">
                Term & Conditiom
              </div>
            </Link>
            <Link to="">
              <div className="footer-title-lists">
                Our Partners
              </div>
            </Link>
        	</div>
					<div className="footer-box-contactus">
            <div className="footer-box-social-media">
              Follow Us
            </div>
            <a
              href="/"
              target="_blank"
              alt="facebook"
            >
              <img
                alt="logo-facebook"
                className="img-social-media"
                height={37}
                src={`${process.env.PUBLIC_URL}/img/icon-facebook.svg`}
              />
            </a>
            <a
              href="/"
              target="_blank"
              alt="youtube"
            >
              <img
                alt="logo-youtube"
                className="img-social-media"
                height={37}
                src={`${process.env.PUBLIC_URL}/img/icon-youtube.svg`}
              />
            </a>
            <a href="/" alt="instagram" target="_blank">
              <img
                alt="logo-instagram"
                className="img-social-media"
                height={37}
                src={`${process.env.PUBLIC_URL}/img/icon-instagram.svg`}
              />
            </a>
          </div>
					<div className="footer-download-app">
						<div className="footer-title-download-app">
							Get Our App
						</div>
						<Link to="/">
							<img
								alt="logo"
								className="img-download"
								height={37}
								src={`${process.env.PUBLIC_URL}/img/play-store.svg`}
							/>
						</Link>
						<Link to="/">
							<img
								alt="logo"
								className="img-download"
								height={37}
								src={`${process.env.PUBLIC_URL}/img/app-store.svg`}
							/>
						</Link>
					</div>
				</div>
      </div>
    );
  }
}

export default Footer;
