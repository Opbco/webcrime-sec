import React, { useEffect } from "react";
import "./styles/question.css";

function getNumberAnswer(responses) {
  return responses.reduce((s, c) => (c.status ? s + 1 : s), 0);
}

const Question = ({ quest, isSubmited, setScore }) => {
  const [question, setQuestion] = React.useState(() => {
    const reponses = quest.responses.map((resp) => ({
      ...resp,
      selected: false,
      score: resp.status ? 1 : 0,
    }));
    return {
      ...quest,
      nb: getNumberAnswer(quest.responses),
      responses: reponses,
    };
  });

  const selectResponse = (i) => {
    setQuestion((prev) => {
      const select = !prev.responses[i].selected;
      const isCorrect = prev.responses[i].status === true;
      const reponses = prev.responses.map((resp, ind) => {
        if (i === ind) return { ...resp, selected: select };
        if (select && prev.nb === 1) return { ...resp, selected: false };
        return resp;
      });
      return { ...prev, responses: reponses };
    });
  };

  useEffect(() => {
    const score = question.responses.reduce(
      (s, v) =>
        v.selected && v.status == true
          ? s + 1
          : v.selected && v.status == false
          ? s - 1
          : s,
      0
    );
    console.log(score);
    if (isSubmited) setScore((prev) => prev + score);
  }, [isSubmited]);

  return (
    <div className="question">
      <div className="question-title">{question.libelle}</div>
      <div className="question-responses">
        {question.responses.map((reponse, index) => (
          <div
            key={`response-${index}`}
            onClick={() => selectResponse(index)}
            className={`question-response ${
              reponse.selected ? "selected" : ""
            } ${isSubmited && reponse.status==true? 'valid': ''}`}
          >
            {reponse.libelle}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
