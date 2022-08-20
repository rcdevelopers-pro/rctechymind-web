import React, { Component } from "react";

export default class TopFeatures extends Component {
  render() {
    return (
      <>
        <div className="cs-card-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-sm-6">
                <div className="cs-card-content">
                  <h3>1. High Quality Services</h3>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="cs-card-content">
                  <h3>2. Effective Protection</h3>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="cs-card-content">
                  <h3>3. Provide Advanced Security</h3>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="cs-card-content">
                  <h3>4. Complete Website Security</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
