import React from "react";

const Reason = () => {
  return (
    <div className="reson_area section_padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center mb-55">
              <h3>
                <span>Reason of Helping</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="single_reson">
              <div className="thum">
                <div className="thum_1">
                  <img src="img/help/1.png" alt="" />
                </div>
              </div>
              <div className="help_content">
                <h4>Collecting Fund</h4>
                <p>
                  Collected Funds are then used for the welfare of the society
                </p>
                <a href="#" className="read_more">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single_reson">
              <div className="thum">
                <div className="thum_1">
                  <img src="img/help/2.png" alt="" />
                </div>
              </div>
              <div className="help_content">
                <h4>Blood Camp</h4>
                <p>Once a blood donor, always a lifesaver.</p>
                <a href="#" className="read_more">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single_reson">
              <div className="thum">
                <div className="thum_1">
                  <img src="img/help/3.png" alt="" />
                </div>
              </div>
              <div className="help_content">
                <h4>Friendly Volunteer</h4>
                <p>
                  Volunteers don't get paid, not because they're worthless, but
                  because they're priceless.
                </p>
                <a href="#" className="read_more">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reason;
