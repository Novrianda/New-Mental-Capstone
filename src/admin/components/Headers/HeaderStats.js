import React from "react";

// components

import CardStats from "../Cards/CardStats"

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-dark-green md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            
            <div className="flex flex-wrap">
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TEST PENDETEKSI"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-orange-500"
                />
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
