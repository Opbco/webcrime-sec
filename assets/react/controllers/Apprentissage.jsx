import React from "react";
import Evaluation from "./Evaluation";
import Reading from "./Reading";

import "./styles/apprentissage.css";

const Apprentissage = ({ current }) => {
  const lesson = JSON.parse(current);
  const [tab, setTab] = React.useState(0);
  const [evaluate, setEvaluate] = React.useState(false);

  const changeTab = (index) => {
    setTab(index);
  };

  return (
    <div className="tab">
      <div className="tab-header">
        <div onClick={() => changeTab(0)} className={`tabs-option ${tab===0? 'selected':''}`}>
          <span>Prerequis</span>
        </div>
        <div onClick={() => changeTab(1)} className={`tabs-option ${tab===1? 'selected':''}`}>
          <span>Lesson</span>
        </div>
        <div onClick={() => {changeTab(2); setEvaluate(true)}} className={`tabs-option ${tab===2? 'selected':''}`}>
          <span>Evaluation</span>
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
          <Evaluation questions={lesson.questions} evaluating={evaluate} setEvaluating={setEvaluate} />
        </div>
      </div>
    </div>
  );
};

export default Apprentissage;
