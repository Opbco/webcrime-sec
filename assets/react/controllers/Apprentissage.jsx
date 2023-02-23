import React from "react";
import Evaluation from "./Evaluation";
import Reading from "./Reading";

import "./styles/apprentissage.css";

const Apprentissage = ({ current }) => {
  const lesson = JSON.parse(current);
  const [tab, setTab] = React.useState(0);

  const changeTab = (index) => {
    setTab(index);
  };

  return (
    <div className="tab">
      <div className="tab-header">
        <div className={`tabs-option ${tab===0? 'selected':''}`}>
          <span onClick={() => changeTab(0)}>Prerequis</span>
        </div>
        <div className={`tabs-option ${tab===1? 'selected':''}`}>
          <span onClick={() => changeTab(1)}>Lesson</span>
        </div>
        <div className={`tabs-option ${tab===2? 'selected':''}`}>
          <span onClick={() => changeTab(2)}>Evaluation</span>
        </div>
      </div>
      <div className="tab-body">
        <div
          className="tab-content"
          style={{ display: tab === 0 ? "block" : "none" }}
        >
          <ul>
            {lesson.prerequis.map((prerequi, index) => (
              <li key={`prerequi-${index}`}>{prerequi.libelle}</li>
            ))}
          </ul>
        </div>
        <div
          className="tab-content"
          style={{ display: tab === 1 ? "block" : "none" }}
        >
          <Reading title={lesson.title} contenu={lesson.contenu} />
        </div>
        <div
          className="tab-content"
          style={{ display: tab === 2 ? "block" : "none" }}
        >
          <Evaluation questions={lesson.questions} />
        </div>
      </div>
    </div>
  );
};

export default Apprentissage;
