import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faBell } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { Lora } from 'next/font/google';

const lora = Lora({
    subsets: ['latin'],
    display: 'swap'
});

function TopBanner({ header }: { header: string }) {
  return (
    <div className="mt-[15px] text-lg mb-[30px] flex items-center justify-between cursor-pointer">
        <FontAwesomeIcon icon={faGear} size={"lg"} />
        <p className={lora.className}>
            {header}
        </p>
        <FontAwesomeIcon icon={faBell} size={"lg"} />
    </div>
  )
}

export default TopBanner