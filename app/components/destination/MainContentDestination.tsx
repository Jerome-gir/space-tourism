"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

type LinkProps = {
  link: string
  name: string
}

type MainContentDestinationProps = {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  distance: string
  travelTime: string
  links: LinkProps[]
}

function GetActiveLink({ link }: { link: LinkProps }) {
  const pathname = usePathname()
  return pathname === link.link ? "border-b-2 border-white-500" : ""
}

export default function MainContentDestination({
  imageSrc,
  imageAlt,
  title,
  description,
  distance,
  travelTime,
  links,
}: MainContentDestinationProps) {
  if (!links) {
    return <div>Error: Links are undefined</div>
  }

  return (
    <div className="flex lg:flex-col lg:items-start justify-center items-center p-6">
      <h2 className="hidden lg:block font-barlow_condensed uppercase text-center text-white mb-6 tracking-widest lg:text-2xl lg:ml-72">
        <span className="font-bold mr-6 tracking-widest lg:text-3xl">01</span>{" "}
        pick your destination
      </h2>
      <div className="flex flex-col lg:flex-row lg:items-start lg:ml-72 w-[327px] lg:w-full h-[744px] sm:mt-10 lg:mt-0 lg:gap-8">
        <h2 className="lg:hidden font-barlow_condensed uppercase text-center text-white mb-6 tracking-widest sm:-ml-96 lg:text-2xl lg:ml-72">
          <span className="font-bold mr-6 tracking-widest lg:text-3xl">01</span>{" "}
          pick your destination
        </h2>
        <div className="w-[327px] lg:w-auto h-[701px] flex flex-col justify-start items-center mt-6 lg:mt-0 lg:flex-row lg:gap-8">
          <Image
            className="sm:w-96 lg:w-[480px] lg:order-first lg:mr-16"
            src={imageSrc}
            alt={imageAlt}
            width={150}
            height={150}
          />
          <div className="lg:w-[400px]">
            <nav className="mt-8 lg:mt-0 lg:mb-10">
              <ul className="flex justify-around items-center lg:justify-start lg:gap-4">
                {links.map((link, index) => (
                  <li key={index} className="mx-5 lg:mx-0">
                    <Link
                      className={`text-white uppercase text-lg font-thin tracking-widest font-barlow_condensed cursor-pointer relative transition duration-200  border-transparent hover:scale-105 hover:text-white hover:border-white ${GetActiveLink(
                        {
                          link,
                        }
                      )} after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-white after:opacity-0 after:transition-opacity after:duration-200 after:hover:opacity-50`}
                      href={link.link}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <h3 className="uppercase text-white text-center lg:text-left mt-6 font-bellefair text-7xl lg:text-8xl">
              {title}
            </h3>
            <p className="text-light-blue text-center lg:text-left mt-4 mb-6 font-barlow_condensed text-xl font-extralight">
              {description}
            </p>
            <Image
              className="sm:border-2"
              src="/assets/shared/line.svg"
              alt="line"
              width="560"
              height="2"
            />

            <div className="flex flex-col sm:flex-row  sm:w-[600px] sm:px-4 items-center">
              <div className="flex flex-col items-center sm:items-start sm:mr-10">
                <h4 className="text-light-blue uppercase text-sm font-barlow_condensed tracking-widest mt-6 mb-3">
                  avg. distance
                </h4>
                <span className="text-white font-bellefair text-3xl uppercase mb-6 lg:text-[28px]">
                  {distance}
                </span>
              </div>
              <div className="flex flex-col items-center sm:items-start sm:ml-10">
                <span className="text-ligth-blue uppercase text-light-blue text-sm tracking-widest font-thin mb-3">
                  est. travel time
                </span>
                <span className="text-white uppercase text-3xl font-bellefair">
                  {travelTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
