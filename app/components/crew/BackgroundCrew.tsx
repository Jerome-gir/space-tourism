import Image from "next/image"

export default function BackgroundCrew() {
  return (
    <>
      <Image
        className="block sm:hidden -z-10"
        src="/assets/crew/background-crew-mobile.jpg"
        alt="homepage background"
        fill
      ></Image>
      <Image
        className="hidden sm:block -z-10"
        src="/assets/crew/background-crew-tablet.jpg"
        alt="homepage background"
        fill
      ></Image>
      <Image
        className="hidden lg:block object-cover -z-10"
        src="/assets/crew/background-crew-desktop.jpg"
        alt="homepage background"
        quality={100}
        fill
        sizes="100vw"
      ></Image>
    </>
  )
}
