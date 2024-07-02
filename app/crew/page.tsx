// crew/moon.tsx
import BackgroundCrew from "../components/crew/BackgroundCrew"
import MainContentcrew from "../components/crew/MainContentCrew"

const links = [
  {
    link: "/crew",
    image: "/assets/shared/small-pagination-Default.png",
    activeImage: "/assets/shared/small-pagination-Active.png",
  },
  {
    link: "/crew/specialist",
    image: "/assets/shared/small-pagination-Default.png",
    activeImage: "/assets/shared/small-pagination-Active.png",
  },
  {
    link: "/crew/pilot",
    image: "/assets/shared/small-pagination-Default.png",
    activeImage: "/assets/shared/small-pagination-Active.png",
  },
  {
    link: "/crew/engineer",
    image: "/assets/shared/small-pagination-Default.png",
    activeImage: "/assets/shared/small-pagination-Active.png",
  },
]

export default function Commander() {
  return (
    <>
      <BackgroundCrew />
      <MainContentcrew
        imageSrc="/assets/crew/image-douglas-hurley.webp"
        imageAlt="commander"
        title="commander"
        name="douglas hurley"
        description="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        links={links}
      />
    </>
  )
}
