import Image from "next/image"
import Link from "next/link"

export default function MainContentHomepage() {
  return (
    <div className="flex justify-center items-center w-screen h-[856px]">
      <div className=" w-5/6 h-[632px]">
        <div className=" h-1/4"></div>
        <div className="flex h-1/2">
          <div className="flex flex-col justify-between w-1/2 h-96  text-white">
            <p className="uppercase text-3xl font-barlow_condensed">
              so, you want to travel to
            </p>
            <p className="uppercase text-[150px] font-bellefair">space</p>
            <p className=" text-[34px] font-thin leading-10 font-barlow_condensed">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="relative w-1/2">
            <Link href="/destination">
              <Image
                className="absolute right-24 top-9 cursor-pointer"
                src="/assets/shared/explore-button.svg"
                alt="explore button"
                width="300"
                height="300"
              ></Image>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
