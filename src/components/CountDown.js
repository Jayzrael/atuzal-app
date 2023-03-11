import React from "react";
import ReactAwesomeClock from "react-awesome-clock";

const CountDown = () => {
  return (
    <div className="mt-24">
      <ReactAwesomeClock
        day={true}
        style={{
          color: "red",
          fontSize: 60,
          textShadow: "0 0 10px grey",
          fontFamily: "aerial",
        }}
      />
      {/* // Clock Component With Days Count */}
    </div>
  );
};

export default CountDown;
