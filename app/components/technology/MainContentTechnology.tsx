"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

type LinkProps = {
  link: string
  image: string
  activeImage: string
}

type MainContentTechnologyProps = {
  imageSrc: string
  imageSrcTablet: string
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

export default function MainContentTechnology({
  imageSrc,
  imageSrcTablet,
  imageAlt,
  title,
  name,
  description,
  links,
}: MainContentTechnologyProps) {
  return (
    <div className="flex flex-col items-center p-4 ">
      <h1 className="font-barlow_condensed uppercase text-center text-white tracking-widest mb-16 sm:mb-0 sm:text-xl sm:p-6 lg:px-44 sm:text-left lg:text-3xl w-screen">
        <span className="font-bold mr-6 tracking-widest lg:text-3xl opacity-50">
          03
        </span>{" "}
        space launch 101
      </h1>
      <div className="lg:w-5/6 lg:flex lg:flex-row-reverse">
        <Image
          className="sm:hidden sm:w-[433px] lg:block lg:w-[800px]"
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={340}
        />
        <Image
          className="hidden sm:block sm:w-[800px] lg:hidden sm:mt-16"
          src={imageSrcTablet}
          alt={imageAlt}
          width={400}
          height={340}
        />
        <div className="w-[350px] sm:w-screen sm:mt-10 lg:flex lg:items-start">
          <nav className="mt-8 mb-10 lg:mt-0 lg:mb-0 lg:mr-16">
            <ul className="flex items-center justify-center lg:justify-start lg:flex-col lg:items-start">
              {links.map((link, index) => (
                <li key={index} className="mx-2 lg:mx-0 lg:my-2">
                  <Link className="text-white" href={link.link}>
                    <Image
                      className="sm:size-14 lg:size-20"
                      src={GetActiveLink({ link })}
                      alt={link.link}
                      width={40}
                      height={40}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:flex-1">
            <h2 className="font-bellefair text-lg lg:text-4xl text-center lg:text-start text-white opacity-50 uppercase font-thin sm:text-2xl sm:mb-4">
              {title}
            </h2>
            <h3 className="font-bellefair text-center text-2xl lg:text-6xl sm:text-5xl mt-2 mb-6 text-white uppercase lg:text-start">
              {name}
            </h3>
            <p className="text-light-blue font-extralight font-barlow_condensed text-center lg:text-start lg:pr-96 lg:w-full lg:px-0 sm:px-48 sm:text-lg">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
