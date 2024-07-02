import Image from "next/image"

export default function BackgroundDestination() {
  return (
    <>
      <Image
        className="hidden lg:block -z-10"
        src="/assets/destination/background-destination-desktop.jpg"
        alt="destination background"
        fill
      ></Image>
      <Image
        className="block lg:hidden -z-10"
        src="/assets/destination/background-destination-tablet.jpg"
        alt="destination background"
        fill
      ></Image>
      <Image
        className="block sm:hidden -z-10"
        src="/assets/destination/background-destination-mobile.jpg"
        alt="homepage background"
        fill
      ></Image>
    </>
  )
}
