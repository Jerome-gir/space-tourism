import BackgroundTechnology from "../../components/technology/BackgroundTechnology"
import MainContentTechnology from "../../components/technology/MainContentTechnology"

const links = [
  {
    link: "/technology",
    image: "/assets/shared/technology-pagination-Default-1.png",
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
    activeImage: "/assets/shared/technology-pagination-Active-3.png",
  },
]

export default function SpaceCapsule() {
  return (
    <>
      <BackgroundTechnology />
      <MainContentTechnology
        imageSrc="/assets/technology/image-space-capsule-portrait.jpg"
        imageAlt="space capsule"
        title="the terminology..."
        name="space capsule"
        description="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        links={links}
      />
    </>
  )
}
