import Image from "next/image"

export default function BackgroundDestination() {
  return (
    <>
      <Image
        className="block sm:hidden -z-10 object-cover"
        src="/assets/destination/background-destination-mobile.jpg"
        alt="homepage background"
        fill
      ></Image>
      <Image
        className="hidden sm:block -z-10 object-cover"
        src="/assets/destination/background-destination-tablet.jpg"
        alt="homepage background"
        fill
      ></Image>
      <Image
        className="hidden lg:block -z-10 object-cover"
        src="/assets/destination/background-destination-desktop.jpg"
        alt="homepage background"
        fill
      ></Image>
    </>
  )
}
