import Image from "next/image"

export default function Background() {
  return (
    <>
      <Image
        className="-z-10"
        src="/assets/home/background-home-desktop.jpg"
        alt="homepage background"
        fill
      ></Image>
    </>
  )
}
