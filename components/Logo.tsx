import LogoImage from '../images/logos/carallel_logo.svg';
import Link from "next/link";
import { AspectRatio } from './ui/aspect-ratio';
import Image from 'next/image';

function Logo() {
  return (
    // If prefetch={true}, it will attempt to pre-fetch the home page,
    // the page it's linked to.
    <Link href="/" prefetch={false} className="overflow-hidden">
        <div className="flex items-center w-72 h-14">
            <AspectRatio
                ratio={16 / 9}
                className="flex items-center justify-center"
            >
                <Image 
                    priority
                    src={LogoImage}
                    alt="logo"
                    className="rounded-full dark:filter dark:invert"
                />
            </AspectRatio>
        </div>
    </Link>
  )
}

export default Logo