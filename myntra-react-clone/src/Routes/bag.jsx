import React from "react";
import BagSummary from "../components/BagSummary";

const bag = () => {
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container"></div>

          <BagSummary />
        </div>
      </main>
    </>
  );
};

export default bag;
