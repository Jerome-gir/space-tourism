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

export default function Specialist() {
  return (
    <>
      <BackgroundCrew />
      <MainContentcrew
        imageSrc="/assets/crew/image-mark-shuttleworth.webp"
        imageAlt="specialist"
        title="mission specialist"
        name="mark shuttleworth"
        description="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        links={links}
      />
    </>
  )
}
