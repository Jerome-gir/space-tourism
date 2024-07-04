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

export default function Spaceport() {
  return (
    <>
      <BackgroundTechnology />
      <MainContentTechnology
        imageSrc="/assets/technology/image-spaceport-portrait.jpg"
        imageSrcTablet="/assets/technology/image-spaceport-landscape.jpg"
        imageAlt="spaceport"
        title="the terminology..."
        name="spaceport"
        description="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        links={links}
      />
    </>
  )
}
