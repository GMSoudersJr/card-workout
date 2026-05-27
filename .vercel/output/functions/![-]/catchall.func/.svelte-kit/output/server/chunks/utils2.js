function formatStopWatchTime(milliseconds) {
  let result = `00:00.000`;
  if (milliseconds === void 0 || milliseconds === null)
    return result;
  const elapsedSeconds = milliseconds / 1e3;
  const minutes = Math.floor(elapsedSeconds / 60);
  let minutesString;
  if (minutes < 10) {
    minutesString = `0${minutes.toString()}`;
  } else {
    minutesString = minutes.toString();
  }
  const seconds = elapsedSeconds % 60;
  let secondsString;
  if (seconds < 10) {
    secondsString = `0${seconds.toFixed(2)}`;
  } else {
    secondsString = seconds.toFixed(2);
  }
  result = `${minutesString}:${secondsString}`;
  return result;
}
const thisYear = () => {
  const date = new Date(Date.now());
  return date.getFullYear();
};
const exercisesHaveNotBeenChosen = (entry) => {
  return entry.exercise?.name === void 0;
};
export {
  exercisesHaveNotBeenChosen as e,
  formatStopWatchTime as f,
  thisYear as t
};
