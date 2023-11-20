import React, { useState } from 'react'
import Tab from "./Tab";

type TabsBannerProps = {
  tabs: string[];
};

function TabsBanner({ tabs }: TabsBannerProps) {

  return (
    <div id="tabsBanner" className="mb-[25px]">
      {tabs.map((tab, index) => (
        <Tab 
          key={index}
          tabName={tab} 
        />
      ))}
    </div>
  )
}

export default TabsBanner