import Image from "next/image"

export default function Background() {
  return (
    <>
      <Image
        className="hidden lg:block -z-10"
        src="/assets/home/background-home-desktop.jpg"
        alt="homepage background"
        fill
      ></Image>
      <Image
        className="block lg:hidden -z-10"
        src="/assets/home/background-home-tablet.jpg"
        alt="homepage background"
        fill
      ></Image>
    </>
  )
}
