import React from 'react'
import { Button } from './ui/button'
import { useEffect } from 'react';

function Tab({ tabName }: { tabName: string }) {

  useEffect(() => {
    const allTab = document.getElementById('All');
    if (allTab) {
      allTab.className= `tab bg-dark-green px-[15px] py-2 rounded-full font-bold text-white mr-[10px] mb-[10px]`;
    }
  });

  // Function to toggle classNames of tab when clicked
  function setActive() {
    const tabs = document.getElementsByClassName('tab');

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].className = `tab text-black font-bold py-2 px-[15px] mr-[10px] mb-[10px]`
    }

    const clickedTab = document.getElementById(tabName);
    if (clickedTab) {
      clickedTab.className = `tab bg-dark-green px-[15px] py-2 rounded-full font-bold text-white mr-[10px] mb-[10px]`
    }
  }

  return (
    <Button
        id={tabName}
        className="tab text-black bg-white px-[15px] py-2 rounded-full font-bold mr-[10px] mb-[10px]"
        onClick={setActive}
    >
        {tabName}
    </Button>
  )
}

export default Tab