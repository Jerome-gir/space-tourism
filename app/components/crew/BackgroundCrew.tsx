import Image from "next/image"

export default function BackgroundCrew() {
  return (
    <>
      <Image
        className="-z-10"
        src="/assets/crew/background-crew-mobile.jpg"
        alt="homepage background"
        fill
      ></Image>
    </>
  )
}
