import React from "react";
import "./viewmusic.scss";
import Music from "../../img/musicgirl.png";
const Musicdetail = () => {
  return (
    <div className="musicdetails">
      <div>
        <div className="musicpicture">
          <img src={Music} height={80} className="musicdetail" />
        </div>
        <div className="musicname">
          <h5>Hello</h5>
          <h2>Sergei Kodjebash</h2>
        </div>
      </div>
      <div>
        <div className="musicpicture">
          <img src={Music} height={80} className="musicdetail" />
        </div>
        <div className="musicname">
          <h5>Hello</h5>
          <h2>Sergei Kodjebash</h2>
        </div>
      </div>
      <div>
        <div className="musicpicture">
          <img src={Music} height={80} className="musicdetail" />
        </div>
        <div className="musicname">
          <h5>Hello</h5>
          <h2>Sergei Kodjebash</h2>
        </div>
      </div>
    </div>
  );
};

export default Musicdetail;
