import React from 'react'
import Question from './Question'
import './styles/evaluation.css'

const Evaluation = ({questions}) => {
    const [score, setScore] = React.useState(0);
    const [isSubmited, setIsSubmited] = React.useState(false);

  return (
    <div>
        <div className="evaluation-header">
            <h2 className="evaluation-header-title">Evaluation des acquis</h2>
            <h3> {score } / 10 </h3>
        </div>
        <div className="questions">
            {questions.map((question, index)=>(
                <Question key={`question-${index}`} quest={question} isSubmited={isSubmited} setScore={setScore} />
            ))}
        </div>
        <div className="evaluation-footer">
            <button onClick={()=>setIsSubmited(true)}>Validate</button>
        </div>
    </div>
  )
}

export default Evaluation