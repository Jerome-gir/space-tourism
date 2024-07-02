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

export default function Engineer() {
  return (
    <>
      <BackgroundCrew />
      <MainContentcrew
        imageSrc="/assets/crew/image-anousheh-ansari.webp"
        imageAlt="engineer"
        title="flight engineer"
        name="anousheh ansari"
        description="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
        links={links}
      />
    </>
  )
}
