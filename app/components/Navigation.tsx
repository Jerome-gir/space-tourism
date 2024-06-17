"use client"

import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

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

  return (
    <div className="flex justify-between lg:items-end w-full h-[136px]">
      <div className="flex justify-between lg:w-1/2 h-12 mb-6 mt-6 lg:mt-16 pl-6 lg:pl-16">
        <Image
          src="/assets/shared/logo.svg"
          alt="logo"
          width="48"
          height="48"
        ></Image>
        <Image
          className="hidden lg:block"
          src="/assets/shared/line.svg"
          alt="line"
          width="560"
          height="2"
        ></Image>
        {sideMenuOpen ? (
          "hidden"
        ) : (
          <div className="sm:hidden ml-[330px] mt-3 cursor-pointer">
            <Image
              src="/assets/shared/icon-hamburger.svg"
              alt="icon hamburger"
              width="24"
              height="21"
              onClick={() => setSideMenuOpen(true)}
            ></Image>
          </div>
        )}
        <div
          className={clsx(
            "fixed h-full w-4/6 sm:hidden bg-white/50 top-0 right-0 translate-x-full duration-700",
            sideMenuOpen && "-translate-x-0 duration-1000"
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
            ></Image>
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
      </div>
      <div className="hidden sm:flex items-center justify-around font-barlow_condensed uppercase text-white w-5/6 lg:w-3/5 h-24 bg-white bg-opacity-15 py-6">
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            <span
              className={`font-bold mr-3 ${
                index === 0 ? " hidden lg:inline-block" : ""
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
