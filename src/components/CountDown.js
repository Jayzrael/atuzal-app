import React from "react";
import Countdown from "react-countdown";

function CountDown(props) {
  const targetDate = new Date(props.targetDate);

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="flex justify-center items-center">
        <div className="p-4 border-2 w-[50%] border-red-600 mt-32">
          <p className=" font-bold text-lg">Offer Ends In:</p>
          <div className="flex justify-center items-center mb-4">
            <div className="p-4 bg-red-600 rounded-md text-white text-4xl font-bold">
              <div className="flex flex-col items-center">
                <span>{days}</span>
                <span className="text-xs uppercase">Days</span>
              </div>
            </div>
            <div className="p-4 bg-red-600 rounded-md text-white text-4xl font-bold">
              <div className="flex flex-col items-center">
                <span>{hours}</span>
                <span className="text-xs uppercase">Hours</span>
              </div>
            </div>
            <div className="p-4 bg-red-600 rounded-md text-white text-4xl font-bold">
              <div className="flex flex-col items-center">
                <span>{minutes}</span>
                <span className="text-xs uppercase">Minutes</span>
              </div>
            </div>
            <div className="p-4 bg-red-600 rounded-md text-white text-4xl font-bold">
              <div className="flex flex-col items-center">
                <span>{seconds}</span>
                <span className="text-xs uppercase">Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Countdown
      date={targetDate}
      renderer={renderer}
      onComplete={() => console.log("Countdown finished!")}
    />
  );
}

export default CountDown;
