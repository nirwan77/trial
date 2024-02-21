"use client";

import { useState } from "react";
import Card from "./Card";

const Trending = () => {
  const [activeTab, setActiveTab] = useState<string>("Weekly");

  return (
    <div>
      <div className="flex mb-8 justify-between px-8 gap-8 text-xs leading-4 font-bold text-center">
        <button
          className={
            activeTab === "Daily"
              ? "text-white py-2 px-4 rounded-lg bg-SoSHColorPrimary"
              : "text-SoshColorGrey500 py-2 px-4"
          }
          onClick={(e) => setActiveTab("Daily")}
        >
          Daily
        </button>
        <button
          className={
            activeTab === "Weekly"
              ? "text-white py-2 px-4 rounded-lg bg-SoSHColorPrimary"
              : "text-SoshColorGrey500 py-2 px-4"
          }
          onClick={(e) => setActiveTab("Weekly")}
        >
          Weekly
        </button>
        <button
          className={
            activeTab === "Monthly"
              ? "text-white py-2 px-4 rounded-lg bg-SoSHColorPrimary"
              : "text-SoshColorGrey500 py-2 px-4"
          }
          onClick={(e) => setActiveTab("Monthly")}
        >
          Monthly
        </button>
      </div>
      <Card />
    </div>
  );
};

export default Trending;
