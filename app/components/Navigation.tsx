"use client"

import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false)

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

  type LinkProps = {
    href: string
    numb: number
    name: string
  }

  function GetActiveLink({ link }: { link: LinkProps }) {
    const pathname = usePathname()
    return pathname === link.href ? "border-b-2 border-white-500" : ""
  }

  return (
    <div className="flex justify-between lg:items-end ">
      <div className="flex justify-between lg:w-1/2 h-12 mb-6 mt-6 lg:mt-16 pl-6 lg:pl-16">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src="/assets/shared/logo.svg"
            alt="logo"
            width="48"
            height="48"
          />
        </Link>
        <Image
          className="hidden lg:block"
          src="/assets/shared/line.svg"
          alt="line"
          width="560"
          height="2"
        />
        {!sideMenuOpen && (
          <div className="sm:hidden ml-[330px] mt-3 cursor-pointer">
            <Image
              src="/assets/shared/icon-hamburger.svg"
              alt="icon hamburger"
              width="24"
              height="21"
              onClick={() => setSideMenuOpen(true)}
            />
          </div>
        )}
        <div
          className={clsx(
            "fixed h-full w-4/6 sm:hidden bg-[#0B0D17] bg-opacity-90 top-0 right-0 transform transition-transform duration-700 z-50 opacity-90",
            {
              "translate-x-full": !sideMenuOpen,
              "translate-x-0": sideMenuOpen,
            }
          )}
        >
          <div className="flex flex-col text-white font-barlow_condensed text-xl uppercase absolute top-40 h-screen left-3 p-8 gap-8 z-50">
            <Image
              className="fixed top-4 right-4 cursor-pointer"
              src="/assets/shared/icon-close.svg"
              alt="icon close modal"
              width="20"
              height="21"
              onClick={() => setSideMenuOpen(false)}
            />
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`${GetActiveLink({ link })}`}
              >
                <span className="font-bold mr-3">
                  {link.numb.toString().padStart(2, "0")}
                </span>{" "}
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden sm:flex items-center justify-around font-barlow_condensed uppercase text-white w-5/6 lg:w-3/5 h-24 bg-white bg-opacity-15 py-6">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`${GetActiveLink({ link })}`}
          >
            <span
              className={`font-bold mr-3 ${
                index === 0 ? "hidden lg:inline-block" : ""
              }`}
            >
              {link.numb.toString().padStart(2, "0")}
            </span>{" "}
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
