import getTimeRemaining from "../../utils/get-time-remaining";
import { useState, useEffect } from "react";

// ✅ Or create a reusable function
function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

function convertMsToTime(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  seconds = seconds % 60;
  minutes = minutes % 60;
  hours = hours % 24;

  return `${padTo2Digits(days)}d ${padTo2Digits(hours)}h ${padTo2Digits(
    minutes
  )}m ${padTo2Digits(seconds)}s`;
}

const Countdown = ({ date }) => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(date));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeRemaining(getTimeRemaining(date));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="w-fit bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-full shadow py-2 px-4 flex justify-between gap-2">
      <p className="text-xs text-gray-900 font-semibold">Promotion Ends:</p>
      <p className="text-xs text-gray-900 font-mono font-semibold">
        {convertMsToTime(timeRemaining.total)}
      </p>
    </div>
  );
};
export default Countdown;
