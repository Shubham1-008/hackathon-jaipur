import React from "react";
import logo from "../assests/images/donate.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer bg-dark text-light">
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-6 col-lg-4 ">
                <div className="footer_widget">
                  <div className="footer_logo">
                    <a href="#">
                      <img src={logo} style={{ width: "10rem" }} alt="" />
                    </a>
                  </div>
                  <p className="text-light">
                    Come Forward and let your helping
                    <br /> hand be a part of our community <br /> for the
                    welfare of te society.
                  </p>
                  <div className="socail_links text-light">
                    <ul>
                      <li>
                        <a href="https://www.instagram.com/neurotic_silence/">
                          <i className="ti-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/Arshdeep0509">
                          <i className="ti-twitter-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a href="linkedin.com/in/arshdeep-singh-9154491b1">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/_diljot_4/">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-lg-2">
                <div className="footer_widget">
                  <h3 className="footer_title text-light">Services</h3>
                  <ul className="links text-light">
                    <li>
                      <a href="#">Donate</a>
                    </li>
                    <li>
                      <a href="#">Sponsor</a>
                    </li>
                    <li>
                      <a href="#">Fundraise</a>
                    </li>
                    <li>
                      <a href="#">Volunteer</a>
                    </li>
                    <li>
                      <a href="#">Partner</a>
                    </li>
                    <li>
                      <a href="#">Jobs</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-3">
                <div className="footer_widget">
                  <h3 className="footer_title text-light">Contacts</h3>
                  <div className="contacts text-light">
                    <p className="text-light">
                      +91 98781-57165 <br />
                      developer02shubham@gmail.com <br />
                      Plot no 2, gali no 10 near radha soami dera chheharta
                      Amritsar Chheharta 143105
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-3">
                <div className="footer_widget">
                  <h3 className="footer_title text-light">Top News</h3>
                  <ul className="news_links">
                    <li>
                      <div className="thumb">
                        <a href="#">
                          <img src="img/news/news_1.png" alt="" />
                        </a>
                      </div>
                      <div className="info ">
                        <a href="#">
                          <h4 className="text-light">
                            Food supply for needy people
                          </h4>
                        </a>
                        <span className="text-light">March 21, 2023</span>
                      </div>
                    </li>
                    <li>
                      <div className="thumb">
                        <a href="#">
                          <img src="img/news/news_2.png" alt="" />
                        </a>
                      </div>
                      <div className="info">
                        <a href="#">
                          <h4 className="text-light">
                            School for slum area Childrens
                          </h4>
                        </a>
                        <span className="text-light">March 21,2023</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right_text">
          <div className="container">
            <div className="row">
              <div className="bordered_1px "></div>
              <div className="col-xl-12">
                <p className="copy_right text-center">
                  <p className="text-light">
                    Copyright &copy;{new Date().getFullYear()};All rights
                    reserved | This webiste is made with ❤ by Team Chai,Charcha
                    aur code
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
