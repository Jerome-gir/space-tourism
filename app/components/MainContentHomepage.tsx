import Image from "next/image"
import Link from "next/link"

export default function MainContentHomepage() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className=" w-[768px] h-full pt-20 lg:w-5/6 lg:h-[632px]">
        <div className="lg:h-1/2"></div>
        <div className="lg:flex justify-center items-center lg:flex-row lg:h-1/2">
          <div className="flex flex-col justify-between items-center lg:items-start lg:w-1/2 lg:h-96  text-white">
            <p className="uppercase text-2xl lg:text-3xl font-barlow_condensed">
              so, you want to travel to
            </p>
            <p className="uppercase  text-[144px] lg:text-[150px] font-bellefair">
              space
            </p>
            <p className="text-[18px] mb-16 lg:text-[34px] text-center lg:text-start lg:font-thin lg:leading-10 font-barlow_condensed w-[512px] h-[87px] lg:w-auto lg:h-auto">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="flex justify-center lg:relative lg:w-1/2">
            <Link href="/destination">
              <Image
                className="lg:absolute lg:right-24 lg:-top-40 cursor-pointer"
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
