import Image from "next/image"

export default function BackgroundTechnology() {
  return (
    <>
      <Image
        className="block sm:hidden -z-10 object-cover"
        src="/assets/technology/background-technology-mobile.jpg"
        alt="homepage background"
        fill
      ></Image>
      <Image
        className="hidden sm:block -z-10 object-cover"
        src="/assets/technology/background-technology-tablet.jpg"
        alt="homepage background"
        fill
      ></Image>
      <Image
        className="hidden lg:block -z-10 object-cover"
        src="/assets/technology/background-technology-desktop.jpg"
        alt="homepage background"
        fill
      ></Image>
    </>
  )
}
