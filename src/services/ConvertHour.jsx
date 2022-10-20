export const ConvertHour = (runTime) => {
  const hour = Math.floor(runTime/ 60);
       
  const min = runTime % 60;
  const textHoras = (`00${hour}`).slice(-2);
  const textrunTime = (`00${min}`).slice(-2);
  
  return {textHoras,textrunTime}
};