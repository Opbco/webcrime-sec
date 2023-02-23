import React from "react";
import "./styles/banner.css";
import Hello from "./Hello";

const Banner = ({ email, username, age, level, levels, progression }) => {
  const niveaux = JSON.parse(levels);
  const progress = JSON.parse(progression);

  return (
    <>
      <div className="banner">
        <div className="logo">
          <div className="logo-text"><Hello /> WEB-SEC-CRIME</div>
          <div className="logo-img">
            <img src="/images/logo-v.jpeg" alt="Logo" />
          </div>
        </div>
        <div className="user">
          <div className="user-details">
            Welcome, <span>{username}</span>
          </div>
          <div className="user-logout">
            <a href="/logout" className="btn-link">
              Log out
            </a>
          </div>
        </div>
      </div>
      <div className="progress-bar">{
        niveaux.map((niveau, index)=>(
            <div key={index} data-label={niveau.libelle} className={`progress-step ${niveau.id <= progress.niveau.id ? 'passed' : ''} ${niveau.id === progress.niveau.id ? 'current' : ''}`}>
            </div>
        ))
      }</div>
    </>
  );
};

export default Banner;
