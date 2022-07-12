import React from "react";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="cols">
            <a href="https://tr-tr.facebook.com">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.google.com">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="https://www.instagram.com">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://twitter.com">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com">
              <i className="fa fa-youtube-square"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
