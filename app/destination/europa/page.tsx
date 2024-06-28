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
        imageSrc="/assets/destination/image-europa.webp"
        imageAlt="europa"
        title="europa"
        description="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
        distance="628 mil. km"
        travelTime="3 years"
        links={links}
      />
    </>
  )
}
