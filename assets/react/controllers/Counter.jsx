import React from "react";

const Counter = ({ time, isSubmited, evaluating, setIsSubmited }) => {
  const [counterDown, setCounterDown] = React.useState(time);

  React.useEffect(() => {
    let counterstep, counterStop;
    if(evaluating){
        counterstep = setInterval(() => {
            if (isSubmited === false) setCounterDown((prev) => prev - 1);
          }, 1000);
        counterStop = setTimeout(()=>{
            setIsSubmited(true);
            clearInterval(counterstep);
        }, (time+1)*1000)          
    }

    if(isSubmited) clearInterval(counterstep);

    return () => {
      clearInterval(counterstep);
    };
  }, [evaluating, isSubmited]);

  return (
    <div style={{ color: counterDown < 30 ? "red" : "green" }}>
      {counterDown}
    </div>
  );
};

export default Counter;
