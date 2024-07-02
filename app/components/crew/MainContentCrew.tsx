"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

type LinkProps = {
  link: string
  image: string
  activeImage: string
}

type MainContentCrewProps = {
  imageSrc: string
  imageAlt: string
  title: string
  name: string
  description: string
  links: LinkProps[]
}

function GetActiveLink({ link }: { link: LinkProps }) {
  const pathname = usePathname()
  return pathname === link.link ? link.activeImage : link.image
}

export default function MainContentCrew({
  imageSrc,
  imageAlt,
  title,
  name,
  description,
  links,
}: MainContentCrewProps) {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-[327px] h-[744px] sm:mt-10">
        <h1 className="font-barlow_condensed uppercase text-center text-white tracking-widest mb-16 lg:text-2xl">
          <span className="font-bold mr-6 tracking-widest lg:text-3xl">02</span>{" "}
          meet your crew
        </h1>
        <h2 className="font-bellefair text-lg text-center text-white uppercase font-thin">
          {title}
        </h2>
        <h3 className="font-bellefair text-center text-2xl mt-2 mb-6 text-white uppercase">
          {name}
        </h3>
        <p className="text-light-blue font-extralight text-center">
          {description}
        </p>
        <nav className="mt-16">
          <ul className="flex items-center justify-center">
            {links.map((link, index) => (
              <li key={index} className="mx-2">
                <Link className="text-white" href={link.link}>
                  <Image
                    src={GetActiveLink({ link })}
                    alt={link.link}
                    width={12}
                    height={12}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center justify-center mt-12">
          <Image
            className=""
            src={imageSrc}
            alt={imageAlt}
            width={271}
            height={340}
          />
        </div>
      </div>
    </div>
  )
}
