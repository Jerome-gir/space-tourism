// crew/moon.tsx
import BackgroundCrew from "../../components/crew/BackgroundCrew"
import MainContentcrew from "../../components/crew/MainContentCrew"

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

export default function Pilot() {
  return (
    <>
      <BackgroundCrew />
      <MainContentcrew
        imageSrc="/assets/crew/image-victor-glover.webp"
        imageAlt="pilot"
        title="pilot"
        name="victor glover"
        description="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
        links={links}
      />
    </>
  )
}
