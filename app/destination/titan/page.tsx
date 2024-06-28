// destination/moon.tsx
import BackgroundDestination from "../../components/destination/BackgroundDestination"
import MainContentDestination from "../../components/destination/MainContentDestination"

const links = [
  { link: "/destination", name: "moon" },
  { link: "/destination/mars", name: "mars" },
  { link: "/destination/europa", name: "europa" },
  { link: "/destination/titan", name: "titan" },
]

export default function Moon() {
  return (
    <>
      <BackgroundDestination />
      <MainContentDestination
        imageSrc="/assets/destination/image-titan.webp"
        imageAlt="titan"
        title="titan"
        description="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
        distance="1.6 bil. km"
        travelTime="7 years"
        links={links}
      />
    </>
  )
}
