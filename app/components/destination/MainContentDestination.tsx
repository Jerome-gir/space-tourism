import Image from "next/image"
import Link from "next/link"

export default function MainContentDestination() {
  const Links = [
    {
      link: "/destination",
      name: "moon",
    },
    {
      link: "/mars",
      name: "mars",
    },
    {
      link: "/europa",
      name: "europa",
    },
    {
      link: "/titan",
      name: "titan",
    },
  ]

  return (
    <div className="flex justify-center items-center p-6">
      <div className="flex flex-col w-[327px] h-[744px]">
        <h2 className="font-barlow_condensed uppercase text-center text-white mb-6 tracking-widest">
          <span className="font-bold mr-6 tracking-widest">01</span> pick your
          destination
        </h2>
        <div className="w-[327px] h-[701px] flex flex-col justify-start items-center mt-6">
          <Image
            className=""
            src="/assets/destination/image-moon.webp"
            alt="moon"
            width={150}
            height={150}
          />
          <nav className="mt-8">
            <ul className="flex justify-around items-center">
              {Links.map((link, index) => (
                <li key={index} className="mx-5">
                  <Link
                    className="text-white uppercase text-lg font-thin tracking-widest font-barlow_condensed cursor-pointer"
                    href={link.link}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <h3 className="uppercase text-white mt-6 font-bellefair text-7xl">
            moon
          </h3>
          <p className="text-light-blue text-center mt-4 mb-6 font-barlow_condensed text-xl font-extralight">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <Image
            className=""
            src="/assets/shared/line.svg"
            alt="line"
            width="560"
            height="2"
          />
          <h4 className="text-light-blue uppercase text-sm font-barlow_condensed tracking-widest mt-6 mb-3">
            avg. distance
          </h4>
          <span className="text-white font-bellefair text-3xl uppercase mb-6">
            384,400 km
          </span>
          <span className="text-white uppercase text-light-blue text-sm tracking-widest font-thin mb-3">
            est. travel time
          </span>
          <span className="text-white uppercase text-3xl font-bellefair">
            3 days
          </span>
        </div>
      </div>
    </div>
  )
}
