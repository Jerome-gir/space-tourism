import Image from "next/image"

export default function BackgroundDestination() {
  return (
    <>
      <Image
        className="-z-10"
        src="/assets/destination/background-destination-mobile.jpg"
        alt="homepage background"
        fill
      ></Image>
    </>
  )
}
