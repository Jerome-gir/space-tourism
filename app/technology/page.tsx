import BackgroundTechnology from "../components/technology/BackgroundTechnology"
import MainContentTechnology from "../components/technology/MainContentTechnology"

const links = [
  {
    link: "/technology",
    image: "/assets/shared/small-pagination-Default.png",
    activeImage: "/assets/shared/technology-pagination-Active.png",
  },
  {
    link: "/technology/spaceport",
    image: "/assets/shared/technology-pagination-Default-2.png",
    activeImage: "/assets/shared/technology-pagination-Active-2.png",
  },
  {
    link: "/technology/space-capsule",
    image: "/assets/shared/technology-pagination-Default-3.png",
    activeImage: "/assets/shared/small-pagination-Active.png",
  },
]

export default function Technology() {
  return (
    <>
      <BackgroundTechnology />
      <MainContentTechnology
        imageSrc="/assets/technology/image-launch-vehicle-portrait.jpg"
        imageSrcTablet="/assets/technology/image-launch-vehicle-landscape.jpg"
        imageAlt="launch vehicle"
        title="the terminology..."
        name="launch vehicle"
        description="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        links={links}
      />
    </>
  )
}
