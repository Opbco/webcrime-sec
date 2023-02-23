import React, { useEffect, useState } from "react";



function getTime(){
    const today = new Date();
    const time = (today.getHours()<10?"0"+today.getHours():today.getHours()) + ":" + (today.getMinutes()<10?"0"+today.getMinutes():today.getMinutes())+ ":" + (today.getSeconds()<10?"0"+today.getSeconds():today.getSeconds());
    return time;
}


export default function () {
  const [time, setTime] = useState(()=>getTime());

  useEffect(()=>{

    const clock = setInterval(()=>{setTime(getTime())}, 1000);
    return ()=>{
        clearInterval(clock);
    }
  },[])

  return (
    <div>
      <strong>{time}</strong>
    </div>
  );
}
