import Image from "next/image"
import Link from "next/link"

export default function Navigation() {
  const links = [
    {
      href: "/",
      numb: 0,
      name: "Home",
    },
    {
      href: "/destination",
      numb: 1,
      name: "Destination",
    },
    {
      href: "/crew",
      numb: 2,
      name: "Crew",
    },
    {
      href: "/technology",
      numb: 3,
      name: "Technology",
    },
  ]

  return (
    <div className="flex justify-between items-end w-full h-[136px] ">
      <div className=" flex justify-between w-1/2 h-12 mb-6 mt-16 pl-16 ">
        <Image
          src="/assets/shared/logo.svg"
          alt="logo"
          width="48"
          height="48"
        ></Image>
        <Image
          src="/assets/shared/line.svg"
          alt="line"
          width="560"
          height="2"
        ></Image>
      </div>
      <div className="flex items-center justify-around font-barlow_condensed uppercase text-white w-3/5 h-24 bg-white bg-opacity-15 py-6">
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            <span className="font-bold mr-3">
              {link.numb.toString().padStart(2, "0")}
            </span>{" "}
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
