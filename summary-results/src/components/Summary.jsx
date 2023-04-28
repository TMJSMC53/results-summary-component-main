import React from "react";

const Summary = () => {
  return (
    <div className="summarySection">
      <h2>Summary </h2>
      <div className="summaryContainer">
        <div className="box reaction">
          <img src="../assets/images/icon-reaction.svg" alt="" />
          <p>Reaction</p>

          <span className="resultsBox">
            80
            <span className="results">/100</span>
          </span>
        </div>
        <div className="box memory">
          <img src="../assets/images/icon-memory.svg" alt="" />
          <p>Memory</p>
          <span className="resultsBox">
            92 <span className="results"> /100</span>
          </span>
        </div>
        <div className="box verbal">
          <img src="../assets/images/icon-verbal.svg" alt="" />
          <p>Verbal</p>
          <span className="resultsBox">
            61 <span className="results">/100</span>
          </span>
        </div>
        <div className="box visual">
          <img src="../assets/images/icon-visual.svg" alt="" />

          <p>Visual</p>
          <span className="resultsBox">
            72 <span className="results">/100</span>
          </span>
        </div>
      </div>

      <button className="btn">Continue</button>
    </div>
  );
};

export default Summary;
